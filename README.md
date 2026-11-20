# AutoLanka — Vehicle Marketplace

AutoLanka is a responsive vehicle marketplace frontend concept for browsing cars, SUVs, vans and motorcycles in Sri Lanka.

## Tech stack
- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4 and project CSS
- Lucide icons

## Run locally
1. Install Node.js 20.9 or newer.
2. Clone this repository and open the folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

Check a production build with `npm run build`; run ESLint with `npm run lint`.

## Pages
- `/` — Marketplace homepage, categories and featured vehicles
- `/vehicles` — Search, category, location and price filters, and sorting
- `/vehicles/[id]` — Vehicle details, specifications and seller information
- `/sell` — Vehicle listing form with client-side photo validation and preview
- `/saved` — Saved vehicles in browser localStorage
- `/about` — About AutoLanka
- `/contact` — Contact form and customer support information

## Example marketplace content
Vehicle listings, prices, seller profiles, mileage and descriptions are fictional example content created to demonstrate the marketplace experience. Vehicle photos are illustrative Unsplash images and may not show the exact model or condition of the vehicle in a listing. Replace all sample listing and seller information with verified data before using the platform for actual transactions. The `.example` email address is reserved for documentation and is not a working support mailbox.

## Current implementation scope
This repository contains the frontend experience. Search, filters, sorting, saved vehicles, form validation and local photo previews run in the browser. Authentication, database persistence, seller registration, live listing publication, secure image storage, email delivery and payments are not connected yet. Saved vehicles use browser localStorage. The sell form validates and previews data in the browser only; the contact form prepares inquiry details but does not deliver messages. Add backend services and verify all business details before production use.

## Design and source
- Figma: https://www.figma.com/design/9WOGboaOe3Oyzqe8Eviu0R
- GitHub: https://github.com/BPBhanuka/autolanka-vehicle-marketplace
