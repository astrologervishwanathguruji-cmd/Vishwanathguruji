# Sri Panchamukhi Astro Centre, Website

Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · Swiper.

Implements the design bundle locked in chat: **Navbar C (centred logo + split nav) with the
maroon utility bar from Navbar B**, **Footer C with map preview**, and **Hero Variation A, full-bleed
slider** with the **A treatment** (dark image, maroon overlay, 5 fade slides, dot indicators).

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

`postbuild` runs `next-sitemap` and emits `sitemap.xml` + `robots.txt` to `/public`.

## READ BEFORE DEPLOY

The site is fully functional with placeholder data. Swap these in for production:

| Item | Where | Notes |
|---|---|---|
| Site URL | `src/constants/siteConfig.ts → siteUrl` | Used in metadata, sitemap, JSON-LD |
| Real photos | `/public/images/{hero,guruji,services,pujas,gallery,testimonials,blog}/` | Every `<Image>` currently points to `/images/placeholder.svg`. Replace by updating the `heroImage` / `image` / `avatar` / `src` fields in the constants files |
| Google Maps embed | `siteConfig.ts → mapEmbed` | Replace with the real Google Maps embed URL (Share → Embed a map) |
| Logo | None, generated as gold-circle + ॐ + wordmark in CSS | If you have a logo asset, place at `/public/icons/logo.svg` and update `Logo` in `Navbar.tsx` |
| Google Analytics | `src/app/layout.tsx` | `<GoogleAnalytics gaId="…">` is commented out, add ID and uncomment |
| Contact form delivery | `src/components/sections/home/ContactBand.tsx → onSubmit` | Currently logs to console and shows inline success. Wire to Resend / SendGrid / Formspree / API route as needed |
| Real service copy | `src/constants/services.ts` | All 13 services have realistic Indian placeholder copy. Review with Guruji before publishing |
| Real testimonials | `src/constants/testimonials.ts` | 9 fabricated examples, replace with vetted client testimonials |
| Blog content | `src/constants/blog.ts` | 7 example articles with placeholder bodies, replace with real content |
| Social URLs | `siteConfig.ts → socials` | All point to root domains; update with real handles |
| Favicon / OG image | `/public/favicon.ico`, `/public/icons/og-image.jpg` | Not provided, add before launch |
| Email & phone | `siteConfig.ts` | Currently `+91 9980044899` and `info@vishwanathguruji.com` from the brief, confirm with client |

## Selected design variants

From the wireframes bundle:

- **Navbar:** Variation C structure (3-column grid: left links · centred ॐ + wordmark + EST line · right links + CTA) **plus the Variation B utility bar** (maroon-dark strip carrying phone, email, hours, city).
- **Footer:** Variation C, 3-column layout with embedded **Google Map preview** in the right column, hours block, four social bubbles, and "Get Directions" CTA.
- **Hero:** Variation A, full-bleed Swiper slider, 5 slides, fade transition, 5.5s autoplay, dark image with maroon gradient overlay, dot-pill pagination, gold + ghost CTAs.

## Structure

```
src/
  app/                  # App Router pages
  components/
    layout/             # Navbar, Footer, FloatingButtons, HamburgerMenu
    ui/                 # Buttons, cards, headers, primitives
    sections/           # Page-specific sections
  constants/            # All data: services, testimonials, pujas, blog, gallery, stats, navLinks, siteConfig
  hooks/                # useCountUp, useScrollAnimation, useMediaQuery
  lib/                  # cn(), date formatters, metadata helper
  types/                # Shared TS interfaces
public/
  images/               # Replace placeholder.svg with real assets
```

## Design tokens

All colours, fonts, spacing, and animations live in `tailwind.config.ts` and `globals.css`. Use the
Tailwind tokens (`bg-primary`, `text-accent`, `font-display`, etc.), do not hardcode hex values in
component code.

## Notes

- All pages and dynamic routes (`services/[slug]`, `blog/[slug]`) are statically generated via
  `generateStaticParams`.
- The contact form uses `react-hook-form` + `zod` and only shows inline success, wire delivery in
  `onSubmit` before launch.
- JSON-LD `LocalBusiness` schema is injected in `<head>` from `layout.tsx`.
- 404 page is at `src/app/not-found.tsx`.
