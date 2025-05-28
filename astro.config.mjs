import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  
  // Configuración para GitHub Pages
  site: 'https://jotajotam1.github.io',
  base: '/Astro_1GCConstruction2.0',
  
  // Configuración de salida estática
  output: 'static',
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});