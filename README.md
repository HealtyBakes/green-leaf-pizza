# Green Leaf Pizza — website

Astro site for greenleafpizza.com. Nothing missing.

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Edit content
All website copy lives in `src/content/home.md`: lines, links, sections, stats, promises, sources and the story.
Sections are in `src/components/`. Brand styles are in `src/styles/global.css`.

## Deploy
Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo: Settings → Pages → Source: **GitHub Actions**. Custom domain comes from `public/CNAME`.
