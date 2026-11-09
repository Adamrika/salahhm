# Candidate Website — Algerian municipal election (GitHub Pages edition)

A bilingual (Arabic RTL / French LTR) single-page website built with **React + Vite + JavaScript + CSS3 + Lucide React**.
It is 100 % static: no backend, no database, no paid hosting. All content is **placeholder data** to replace.

## 1. Requirements
- Node.js 20 or newer (includes npm)
- Git and a free GitHub account

## 2. Installation
```bash
npm install
```

## 3. Local development
```bash
npm run dev
```
Open the address printed in the terminal (usually http://localhost:5173/).

## 4. Production build
```bash
npm run build      # outputs ./dist
npm run preview    # serves ./dist locally
```
To test the exact GitHub Pages build (with the repository sub-path):
```bash
# macOS / Linux
GITHUB_PAGES=true npm run build && npm run preview
# Windows PowerShell
$env:GITHUB_PAGES="true"; npm run build; npm run preview
```

## 5. Repository name (automatic)
On GitHub Actions the repository name is detected automatically (`GITHUB_REPOSITORY`), so **no edit is needed**.
Only for a manual build outside Actions: set `REPO_NAME` (e.g. `REPO_NAME=mon-candidat GITHUB_PAGES=true npm run build`) or replace `YOUR_REPOSITORY_NAME` in `vite.config.js`.
A repository named `USERNAME.github.io` is served from `/` automatically.

## 6. Create the GitHub repository
1. On GitHub: **New repository** → name it (public) → create it empty.
2. In this folder:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

## 7. Configure GitHub Pages
On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**. That is the only setting required.

## 8. Automatic deployment (GitHub Actions)
`.github/workflows/deploy.yml` runs on every push to `main`: `npm ci` → `npm run build` (with `GITHUB_PAGES=true`) → upload `dist` → deploy with the official Pages actions.
Follow progress in the repository's **Actions** tab. When it is green, the site is live at:

```
https://USERNAME.github.io/REPOSITORY_NAME/
```

A manual alternative exists (`npm run deploy`, using `gh-pages`), but it is not needed with GitHub Actions.

## 9. Update the website
Edit files, then:
```bash
git add .
git commit -m "Update content"
git push
```
The site redeploys automatically.

## 10. Change candidate information
Everything editable is in `src/data/` (the "achievements" section was removed) — no React code to touch:

| File | Content |
|---|---|
| `candidate.js` | name, photo, biography, education, experience, party, **list number** and **candidate number** (kept separate), municipality, social links, contact; optional blocks `wilaya`, `gallery`, `residence`, `contact.phone` (their sections appear only when present) |
| `program.js` | electoral program (**future** proposals) and commitment tracking (status + progress) |
| `projects.js` | proposed projects |
| `translations.js` | menu and interface texts (Arabic + French) |

Each text is written as `{ ar: '…', fr: '…' }`.

**Residence address:** hidden by default. It (and its menu link) appears only if you set `residence.approved` to `true` in `candidate.js` — do this only with the candidate's explicit approval.

**Voting guide:** it only explains the difference between the list number and the candidate number. It does not describe ballot-marking steps; it points visitors to the official election authority.

**Contact form:** with no server, the form opens the visitor's e-mail app (`mailto:`) addressed to `contact.email`.

## 11. Replace images
Put your files in `public/images/…` and update the path in the data file (paths have no leading slash):
```
public/images/candidate/      candidate photo
public/images/municipality/   municipality + gallery photos
public/images/party/          party logo
public/images/projects/       project visuals
```
Images are loaded through `asset('images/…')` (`src/utils/asset.js`), which prefixes Vite's `BASE_URL`, so they work both locally and under `/REPOSITORY_NAME/`. Never write `/images/...` by hand.

## Notes
- Language choice is saved in `localStorage` (`site-language`); switching does not reload the page.
- Navigation uses anchor links (`#bio`, `#program`, …) — no router, so refreshing never causes a GitHub Pages 404.
- Animations respect the "reduce motion" system setting.
