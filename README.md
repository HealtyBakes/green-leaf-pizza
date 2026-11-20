# Green Leaf Pizza — website

Astro site for greenleafpizza.com. Nothing missing.

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Edit content
Lines, links, stats, promises and sources live in `src/data/site.js`.
Sections are in `src/components/`. Brand styles are in `src/styles/global.css`.

## Deploy
Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo: Settings → Pages → Source: **GitHub Actions**. Custom domain comes from `public/CNAME`.
