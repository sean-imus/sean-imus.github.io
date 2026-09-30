// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seanix.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
