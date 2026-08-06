# BITSTREAM Commercial Website

Commercial BITSTREAM website rebuilt with Astro 5 and TypeScript.

## Current architecture

- `src/pages/` — generated website routes
- `src/components/` — reusable Astro components
- `src/content/` — multilingual commercial content
- `src/config/site.ts` — company contacts and language routes
- `src/styles/global.css` — shared visual system
- `public/` — files copied directly into the production build
- `.github/workflows/deploy-astro.yml` — validation and GitHub Pages deployment

The new Astro implementation currently provides the commercial home page in Uzbek, Russian, and English. The older static HTML files remain in the repository as migration reference and are not the source of the Astro production build.

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

- `main` — production branch; GitHub Pages deploys from this branch
- `abdulaziz` — active BITSTREAM development branch
- Changes must be validated before merging into `main`

## Next migration work

1. Complete the commercial home-page content and conversion flow.
2. Add production metadata, structured data, icons, and social preview assets.
3. Decide whether Services, Projects, About, and Contacts remain home-page sections or become dedicated Astro routes.
4. Remove legacy static files only after the Astro replacement is complete and verified.
