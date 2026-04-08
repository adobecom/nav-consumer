# nav-consumer

Demo app for Adobe federated navigation and footer. It loads **`@adobecom/standalone-feds`** (Milo standalone bundle) and exercises header/footer configuration driven by URL query parameters.

**Live React site (GitHub Pages):** [https://adobecom.github.io/nav-consumer/](https://adobecom.github.io/nav-consumer/)

**Live Vanilla JS (GitHub Pages):** [https://adobecom.github.io/nav-consumer/](https://adobecom.github.io/)
## Stack

- [React 18](https://react.dev/) with [Vite 5](https://vitejs.dev/)
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for unit tests
- [`@adobecom/standalone-feds`](https://github.com/adobecom/milo) (tarball dependency in `package.json`)

Production builds target **ES2022** (required for top-level `await` in the standalone-feds bundle).

## Repository layout

| Path | Purpose |
|------|--------|
| `index.html` | Vite entry (root). Bootstraps the React app. |
| `src/index.jsx` | React mount. |
| `src/App.jsx` | App shell; renders `Footer`. |
| `src/Footer.jsx` | Loads Milo navigation from the network (or local Milo when using `useLocal`), merges query-param options, and calls the nav module or `loadGnav` from standalone-feds. |
| `public/navigation.html` | Standalone HTML page that loads **`./navigation.js`** (no React). |
| `public/navigation.js` | Same style of init as `Footer.jsx`, but as a plain module script for the static demo. |
| `public/navigation-full-width.html` | Variant layout (full-width header); also uses `./navigation.js`. |
| `vite.config.js` | `base: '/nav-consumer/'` for production builds (GitHub Pages project path); `'/'` in dev. |

Static files under `public/` are copied to the build output as-is.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (default [http://localhost:5173](http://localhost:5173)). |
| `npm run build` | Production build to `dist/`. |
| `npm run preview` | Serve `dist/` locally to verify the production bundle. |
| `npm test` | Run Vitest once (`vitest run`). Use `npx vitest` for watch mode. |
| `npm run deploy` | Runs `predeploy` (`npm run build`) then publishes `dist/` to the `gh-pages` branch via [gh-pages](https://github.com/tschaub/gh-pages). |

## URLs in dev vs production

With the default Vite `base` settings:

- **React app (`Footer.jsx`):**  
  - Dev: `http://localhost:5173/`  
  - Production: `https://adobecom.github.io/nav-consumer/`

- **Static navigation demo:**  
  - Dev: `http://localhost:5173/navigation.html`  
  - Production: `https://adobecom.github.io/nav-consumer/navigation.html`

Query parameters on either entry control environment, locale, theme, UNAV options, etc. (see `src/Footer.jsx` and `public/navigation.js`).

## Deployment (GitHub Pages)

1. Ensure `homepage` in `package.json` matches the Pages URL (currently `https://adobecom.github.io/nav-consumer`).
2. From the branch you want to publish (often `master` or `main`), run:

   ```bash
   npm run deploy
   ```

3. In the repo **Settings → Pages**, the source should match how your org publishes (commonly the `gh-pages` branch).


## Requirements

Use a current **Node.js LTS** (for example 20.x). Vite 5 expects a reasonably recent Node version.

