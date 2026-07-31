# Swarn Priya academic website

A modern Astro website organized around a coherent research program rather than a traditional CV-style homepage.

## 1. Preview locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address shown by Astro, normally `http://localhost:4321`.

## 2. Essential edits before publishing

1. In `src/data/site.ts`, replace `REPLACE_WITH_YOUR_WSU_EMAIL`.
2. Put your CV at `public/cv.pdf`.
3. Put your professional photo at `public/images/profile.jpg`.
4. In `src/pages/index.astro`, change `/images/profile-placeholder.svg` to `/images/profile.jpg`.
5. Verify publication links and status in `src/data/publications.ts`.
6. Verify all project descriptions and add collaborators in `src/data/projects.ts`.
7. After your official start date, change `Incoming Research Assistant Professor` to `Research Assistant Professor` in `src/data/site.ts`.

## 3. Publish on GitHub Pages

Replace the contents of the `swarnpriya.github.io` repository with this project and push to GitHub.

In the repository settings:

- Open **Settings → Pages**.
- Under **Build and deployment**, choose **GitHub Actions**.
- Push to `main` or `master`.

The included `.github/workflows/deploy.yml` will build and publish the site.

## 4. Where to update content

- Basic profile and links: `src/data/site.ts`
- Projects: `src/data/projects.ts`
- Publications: `src/data/publications.ts`
- Service: `src/data/service.ts`
- Homepage: `src/pages/index.astro`
- Teaching: `src/pages/teaching.astro`
- News: `src/pages/news.astro`
- Colors and styling: `src/styles/global.css`

## 5. Add a project

Add one object to the `projects` array in `src/data/projects.ts`. Astro automatically creates both the project card and a full project page.

## Notes

The content was initialized from the existing public website and reorganized. Newer research directions mentioned in planning conversations were added as clearly labeled active or future directions. Check every date, role, publication status, collaborator list, and external link before publishing.
