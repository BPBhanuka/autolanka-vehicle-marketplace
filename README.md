# AutoLanka — Vehicle Marketplace Frontend

A responsive vehicle marketplace frontend concept for browsing cars, SUVs, vans and motorcycles in Sri Lanka.

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
- `/` — Homepage, vehicle categories and featured sample listings
- `/vehicles` — Search, category, location and price filters, and sorting
- `/vehicles/[id]` — Vehicle details and specifications
- `/sell` — Client-side listing form, image validation and local previews
- `/saved` — Saved vehicles in browser localStorage
- `/about` — About page
- `/contact` — Client-side contact form validation demo

## Sample data and images
Vehicle records in `lib/data.ts` are fictional demonstration data. Vehicle images are illustrative Unsplash photos, not verified photographs of the exact listed vehicles. Seller identities, prices, mileage and descriptions are sample data and have not been independently verified.

## Frontend-only limitations
This repository is a frontend portfolio concept. It does not include authentication, a database, real seller listings, server-side listing submissions, persistent photo hosting, email delivery, payments or transaction processing. Saved vehicles use browser localStorage. The sell form validates and previews data in the browser only; the contact form does not send messages. Add a backend, secure image storage, verified contact channels and appropriate validation before production use.

## Design and source
- Figma: https://www.figma.com/design/9WOGboaOe3Oyzqe8Eviu0R
- GitHub: https://github.com/BPBhanuka/autolanka-vehicle-marketplace
