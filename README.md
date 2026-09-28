# seanix.de

My little corner of the internet. Built with [Astro](https://astro.build), deployed to GitHub Pages, served at [seanix.de](https://seanix.de).

## ✏️ How to edit the site (the only file u need)

**All text lives in one file: [`src/i18n/ui.ts`](src/i18n/ui.ts)**

Open it, replace every `ur words here` with your actual words (both the `en:` and `de:` sections), save, then:

```sh
git add -A && git commit -m "fill in my words" && git push
```

~1 minute later the site is updated. That's the whole workflow. :3

## 👀 Previewing locally

```sh
npm install        # first time only
npm run dev        # then open http://localhost:4321/en/
```

## 🗺️ Where things are

| What | Where |
|---|---|
| All texts (EN + DE) | `src/i18n/ui.ts` |
| Page structure | `src/components/PortfolioPage.astro` |
| Colors & fonts | `src/styles/global.css` (see the `:root` block at the top) |
| Menu / header | `src/components/Header.astro` |

## 🌐 Routing

- English: `/en/` (root `/` redirects here)
- German: `/de/`

Both work after deployment at `https://seanix.de/en/` and `https://seanix.de/de/`.
