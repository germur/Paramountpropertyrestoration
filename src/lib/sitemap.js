// src/lib/sitemap.js
import { restorationGroups, cities } from '../data/restoration.js';

const SITE_URL = (process.env.SITE_URL || 'https://paramountpropertyrestoration.com').replace(/\/$/, '');
const BATCH_SIZE = 5000;
const TODAY_ISO = new Date().toISOString(); // used for <lastmod>

// --- helpers ---
const slugify = (input) => {
  if (!input) return '';
  return input
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const withBaseUrl = (path) => {
  const clean = (path || '/').replace(/\/$/, '');
  return `${SITE_URL}${clean.startsWith('/') ? clean : `/${clean}`}`;
};

// --- build urls using real restoration data ---
export function getAllUrls() {
  const urls = new Set();

  // Static pages
  urls.add(withBaseUrl('/'));
  urls.add(withBaseUrl('/services'));
  urls.add(withBaseUrl('/restoration'));
  urls.add(withBaseUrl('/portfolio'));
  urls.add(withBaseUrl('/contact'));
  urls.add(withBaseUrl('/blog'));
  // Landing page for booking Mold Inspection
  urls.add(withBaseUrl('/book-mold-inspection'));

  // Restoration service group pages (without cities)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling') {
      urls.add(withBaseUrl(`/restoration/${group.slug}`));
    }
  }

  // Restoration subservice pages (group/subservice without city)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling' && group.subservices) {
      for (const subservice of group.subservices) {
        urls.add(withBaseUrl(`/restoration/${group.slug}/${subservice.slug}`));
      }
    }
  }

  // City-specific restoration pages (group/subservice/city)
  for (const group of restorationGroups) {
    if (group.template !== 'remodeling' && group.subservices) {
      for (const subservice of group.subservices) {
        for (const city of cities) {
          urls.add(withBaseUrl(`/restoration/${group.slug}/${subservice.slug}/${city.slug}`));
        }
      }
    }
  }

  // Remodeling services (separate routing pattern)
  const remodelingServices = ['bathroom-remodeling', 'kitchen-remodeling', 'bedroom-remodeling', 'living-dining-remodeling', 'home-additions-remodeling'];
  
  // Service pages without cities
  for (const service of remodelingServices) {
    urls.add(withBaseUrl(`/services/${service}`));
  }

  // Service-city combinations for remodeling
  for (const service of remodelingServices) {
    for (const city of cities) {
      urls.add(withBaseUrl(`/services/${service}/${city.slug}`));
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

export function getBatches() {
  const all = getAllUrls();
  return chunk(all, BATCH_SIZE);
}