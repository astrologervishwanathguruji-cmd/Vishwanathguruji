/**
 * Structured-data (JSON-LD) builders.
 *
 * Each helper returns a plain JS object that should be stringified into a
 * <script type="application/ld+json" /> tag. Centralising these here keeps
 * page components clean and ensures schemas stay consistent across the site.
 */

import { SITE_CONFIG } from '@/constants/siteConfig';
import { SERVICE_AREAS, AREA_NAMES } from '@/constants/areas';
import type { Service, BlogPost, Testimonial } from '@/types';

const SITE_URL = SITE_CONFIG.siteUrl.replace(/\/$/, '');

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

const sameAs = [
  SITE_CONFIG.socials.instagram,
  SITE_CONFIG.socials.facebook,
  SITE_CONFIG.socials.youtube,
  SITE_CONFIG.socials.twitter,
].filter((s) => s && s !== 'https://instagram.com/' && s !== 'https://facebook.com/' && s !== 'https://youtube.com/' && s !== 'https://twitter.com/');

/* ------------------------------------------------------------------ */
/* Organization                                                       */
/* ------------------------------------------------------------------ */

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_CONFIG.name,
  alternateName: [SITE_CONFIG.guruji, SITE_CONFIG.shortName],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/images/logo.png'),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(SITE_CONFIG.defaultOgImage),
  description:
    'Sri Panchamukhi Astro Centre, founded in 1989 by Pandit Sri Vishwanath Guruji, is one of Bangalore’s most trusted Vedic astrology centres serving clients across Karnataka and India.',
  foundingDate: String(SITE_CONFIG.established),
  founder: {
    '@type': 'Person',
    name: SITE_CONFIG.guruji,
  },
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    ...SITE_CONFIG.addressStructured,
  },
  sameAs,
});

/* ------------------------------------------------------------------ */
/* LocalBusiness                                                      */
/* ------------------------------------------------------------------ */

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.guruji,
  description:
    'Best Vedic astrologer in Bangalore. Pandit Sri Vishwanath Guruji offers Vashikaran, Black Magic Removal, Vastu Shastra, Marriage, Career, Family, Health, Financial, and Court Case problem solutions in Jayanagar, Bangalore.',
  url: SITE_URL,
  image: [absoluteUrl(SITE_CONFIG.defaultOgImage)],
  logo: absoluteUrl('/images/logo.png'),
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    ...SITE_CONFIG.addressStructured,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE_CONFIG.geo.latitude,
    longitude: SITE_CONFIG.geo.longitude,
  },
  hasMap: SITE_CONFIG.mapDirections,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  areaServed: AREA_NAMES.map((name) => ({ '@type': 'Place', name })),
  sameAs,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE_CONFIG.aggregateRating.ratingValue,
    reviewCount: SITE_CONFIG.aggregateRating.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'Vedic Astrology',
    'Vashikaran',
    'Black Magic Removal',
    'Vastu Shastra',
    'Horoscope Reading',
    'Kundali Matching',
    'Gemstone Therapy',
    'Marriage Problems',
    'Career Astrology',
    'Family Disputes',
    'Health Astrology',
    'Financial Remedies',
    'Court Case Remedies',
  ],
});

/* ------------------------------------------------------------------ */
/* Person (Guruji)                                                    */
/* ------------------------------------------------------------------ */

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about#person`,
  name: SITE_CONFIG.guruji,
  alternateName: 'Vishwanath Guruji',
  jobTitle: 'Vedic Astrologer & Spiritual Counsellor',
  description:
    'Pandit Sri Vishwanath Guruji is a renowned Vedic astrologer with over 35 years of practice. Founder of Sri Panchamukhi Astro Centre in Jayanagar, Bangalore.',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  url: absoluteUrl('/about'),
  image: absoluteUrl('/images/guruji.jpg'),
  knowsLanguage: ['en', 'hi', 'kn', 'sa'],
  knowsAbout: [
    'Vedic Astrology',
    'Vashikaran',
    'Black Magic Remedies',
    'Vastu Shastra',
    'Atharva Veda',
    'Tantra Shastra',
    'Mantra Anushthan',
    'Yagya & Homa',
  ],
  address: {
    '@type': 'PostalAddress',
    ...SITE_CONFIG.addressStructured,
  },
  sameAs,
});

/* ------------------------------------------------------------------ */
/* WebSite (enables Sitelinks search box)                              */
/* ------------------------------------------------------------------ */

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_CONFIG.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: SITE_CONFIG.language,
});

/* ------------------------------------------------------------------ */
/* Service                                                            */
/* ------------------------------------------------------------------ */

export const serviceSchema = (service: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services/${service.slug}#service`,
  name: service.title,
  description: service.shortDescription,
  serviceType: service.title,
  provider: { '@id': `${SITE_URL}/#localbusiness` },
  areaServed: AREA_NAMES.map((name) => ({ '@type': 'Place', name })),
  url: absoluteUrl(`/services/${service.slug}`),
  image: absoluteUrl(service.heroImage),
  category: 'Vedic Astrology',
  audience: { '@type': 'Audience', audienceType: 'General Public' },
});

/* ------------------------------------------------------------------ */
/* FAQPage                                                            */
/* ------------------------------------------------------------------ */

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

/* ------------------------------------------------------------------ */
/* Article / BlogPosting                                              */
/* ------------------------------------------------------------------ */

export const articleSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE_URL}/blog/${post.slug}#article`,
  headline: post.title,
  description: post.excerpt,
  image: [absoluteUrl(post.image)],
  datePublished: post.date,
  dateModified: post.date,
  articleSection: post.category,
  inLanguage: SITE_CONFIG.language,
  author: {
    '@type': 'Person',
    name: SITE_CONFIG.guruji,
    url: absoluteUrl('/about'),
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/logo.png'),
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(`/blog/${post.slug}`),
  },
});

/* ------------------------------------------------------------------ */
/* BreadcrumbList                                                     */
/* ------------------------------------------------------------------ */

export const breadcrumbSchema = (items: { label: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  })),
});

/* ------------------------------------------------------------------ */
/* Review (aggregate, from constants/testimonials)                    */
/* ------------------------------------------------------------------ */

export const reviewsSchema = (testimonials: Testimonial[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: testimonials.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      datePublished: t.date,
      itemReviewed: { '@id': `${SITE_URL}/#localbusiness` },
    },
  })),
});

/* ------------------------------------------------------------------ */
/* JsonLd helper component-friendly serializer                        */
/* ------------------------------------------------------------------ */

export const jsonLd = (obj: unknown) => ({
  __html: JSON.stringify(obj).replace(/</g, '\\u003c'),
});

/* ------------------------------------------------------------------ */
/* Convenience: return list of area-served schemas for sitemap usage  */
/* ------------------------------------------------------------------ */

export const areaSlugs = () => SERVICE_AREAS.map((a) => a.slug);
