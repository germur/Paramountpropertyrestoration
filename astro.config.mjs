import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'adsbygoogle.push'],
      },
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  redirects: {
    '/restoration/remodeling-services': '/services/',
    '/contacto-antiguo': '/contact/',
    '/servicio-viejo': '/restoration/water-damage/',
    // Fix "Stuttering" URLs
    '/home/home': '/',
    '/blog/blog': '/blog/',
    '/blog/blog/index': '/blog/',
    // Fix Legacy "Flat" URLs -> New "Nested" Structure
    '/restoration/mold-testing': '/restoration/mold-remediation/mold-testing/',
    '/restoration/mold-inspection': '/restoration/mold-remediation/mold-inspection/',
    '/restoration/water-extraction': '/restoration/water-damage/emergency-water-removal/',
    '/restoration/fire-mitigation': '/restoration/mitigation-services/fire-mitigation/',
    // Fix Language/Legacy pages
    '/servicios': '/services/',
    '/contacto': '/contact/',
    '/privacy': '/privacy-policy/'
  }
});