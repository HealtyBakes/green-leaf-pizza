import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://greenleafpizza.com',
  integrations: [sitemap()],
});
