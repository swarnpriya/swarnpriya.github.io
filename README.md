# Swarn Priya academic website

A modern Astro website organized around a coherent research program rather than a traditional CV-style homepage.

## 1. Preview locally

Use Node.js 26 (also specified in `.nvmrc` and the deployment workflow), then run:

```bash
npm ci
npm run dev
```

Open the local address shown by Astro, normally `http://localhost:4321`.

## 2. Check and update dependencies

```bash
npm outdated
npm install astro@latest
npm update
npm audit
npm run build
```

Commit `package.json` and `package-lock.json` after updating. Dependencies and
generated output (`node_modules/`, `.astro/`, and `dist/`) stay local; GitHub Actions
installs dependencies and builds the site on each push to `main`.

