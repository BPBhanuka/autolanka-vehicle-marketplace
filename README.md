# AutoLanka — Next.js Vehicle Marketplace Frontend

A responsive vehicle marketplace frontend concept built with Next.js App Router, TypeScript, Tailwind CSS v4 and Lucide icons.

## Run locally

1. Install Node.js 20.9+.
2. Open this folder in VS Code / terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Pages

- `/` — Home page, hero search, categories and featured vehicles
- `/vehicles` — Search, category/location/price filters and sorting
- `/vehicles/[id]` — Vehicle details, specifications and seller contact
- `/sell` — Vehicle listing form with image selection preview state
- `/saved` — Saved vehicles using browser localStorage
- `/about` — About AutoLanka
- `/contact` — Contact form UI

## Frontend-only note

This is a frontend implementation. Vehicle data is sample data in `lib/data.ts`. Saved vehicles are stored in browser localStorage. Sell and contact forms demonstrate client-side interactions only; they do not publish listings, send email or save records to a server. Add an API/database/authentication layer (for example Supabase) before production use.

## Vehicle photos

The current sample listing photos are loaded from Unsplash image CDN URLs in `lib/data.ts` and the page components. They are remote images, not bundled local files. Unsplash offers free-use photos under its license; check each photo's source and licensing before using it in a commercial production marketplace. To use local images, download properly licensed images into `public/images/` and replace the URLs with paths such as `/images/car-01.jpg`.
