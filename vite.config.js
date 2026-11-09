import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local development / build:  base = "/"
// GitHub Pages (GITHUB_PAGES=true): base = "/REPOSITORY_NAME/"
// On GitHub Actions the repository name is detected automatically from
// GITHUB_REPOSITORY, so nothing needs editing. For a manual build outside
// Actions, set REPO_NAME or replace YOUR_REPOSITORY_NAME below.
const repo = process.env.REPO_NAME
  || process.env.GITHUB_REPOSITORY?.split('/')[1]
  || 'YOUR_REPOSITORY_NAME'

const isUserSite = repo.toLowerCase().endsWith('.github.io') // USERNAME.github.io repos live at "/"

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' && !isUserSite
    ? `/${repo}/`
    : '/'
})
