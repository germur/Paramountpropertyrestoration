// src/lib/sitemap.js
import { restorationGroups, cities } from '../data/restoration.js';
import { getCollection } from 'astro:content';

const SITE_URL = (process.env.SITE_URL || 'https://paramountpropertyrestoration.com').replace(/\/$/, '');
const BATCH_SIZE = 5000;
const TODAY_ISO = new Date().toISOString(); // used for <lastmod>

// --- helpers ---

// Batch 1 Redirects - Exclude from Sitemap
const EXCLUDED_PATHS = new Set([
  '/restoration/fire-damage/fire-damage-repair/orlando',
  '/restoration/fire-damage/fire-damage-repair/tampa',
  '/restoration/fire-damage/fire-damage-repair/miami',
  '/restoration/fire-damage/fire-damage-repair/apopka',
  '/restoration/fire-damage/fire-damage-repair/naples',
  '/restoration/fire-damage/fire-damage-repair/port-st-lucie',

  '/restoration/fire-damage/smoke-damage/orlando',
  '/restoration/fire-damage/smoke-damage/clearwater',
  '/restoration/fire-damage/smoke-damage/fort-lauderdale',
  '/restoration/fire-damage/smoke-damage/lakeland',
  '/restoration/fire-damage/smoke-damage/estero',
  '/restoration/fire-damage/smoke-damage/stuart',

  '/restoration/fire-damage/soot-cleanup/orlando',
  '/restoration/fire-damage/soot-cleanup/tampa',
  '/restoration/fire-damage/soot-cleanup/miami',
  '/restoration/fire-damage/soot-cleanup/winter-haven',
  '/restoration/fire-damage/soot-cleanup/immokalee',
  '/restoration/fire-damage/soot-cleanup/jupiter',

  '/restoration/mitigation-services/fire-mitigation/orlando',
  '/restoration/mitigation-services/fire-mitigation/st-petersburg',
  '/restoration/mitigation-services/fire-mitigation/hollywood',
  '/restoration/mitigation-services/fire-mitigation/sanford',
  '/restoration/mitigation-services/fire-mitigation/labelle',
  '/restoration/mitigation-services/fire-mitigation/hobe-sound',
]);

const withBaseUrl = (path) => {
  const clean = (path || '/').replace(/\/$/, '');

  // Exclude redirected paths
  if (EXCLUDED_PATHS.has(clean)) {
    return null; // Signal to skip
  }

  const fullUrl = `${SITE_URL}${clean.startsWith('/') ? clean : `/${clean}`}`;
  return clean === '' || clean === '/' ? `${SITE_URL}/` : `${fullUrl}/`;
};

// --- build urls using real restoration data ---
// --- build urls using real restoration data ---
export async function getAllUrls() {
  const urls = new Set();

  // Helper to add safely
  const addUrl = (path) => {
    const url = withBaseUrl(path);
    if (url) urls.add(url);
  };

  // Static pages
  addUrl('/');
  addUrl('/services');
  addUrl('/restoration');
  addUrl('/portfolio');
  addUrl('/contact');
  addUrl('/blog');
  addUrl('/privacy-policy');
  addUrl('/terms');
  // Landing page for booking Mold Inspection
  addUrl('/book-mold-inspection');
  addUrl('/landing/mold-remediation');
  // Tools
  addUrl('/tools/mold-testing-cost-calculator');
  // Regional Hubs
  addUrl('/service-areas');
  addUrl('/service-areas/central-florida');
  addUrl('/service-areas/tampa-bay');
  addUrl('/service-areas/south-florida');
  addUrl('/service-areas/southwest-florida');
  addUrl('/service-areas/treasure-coast');


  // Blog articles (dynamic from content collection)
  try {
    const blogPosts = await getCollection('blog');
    for (const post of blogPosts) {
      addUrl(`/blog/${post.slug}`);
    }
  } catch (error) {
    console.warn('Could not load blog collection:', error);
  }

  // Restoration service group pages (without cities)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling' && group.slug !== 'remodeling-services') {
      addUrl(`/restoration/${group.slug}`);
    }
  }

  // Restoration subservice pages (group/subservice without city)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling' && group.slug !== 'remodeling-services' && group.subservices) {
      for (const subservice of group.subservices) {
        addUrl(`/restoration/${group.slug}/${subservice.slug}`);
      }
    }
  }

  // City-specific restoration pages (group/subservice/city)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling' && group.slug !== 'remodeling-services' && group.subservices) {
      for (const subservice of group.subservices) {
        for (const city of cities) {
          addUrl(`/restoration/${group.slug}/${subservice.slug}/${city.slug}`);
        }
      }
    }
  }

  // Remodeling services (separate routing pattern)
  const remodelingServices = ['bathroom-remodeling', 'kitchen-remodeling', 'bedroom-remodeling', 'living-dining-remodeling', 'home-additions-remodeling'];

  // Service pages without cities
  for (const service of remodelingServices) {
    addUrl(`/services/${service}`);
  }

  // Service-city combinations for remodeling
  for (const service of remodelingServices) {
    for (const city of cities) {
      addUrl(`/services/${service}/${city.slug}`);
    }
  }

  return Array.from(urls).sort();
}

export function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function urlsToXml(urls) {
  const nodes = urls.map((u) => (
    `<url><loc>${u}</loc><lastmod>${TODAY_ISO}</lastmod></url>`
  ));
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    nodes.join('\n') +
    `\n</urlset>`;
}

export function indexToXml(indexItems) {
  const nodes = indexItems.map((u) => (
    `<sitemap><loc>${u}</loc><lastmod>${TODAY_ISO}</lastmod></sitemap>`
  ));
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    nodes.join('\n') +
    `\n</sitemapindex>`;
}

export async function getBatches() {
  const all = await getAllUrls();
  return chunk(all, BATCH_SIZE);
}