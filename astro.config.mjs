import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  redirects: {
    '/restoration/remodeling-services': '/services/',
    '/contacto-antiguo': '/contact/',
    '/servicio-viejo': '/restoration/water-damage/'
  }
});