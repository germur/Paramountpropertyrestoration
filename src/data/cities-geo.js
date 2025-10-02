// src/data/cities-geo.js
export const cityGeo = {
  miami: { name: 'Miami', region: 'South Florida', lat: 25.7617, lng: -80.1918 },
  orlando: { name: 'Orlando', region: 'Central Florida', lat: 28.5383, lng: -81.3792 },
  tampa: { name: 'Tampa', region: 'Tampa Bay', lat: 27.9506, lng: -82.4572 },
  sarasota: { name: 'Sarasota', region: 'Southwest Florida', lat: 27.3364, lng: -82.5307 },
  // añade el resto según tus slugs en restoration.js
};

export function getCityGeo(slug) {
  return cityGeo[slug] || null;
}