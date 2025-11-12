import { getBatches, urlsToXml } from '../../lib/sitemap.js';

// Static build of all dynamic pages (required in static mode)
export const prerender = true;

export async function getStaticPaths() {
  const batches = await getBatches();
  // Generates /sitemaps/1.xml, /sitemaps/2.xml, ...
  return batches.map((_, i) => ({ params: { page: String(i + 1) } }));
}

export async function GET({ params }) {
  const n = parseInt(params.page, 10);
  const batches = await getBatches();
  if (!Number.isInteger(n) || n < 1 || n > batches.length) {
    return new Response('Not found', { status: 404 });
  }
  const xml = urlsToXml(batches[n - 1]);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}