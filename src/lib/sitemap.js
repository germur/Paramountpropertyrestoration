// src/lib/sitemap.js
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

const buildServicePath = ({ vertical = 'restoration', service, subservice, city }) => {
  const parts = [slugify(vertical), slugify(service), slugify(subservice)].filter(Boolean);
  const citySlug = slugify(city);
  const base = `/${parts.join('/')}`;
  return citySlug ? `${base}/${citySlug}` : base;
};

const withBaseUrl = (path) => {
  const clean = (path || '/').replace(/\/$/, '');
  return `${SITE_URL}${clean.startsWith('/') ? clean : `/${clean}`}`;
};

// --- DATA DUMMY (cámbiala luego por la real) ---
const VERTICAL = 'restoration';
const SERVICES = ['water-damage', 'fire-damage'];
const SUBSERVICES_BY_SERVICE = {
  'water-damage': ['flood-damage', 'leak-detection'],
  'fire-damage': ['smoke-damage', 'soot-cleanup'],
};
const CITIES = ['miami', 'orlando', 'tampa'];

// --- build urls ---
export function getAllUrls() {
  const urls = new Set();

  // Hubs (sin city)
  for (const s of SERVICES) {
    urls.add(withBaseUrl(buildServicePath({ vertical: VERTICAL, service: s })));
    const subs = SUBSERVICES_BY_SERVICE[s] || [];
    for (const sub of subs) {
      urls.add(withBaseUrl(buildServicePath({ vertical: VERTICAL, service: s, subservice: sub })));
    }
  }

  // Details (con city)
  for (const s of SERVICES) {
    const subs = SUBSERVICES_BY_SERVICE[s] || [undefined];
    for (const sub of subs) {
      for (const city of CITIES) {
        urls.add(withBaseUrl(buildServicePath({ vertical: VERTICAL, service: s, subservice: sub, city })));
      }
    }
  }

  // Home (al final)
  urls.add(SITE_URL);

  return Array.from(urls);
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