# Handoff — seanix.de project state

*Full memory of the build session, written so any machine (and any future me) can pick up exactly where we left off. Last updated: 2026-09-28.*

## What this project is

- Static portfolio intro site for **seanix.de** (owner: Sean, GitHub: `sean-imus`)
- Built with **Astro 7**, bespoke hand-made design (editorial-minimal: cream paper, ink text, one rust accent) — deliberately *not* an AI-looking template
- Two languages: **EN at `/en/`**, **DE at `/de/`**, root `/` redirects to `/en/`
- Hosted on **GitHub Pages via GitHub Actions**, domain from **IONOS** pointed at GitHub via DNS

## Repository

- Repo: `github.com/sean-imus/sean-imus.github.io` (public, branch `main`)
- The magic repo name `sean-imus.github.io` means the Pages site lives at the root (no path-prefix headaches)

## Current status (as of this file's date)

### Done
- Astro scaffold + bespoke design committed and pushed
- All page text lives in **`src/i18n/ui.ts`** — currently **placeholders** (`ur words here`), Sean writes all real words himself, both `en:` and `de:` sections
- Deploy workflow at `.github/workflows/deploy.yml` (`withastro/action@v6` + `actions/deploy-pages@v5`) — deploys on every push to `main`, ~1 min
- GitHub Pages `build_type` switched from legacy **Jekyll** to **workflow** (this was a hidden gotcha: fresh repos default to Jekyll and the Astro workflow silently never ran)
- `public/CNAME` file contains `seanix.de`
- GitHub Pages API knows `cname: seanix.de`
- IONOS DNS configured: 4× A records `@` → `185.199.108.153`–`111.153`, CNAME `www` → `sean-imus.github.io`. Mail records (MX, SPF TXT, DKIM, _dmarc, autodiscover, _domainconnect) deliberately untouched — they serve IONOS email
- `http://seanix.de/` confirmed serving the site (200)

### Pending
1. **SSL certificate for `seanix.de`:** GitHub issues it asynchronously after DNS confirmed (usually < 1h, occasionally longer — nothing can be clicked to speed it up). Until then HTTPS shows a `*.github.io` cert mismatch warning. **Check with:**
   ```sh
   echo | openssl s_client -connect seanix.de:443 -servername seanix.de 2>/dev/null | grep subject=
   ```
   Ready when it says `CN=seanix.de` (currently says `CN=*.github.io`)
2. **Enforce HTTPS** (one command, ONLY works after cert exists):
   ```sh
   gh api -X PUT repos/sean-imus/sean-imus.github.io/pages -f cname=seanix.de -f build_type=workflow -F https_enforced=true
   ```
3. **Fill in the words** — replace every `ur words here` in `src/i18n/ui.ts` (both `en:` and `de:` sections), commit, push. This is the entire remaining writing homework

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

| What | File |
|---|---|
| ALL text (EN + DE) | `src/i18n/ui.ts` |
| Colors / fonts | `:root` block in `src/styles/global.css` |
| Page structure | `src/components/PortfolioPage.astro` |
| Header / nav / lang toggle | `src/components/Header.astro` |
| Footer | `src/components/Footer.astro` |
| Router / i18n config | `astro.config.mjs` |

## Gotchas we hit (so future-us doesn't re-hit them)

- **Pushing `.github/workflows/*` requires the `workflow` token scope.** Fix:
  `gh auth refresh -h github.com -s workflow -s admin:public_key` (interactive device-code flow, one-time)
- **Astro 7 i18n config shape changed:** use `routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true }` — the old string modes (`'prefixed-default'`) are gone. `redirectToDefaultLocale: true` also requires a `src/pages/index.astro` to exist (ours redirects to `/en/`)
- **Background dev server** (per AGENTS.md): `npx astro dev --background`, manage with `npx astro dev stop|status|logs`
- **Pages custom domain needs BOTH:** the `cname` set in Pages settings/API *and* the `public/CNAME` file in the deployed output
- **Fresh repos default Pages to legacy Jekyll builds** — our deploy workflow never ran until `build_type` was switched to `workflow` via API. Symptom: "pages build and deployment (dynamic)" runs failing with Jekyll errors
- **Cert issuance is GitHub-async.** DNS being correct ≠ cert ready. Patience is the only tool

## New-machine setup (what does NOT travel via git)

- `gh auth` and the SSH key live per-machine. On a new machine, after `gh auth login`:
  - either HTTPS route: `gh auth setup-git`
  - or SSH route: `ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""` then `gh ssh-key add ~/.ssh/id_ed25519.pub`
  - and remember the `workflow` scope gotcha above before ever touching deploy.yml
- `AGENTS.md` / `CLAUDE.md` are intentionally gitignored (machine-local)

## Parked ideas (the future shelf)

- A real blog later — Astro content collections make this easy when the itch arrives
- Spare-PC homelab arc (dormant, phase ∞ :3)
