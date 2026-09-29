// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://seanix.de',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
      // root `/` redirect handled manually in src/pages/index.astro
      // (browser-language detection + stored preference; Astro's built-in
      // redirectToDefaultLocale always hardcodes a 2s meta refresh)
      redirectToDefaultLocale: false,
    },
  },
});
