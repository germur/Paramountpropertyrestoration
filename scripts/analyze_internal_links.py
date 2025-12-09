import os
import networkx as nx
import pandas as pd
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin, urldefrag
import glob

# Configuration
DIST_DIR = 'dist'
DAMPING_FACTOR = 0.85
MIN_PAGERANK_THRESHOLD = 0.001 # 0.1%

def get_html_files(dist_dir):
    """Recursively find all .html files in the dist directory."""
    return glob.glob(os.path.join(dist_dir, '**/*.html'), recursive=True)

def normalize_url(url, base_url):
    """Normalize URL to be internal and absolute path from root."""
    if not url:
        return None
    
    # Strip whitespace
    url = url.strip()
    
    # Ignore special protocols
    if url.startswith(('mailto:', 'tel:', 'javascript:', '#')):
        return None
        
    # Join with base if relative
    full_url = urljoin(base_url, url)
    
    # Remove fragment
    full_url, _ = urldefrag(full_url)
    
    # Parse
    parsed = urlparse(full_url)
    
    # Check if internal (assuming localhost or relative logic)
    # Since we are scanning files, we treat everything strictly relative to root / as internal
    # If full_url starts with http/https, check if it matches our domain (not strictly known here, but we can infer or ignore)
    
    # For this static analysis, we mainly care about paths like /services/water-damage
    # If the constructed URL has a netloc that isn't empty, it might be external.
    # However, since we are parsing file:// effectively, we need to be careful.
    
    # Strategy:
    # 1. If it starts with /, it's internal.
    # 2. If it's relative (no scheme/netloc), it's internal.
    # 3. If it has a scheme, exclude it unless it's the site's domain (which we might not know, so safer to exclude all http/s for now to be purely internal).
    
    if parsed.scheme in ('http', 'https'):
        # For now, treat all absolute URLs as external to be safe, unless we want to configure a domain.
        # Let's assume relative links or root-relative links are the main internal structure.
        return None
        
    path = parsed.path
    if not path.startswith('/'):
        path = '/' + path
        
    # Remove trailing slash for consistency (unless root)
    if path != '/' and path.endswith('/'):
        path = path[:-1]
        
    return path

def get_canonical_path(file_path, dist_dir):
    """Convert file path to web path (e.g. dist/index.html -> /)"""
    rel_path = os.path.relpath(file_path, dist_dir)
    
    if rel_path == 'index.html':
        return '/'
        
    if rel_path.endswith('/index.html'):
        return '/' + os.path.dirname(rel_path)
    
    if rel_path.endswith('.html'):
        return '/' + rel_path[:-5] # remove .html
        
    return '/' + rel_path

def extract_links(file_path, dist_dir):
    """Parse HTML and extract links from <main> content."""
    if not os.path.isfile(file_path):
        return None, []
        
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            soup = BeautifulSoup(f, 'lxml')
        except Exception as e:
            print(f"Error parsing {file_path}: {e}")
            return [], []

    # Get canonical path of current page
    source_url = get_canonical_path(file_path, dist_dir)
    
    # Find main content
    main_content = soup.find('main')
    
    links = []
    
    if main_content:
        for a in main_content.find_all('a', href=True):
            target = normalize_url(a['href'], source_url)
            if target:
                links.append(target)
                
    return source_url, links

def analyze_links():
    print("Starting Internal Link Analysis...")
    
    html_files = get_html_files(DIST_DIR)
    print(f"Found {len(html_files)} HTML files in {DIST_DIR}")
    
    G = nx.DiGraph()
    
    # Build Graph
    for file_path in html_files:
        source, targets = extract_links(file_path, DIST_DIR)
        
        if source is None:
            continue
            
        G.add_node(source)
        
        for target in targets:
            # We add edges even if target node doesn't exist yet (it might be created later or be a 404)
            # To be strict, we might want to only add edges to existing nodes, but we don't know all nodes yet.
            G.add_edge(source, target)
            
    # Remove nodes that are not in our source list (external links disguised as internal or dead links)?
    # Actually, keeping them helps identify broken links, but for PageRank we usually want a closed system or to handle sinks.
    # Let's keep them for now, identifying 404s is a bonus.
    
    # Calculate PageRank
    print("Calculating PageRank...")
    try:
        pr = nx.pagerank(G, alpha=DAMPING_FACTOR)
    except Exception as e:
        print(f"PageRank failed: {e}")
        return

    # Create DataFrame
    df = pd.DataFrame.from_dict(pr, orient='index', columns=['PageRank'])
    
    # Add metrics
    df['InLinks'] = [G.in_degree(n) for n in df.index]
    df['OutLinks'] = [G.out_degree(n) for n in df.index]
    
    # Identify non-existing pages (potential 404s)
    # Nodes in G that were never a 'source'
    known_sources = set()
    for f in html_files:
        known_sources.add(get_canonical_path(f, DIST_DIR))
        
    df['Status'] = df.index.map(lambda x: 'Existing' if x in known_sources else 'Not Found (Potential 404)')
    
    # Sort by PageRank
    df = df.sort_values('PageRank', ascending=False)
    
    # Normalize PageRank to sum to 1 (NetworkX does this, but readable percentages are nice)
    df['PageRank %'] = df['PageRank'] * 100
    
    # Report Generation
    generate_report(df, G)

def generate_report(df, G):
    report_path = 'INTERNAL_LINK_REPORT.md'
    
    top_10 = df[df['Status'] == 'Existing'].head(20)
    
    # Wasted Equity: High PR pages with few outlinks (Sinks)
    # Filter for existing pages only
    existing_df = df[df['Status'] == 'Existing']
    wasted_equity = existing_df[(existing_df['OutLinks'] < 5) & (existing_df['PageRank'] > existing_df['PageRank'].mean())]
    
    # Bottlenecks: High InLinks but Low PageRank? Or High PageRank but low OutLinks?
    # Let's define Bottlenecks as pages that 'should' distribute more. Similar to wasted equity.
    
    # Strategic Opportunities: Pages with Low InLinks but potentially high value?
    # Hard to say without content analysis.
    
    # Potential 404s receiving link equity
    broken_targets = df[df['Status'] != 'Existing'].head(10)
    
    with open(report_path, 'w') as f:
        f.write("# Internal Link PageRank Analysis Report\n\n")
        
        f.write("## Top 20 Authority Pages\n")
        f.write("These pages have the highest PageRank, receiving the most internal link equity.\n\n")
        f.write(top_10[['PageRank %', 'InLinks', 'OutLinks']].to_markdown())
        f.write("\n\n")
        
        f.write("## Potential Wasted Equity (High PR, Low Outlinks)\n")
        f.write("These high-authority pages have fewer than 5 internal links in their main content, potentially trapping equity.\n\n")
        f.write(wasted_equity[['PageRank %', 'InLinks', 'OutLinks']].to_markdown())
        f.write("\n\n")
        
        f.write("## Top 10 Broken Link Targets (Receiving Equity)\n")
        f.write("These paths are linked to but were not found in the crawl (Potential 404s).\n\n")
        f.write(broken_targets[['PageRank %', 'InLinks']].to_markdown())
        f.write("\n\n")
        
        f.write("## Analysis Notes\n")
        f.write(f"- Total Pages Analyzed: {len(existing_df)}\n")
        f.write(f"- Total Links Found: {G.number_of_edges()}\n")
        f.write(f"- Damping Factor: {DAMPING_FACTOR}\n")
        f.write("- Links extracted from `<main>` tag only.\n")

    print(f"Report generated at {report_path}")

if __name__ == '__main__':
    analyze_links()
