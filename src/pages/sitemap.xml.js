import { getBatches, indexToXml } from '../lib/sitemap.js';

export const prerender = true; // static ok

export async function GET() {
  const batches = getBatches();
  const base = (process.env.SITE_URL || 'https://paramountpropertyrestoration.com').replace(/\/$/, '');
  const index = batches.map((_, i) => `${base}/sitemaps/${i + 1}.xml`);
  const xml = indexToXml(index);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}