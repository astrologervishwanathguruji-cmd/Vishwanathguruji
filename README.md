# Sri Panchamukhi Astro Centre Website

Next.js 16 (App Router) TypeScript Tailwind CSS Framer Motion Swiper.

This project is a marketing website for Sri Panchamukhi Astro Centre, with:
- Home, About, Services, Service Detail, Blog, Blog Detail, Pujas, Gallery, Testimonials, Contact
- Static data-driven content from `src/constants/*`
- Dynamic slug pages for services and blog
- SEO metadata, sitemap, robots, and LocalBusiness JSON-LD

## Setup

```bash
cd vishwanathguruji-site
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

`postbuild` runs `next-sitemap` and generates sitemap/robots assets in `public/`.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- React Hook Form + Zod

## Project Structure

```txt
src/
  app/                  # App Router pages and route segments
  components/
    layout/             # Navbar, footer, floating actions, menus
    sections/           # Section-level components per page
    ui/                 # Reusable UI primitives/components
  constants/            # Site data (services, blog, testimonials, config, etc.)
  lib/                  # Utilities and metadata helpers
  types/                # Shared TypeScript types
public/
  images/               # Replace placeholder assets with production images
```

## Routing Notes

- Dynamic pages:
  - `src/app/services/[slug]/page.tsx`
  - `src/app/blog/[slug]/page.tsx`
- Both use `generateStaticParams`.
- On Next.js 16, route `params` are awaited (async `params`) in dynamic pages and metadata functions.

## Recent UI Updates

- Home hero:
  - Removed "Trusted Since 1989" pill
  - Smoother slider movement/timing
- Home services section:
  - Removed service icons (home only)
- Global:
  - Hidden browser scrollbar styling

## Pre-Deploy Checklist

Update these before production launch:

- `src/constants/siteConfig.ts`
  - `siteUrl`, contact details, social links, map embed
- Content constants:
  - `src/constants/services.ts`
  - `src/constants/blog.ts`
  - `src/constants/testimonials.ts`
  - `src/constants/pujas.ts`
- Replace placeholder images in `public/images/*`
- Add final favicon/OG image assets
- Wire contact form delivery (if still using placeholder submit behavior)

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Production build
- `npm run start` - Run production server
- `npm run lint` - Lint checks
