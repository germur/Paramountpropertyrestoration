import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://tu-dominio.com', // Cambia por tu dominio
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});