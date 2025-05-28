import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://jotajotam1.github.io',
  base: '/Astro_1GCConstruction2.0',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});