# BITSTREAM Commercial Website

Commercial BITSTREAM website rebuilt with Astro 5 and TypeScript.

## Current architecture

- `src/pages/` — generated website routes
- `src/components/` — reusable Astro components
- `src/content/` — multilingual commercial content
- `src/config/site.ts` — company contacts and language routes
- `src/styles/` — shared visual system and component-level enhancements
- `public/` — files copied directly into the production build
- `.github/workflows/deploy-astro.yml` — validation and GitHub Pages deployment

The Astro implementation currently provides a commercial single-page website in Uzbek, Russian, and English. The older static HTML files remain in the repository as migration reference and are not included in the Astro production build.

## Local development

Requirements:

- Node.js 22
- npm

```bash
npm install
npm run check
npm run dev
```

Production validation:

```bash
npm run check
npm run build
npm run preview
```

## Branch workflow

- `main` — production branch
- `abdulaziz` — active BITSTREAM development branch
- all changes are reviewed through a draft pull request before merging
- production deployment is allowed only from `main`

## GitHub Pages requirement

In repository settings, configure:

`Settings → Pages → Build and deployment → Source → GitHub Actions`

The workflow validates pushes to `abdulaziz` and `main`, but deploys only when the validated commit is on `main`.

## Implemented production features

- Uzbek, Russian, and English routes
- localized title, description, canonical, hreflang and Open Graph metadata
- Organization and LocalBusiness structured data
- sitemap integration, production robots file, favicon and web manifest
- responsive commercial homepage and mobile action bar
- lead form that copies a prepared request, opens Telegram, and falls back to email when required
- mandatory Astro diagnostics and production build steps in CI

## Remaining work before merge

1. Enable or verify GitHub Actions for the repository and confirm `npm run check` and `npm run build` pass.
2. Review the generated preview on desktop and mobile.
3. Validate all business claims, completed-work examples, phone numbers, email and Telegram destination.
4. Add a raster social preview image for Open Graph sharing.
5. Decide whether Services, Projects, About and Contacts need dedicated Astro routes.
6. Remove legacy static files only after the Astro replacement is live and verified.
