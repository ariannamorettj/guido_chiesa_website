// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ariannamorettj.github.io',
  base: '/guido_chiesa_website/',
  vite: {
    plugins: [tailwindcss()]
  }
});