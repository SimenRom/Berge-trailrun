# Berge Trailrun

Vite + React 19 + TypeScript landing page. CSS Modules per component, i18n via
`src/i18n` (nb / nn / en).

## Workflow

- **Never start the dev server (`npm run dev`) unless I specifically ask for it.**
  Use `npm run build` and `npm run lint` to verify changes instead.

## Images

- Gallery photos live in `src/assets/photos/` and are picked up automatically by
  `import.meta.glob` in `Photos.tsx` — no import list to maintain.
- Compress before committing: max 2000px on the long edge, JPEG quality ~72,
  which lands each file in the ~550 kB–1.3 MB range.
  `sips -Z 2000 -s format jpeg -s formatOptions 72 in.jpeg --out out.jpeg`
