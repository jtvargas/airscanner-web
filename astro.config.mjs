import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jtvargas.github.io',
  base: '/airscanner-web',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
  integrations: [sitemap({ filter: (page) => !/\/404(?:\.html|\/)$/.test(page) })],
});
