// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://guidochiesa.net',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});
