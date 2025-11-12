import { useState, useMemo } from "react";
import BlogCard from "./BlogCard.jsx";

const POSTS_PER_PAGE = 6;

export default function InteractiveBlog({ allPosts, allTags, recentPosts }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTag, setActiveTag] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleTagClick = (tag) => {
        setActiveTag(currentTag => (currentTag === tag ? null : tag));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setActiveTag(null);
        setCurrentPage(1);
    };

    const filteredPosts = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();
        const tag = activeTag?.toLowerCase().trim();

        return allPosts.filter((post) => {
            const postData = post.data;
            const postTags = postData.tags?.map(t => t.toLowerCase()) || [];
            const matchesSearch = !term ||
                postData.title.toLowerCase().includes(term) ||
                postData.description.toLowerCase().includes(term);
            const matchesTag = !tag || postTags.includes(tag);
            return matchesSearch && matchesTag;
        });
    }, [searchTerm, activeTag, allPosts]);

    const featuredPosts = filteredPosts.filter(post => post.data.featured);
    const regularPosts = filteredPosts.filter(post => !post.data.featured);
    const isFiltering = searchTerm || activeTag;

    const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
    const paginatedRegularPosts = regularPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        document.querySelector('.all-posts-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="blog-layout">
            {/* Columna Principal */}
            <main className="blog-main">
                <div className="sidebar-widget mobile-search-widget"><h3>Search Articles</h3><div className="search-box"><input type="text" placeholder="Search..." className="search-input" value={searchTerm} onChange={handleSearchChange} /></div></div>
                {isFiltering && (<div className="search-results-info"><span>{filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found{filteredPosts.length !== 1 ? "s" : ""}</span><button onClick={clearFilters} className="clear-search-btn">Clear Filters</button></div>)}
                {filteredPosts.length === 0 && isFiltering && (<div className="no-results"><h3>No articles found</h3>
                    <p>Try different keywords or clear the filters.</p></div>)}
                {featuredPosts.length > 0 && (
                    <section className="featured-section">
                        <h2 className="section-title">Featured Articles</h2>
                        <div className="featured-grid">
                            {featuredPosts.map((post) => (
                                <BlogCard key={post.id} {...post.data} slug={post.slug} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Barra Lateral */}
            <aside className="blog-sidebar">
                <div className="sidebar-widget desktop-search-widget"><h3>Search Articles</h3><div className="search-box"><input type="text" placeholder="Search..." className="search-input" value={searchTerm} onChange={handleSearchChange} /></div></div>
                <div className="sidebar-widget"><h3>Recent Articles</h3><div className="recent-posts">{recentPosts.map((post) => (<article className="recent-post" key={post.id}><a href={`/blog/${post.slug}`} className="recent-post-link"><h4>{post.data.title}</h4><time className="recent-post-date">{new Date(post.data.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time></a></article>))}</div></div>
                <div className="sidebar-widget"><h3>Tags</h3><div className="tags-cloud">{allTags.map((tag) => (<span key={tag} className={`tag-item ${activeTag === tag ? "active" : ""}`} onClick={() => handleTagClick(tag)}>{tag}</span>))}</div></div>
            </aside>
        </div>
    );
}