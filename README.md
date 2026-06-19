# GemCommerce

GemCommerce is a React + Vite landing page for a pet nutrition / dog food storefront concept. The current build is a one-page SPA with three designed content sections, responsive behavior for desktop/tablet/mobile, and production deployment on Vercel.

## Live Project

- Production: https://gemcommerce-ten.vercel.app
- Repository: https://github.com/Juadebfm/GemCommerce

## What Is Built

The current page includes:

1. A hero/value-proposition section with feature highlights, CTA, guarantee copy, and payment logos
2. A nutrition-focused section with supporting copy, key stats, CTA, and supporting photography
3. A final benefits section with alternating image/text layout

The page uses custom styling with `Inter Tight`, locally stored image assets, and a custom favicon.

## Tech Stack

- React 19
- Vite 8
- ESLint 10
- Plain CSS

## Project Structure

```text
GemCommerce/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the local URL Vite prints in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` - start the local dev server
- `npm run build` - create a production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Styling Notes

- Global styles live in `src/index.css`
- Section and component styling lives in `src/App.css`
- The page is designed as a single composition, so most layout rules are currently centralized in `App.css`

## Assets

All page imagery currently lives in `src/assets`.

Important note:
- the app now uses optimized `.jpg` versions for the heavier photographic images
- the original `.png` source files are still in the repo as design/source assets

Currently used optimized photo assets:

- `src/assets/dog_lick.jpg`
- `src/assets/dog_eat.jpg`
- `src/assets/dog_eat_food.jpg`

## Performance Work Already Done

To improve load performance:

- below-the-fold images use `loading="lazy"`
- decorative/secondary images use `decoding="async"`
- explicit `width` and `height` attributes are set on large images
- heavy section photos were converted from PNG to compressed JPG assets
- the first hero image remains high-priority for faster initial rendering

## Deployment

This project is connected to Vercel and deployed from the repository.

Manual production deploy:

```bash
npx vercel --prod
```

The current production alias is:

```text
https://gemcommerce-ten.vercel.app
```

## Git Workflow Used So Far

The project is currently being pushed directly to `main`.

Recent notable commits:

- `48131d8` - initial landing page build
- `0e362d4` - image loading optimization

## Next Good Improvements

- remove or archive unused original source assets that are no longer shipped
- split sections into smaller React components as the page grows
- add section IDs / navigation if the page expands further
- introduce a small content config layer if copy will keep changing
- generate modern image formats like WebP/AVIF in a repeatable build step

## Validation

The project has been validated with:

```bash
npm run lint
npm run build
```
