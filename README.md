# ellested.dev

Personal portfolio site. React + TypeScript + Tailwind CSS, built with Vite.

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a static site to `dist/`.

## Deployment

Hosted on Cloudflare Pages, connected directly to this repo. After this rewrite, the Pages project's
build settings need updating (one-time, in the Cloudflare dashboard):

- **Build command:** `npm run build`
- **Build output directory:** `dist`

`public/_redirects` handles SPA client-side routing (so refreshing `/projects` doesn't 404).

## Structure

- `src/data/` — content (projects, skills, timeline) as typed data, separate from presentation
- `src/components/` — layout, home sections, and project-library components
- `src/routes/` — `Home` (`/`) and `ProjectLibrary` (`/projects`)
