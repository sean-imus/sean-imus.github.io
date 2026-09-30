# Handoff — seanix.de project state

_Full memory of the build session, written so any machine (and any future me) can pick up exactly where we left off. Last updated: 2026-09-29._

## What this project is

- Static portfolio intro site for **seanix.de** (owner: Sean, GitHub: `sean-imus`)
- Built with **Astro 7**, bespoke hand-made design (editorial-minimal: cream paper, ink text, one rust accent) — deliberately _not_ an AI-looking template
- Two languages: **EN at `/en/`**, **DE at `/de/`**, root `/` redirects to `/en/`
- Hosted on **GitHub Pages via GitHub Actions**, domain from **IONOS** pointed at GitHub via DNS

## Repository

- Repo: `github.com/sean-imus/sean-imus.github.io` (public, branch `main`)
- The magic repo name `sean-imus.github.io` means the Pages site lives at the root (no path-prefix headaches)

## Current status (as of this file's date)

### Done (as of 2026-09-29 evening — everything below this line is live)

- **The writing homework is DONE** — EN and DE are both fully filled in in `src/i18n/ui.ts`. No more `ur words here`
- **`/` now does instant browser language detection** (German → `/de/`, else `/en/`, explicit EN/DE clicks stored in `localStorage['preferred-lang']` and win on return visits). Built by hand in `src/pages/index.astro` because Astro's own `redirectToDefaultLocale` hardcodes a **2-second** meta refresh and silently overrides a custom root page while enabled — that config flag is now `false`, the manual page wins (see gotcha)
- White flash on `/` gone: `location.replace()` + `content="0"` noscript fallback + cream `html{background:#f6f1e7}` + `noindex` + canonical `/en/`. Residual ~1s is GitHub Pages origin latency, not logic (parked blurbs below)
- **i18n strings actually flow now:** `Base.astro` imports `translations[lang]` and passes `t` down to `Header`/`Footer`. `footerLine`, `footerEgg`, `siteLabel` (brand split at first `.` to keep the `.de` italic accent via `<em>`) are live instead of hardcoded. The `◢◤` brand glyph was removed (plus its dead `.brand-mark` CSS)
- **Inline markdown-links groundwork:** prose strings render via `set:html` in `PortfolioPage.astro` (`heroIntro`, `aboutBody1/2`, `projectsNote`, project `description`) — write `<a href="...">prose</a>` directly in `ui.ts` for those keys; all other keys stay escaped plain text (safe by design since we author them)
- Astro scaffold + bespoke design committed and pushed
- Deploy workflow at `.github/workflows/deploy.yml` (`withastro/action@v6` + `actions/deploy-pages@v5`) — deploys on every push to `main`, ~1 min
- GitHub Pages `build_type` switched from legacy **Jekyll** to **workflow** (this was a hidden gotcha: fresh repos default to Jekyll and the Astro workflow silently never ran)
- `public/CNAME` file contains `seanix.de`; Pages API has `cname=seanix.de`, cert approved (apex + www SAN), `https_enforced: true`
- IONOS DNS configured: 4× A records `@` → `185.199.108.153`–`111.153`, CNAME `www` → `sean-imus.github.io`. Mail records (MX, SPF TXT, DKIM, _dmarc, autodiscover, _domainconnect) deliberately untouched — they serve IONOS email

## How to work on the site

```sh
# first time on a new machine
gh auth login                      # then: gh auth setup-git  (or set up SSH key)
git clone git@github.com:sean-imus/sean-imus.github.io.git
cd sean-imus.github.io
npm install

# everyday loop
npm run dev                        # preview at http://localhost:4321/en/ (and /de/)
# edit src/i18n/ui.ts with ur words...
git add -A && git commit -m "words" && git push   # ~1 min later: live
```

| What                       | File                                     |
| -------------------------- | ---------------------------------------- |
| ALL text (EN + DE)         | `src/i18n/ui.ts`                         |
| Colors / fonts             | `:root` block in `src/styles/global.css` |
| Page structure             | `src/components/PortfolioPage.astro`     |
| Header / nav / lang toggle | `src/components/Header.astro`            |
| Footer                     | `src/components/Footer.astro`            |
| Router / i18n config       | `astro.config.mjs`                       |

## Gotchas we hit (so future-us doesn't re-hit them)

- **Pushing `.github/workflows/*` requires the `workflow` token scope.** Fix:
  `gh auth refresh -h github.com -s workflow -s admin:public_key` (interactive device-code flow, one-time)
- **Astro 7 i18n config shape changed:** use `routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true }` — the old string modes (`'prefixed-default'`) are gone. `redirectToDefaultLocale: true` also requires a `src/pages/index.astro` to exist (ours redirects to `/en/`)
- **Background dev server** (per AGENTS.md): `npx astro dev --background`, manage with `npx astro dev stop|status|logs`
- **Pages custom domain needs BOTH:** the `cname` set in Pages settings/API _and_ the `public/CNAME` file in the deployed output
- **Fresh repos default Pages to legacy Jekyll builds** — our deploy workflow never ran until `build_type` was switched to `workflow` via API. Symptom: "pages build and deployment (dynamic)" runs failing with Jekyll errors
- **Cert issuance can STALL, not just be slow.** Ours sat on `*.github.io` for 24h+ with perfect DNS. Root cause: the Let's Encrypt provisioning job on GitHub's side had stalled. Fix that worked (2026-09-29, one-shot):
  1. Remove domain but NOT the Pages site — `DELETE /repos/.../pages` is refused for user-site repos ("Deactivating GitHub pages for this repository is not allowed"); instead clear the domain: `gh api -X PUT repos/sean-imus/sean-imus.github.io/pages --input - <<< '{"cname": null, "build_type": "workflow"}'`
  2. Push an empty commit so a fresh deploy builds (`git commit --allow-empty -m "retrigger pages build" && git push`), wait for the workflow to finish
  3. Re-add the domain WITHOUT touching `https_enforced` (the API 404s with "The certificate does not exist yet" if you set it): `gh api -X PUT repos/sean-imus/sean-imus.github.io/pages --input - <<< '{"cname": "seanix.de", "build_type": "workflow"}'`
  4. Cert arrived in ~4 min. Verify: `echo | openssl s_client -connect seanix.de:443 -servername seanix.de 2>/dev/null | grep subject=`
  5. Only then enforce: `gh api -X PUT repos/sean-imus/sean-imus.github.io/pages --input - <<< '{"cname": "seanix.de", "build_type": "workflow", "https_enforced": true}'`
  - Don't repeat remove/re-add on failure — GitHub docs confirm one remove/re-add re-triggers HTTPS; repeated churn makes debugging worse. After that, if still stuck after ~90 min: file a GitHub support ticket with a "support packet" (repo, domain, UTC times, HTTP-200-but-wrong-cert evidence)
- **No dig on this machine** — use `curl -s 'https://dns.google/resolve?name=seanix.de&type=A'` (Google DNS JSON API) for authoritative-style DNS checks. Note: plain `resolvectl` can't take `@server` syntax (goes to system resolver only)
- **DNS facts that were verified clean** (so future-us doesn't re-sweat): apex has NO AAAA and NO CAA records — only the 4 A records. Scary-looking "AAAA" answers from resolvectl local-cache output earlier were misleading; the dns.google authoritative query is the truth
- **Astro 7's `redirectToDefaultLocale: true` generates its own root redirect page with a hardcoded 2-second meta refresh — and silently ignores `src/pages/index.astro` while enabled.** That's where a mysterious white "Redirecting from / to /en" flash came from. If we ever re-enable it, any custom root-logic dies. Current state: `false`, custom page in `src/pages/index.astro` does detection + instant redirect
- **Static-host language detection limits:** only `navigator.languages` (browser language list, usually reflects OS/browser locale) — not the server-side `Accept-Language` header, which Pages can't read. A machine with German desktop but English-only browser will still get `/en/`; the EN/DE switcher sets `localStorage['preferred-lang']` as the override mechanism

## New-machine setup (what does NOT travel via git)

- `gh auth` and the SSH key live per-machine. On a new machine, after `gh auth login`:
  - either HTTPS route: `gh auth setup-git`
  - or SSH route: `ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""` then `gh ssh-key add ~/.ssh/id_ed25519.pub`
  - and remember the `workflow` scope gotcha above before ever touching deploy.yml
- `AGENTS.md` / `CLAUDE.md` are intentionally gitignored (machine-local)

## Parked ideas (the future shelf)

- Root-redirect latency (~1s perceived): GitHub Pages' CDN (Fastly) + first-byte from Europe can make the single `/` → `/en/` hop feel sluggish. Ideas if it ever itches: static `<link rel="preload">` hints, embedding a tiny ICE-style cache header via Pages config (not supported — it'd need a real host), or living with it (it's one navigation, then pages are cached). Low value, revisit if it bothers again
- Nav labels are still hardcoded English in `Header.astro` (`about/links/projects`) even on `/de/` — either add them to `ui.ts` some day or accept the vibe
- A real blog later — Astro content collections make this easy when the itch arrives
- Spare-PC homelab arc (dormant, phase ∞ :3)
