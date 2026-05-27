import PageHero from '@/components/ui/PageHero';
import TestimonialsStatsBand from '@/components/sections/testimonials/TestimonialsStatsBand';
import TestimonialsGrid from '@/components/sections/testimonials/TestimonialsGrid';
import GlobalClosingCta from '@/components/sections/shared/GlobalClosingCta';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd, reviewsSchema } from '@/lib/seo';
import { TESTIMONIALS } from '@/constants/testimonials';

export const metadata = buildMetadata({
  title: 'Client Reviews & Testimonials — Pandit Vishwanath Guruji, Bangalore',
  description:
    "Read real stories of transformation from Pandit Sri Vishwanath Guruji's clients across Bangalore, Karnataka, India, and the diaspora — marriage, career, family, and protection success stories.",
  path: '/testimonials',
  keywords: [
    'Vishwanath Guruji reviews',
    'best astrologer in Bangalore reviews',
    'genuine astrologer testimonials Bangalore',
    'Sri Panchamukhi Astro Centre client reviews',
  ],
});

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(reviewsSchema(TESTIMONIALS))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Testimonials', href: '/testimonials' },
          ]),
        )}
      />
      <PageHero
        title="Client Testimonials"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials', href: '/testimonials' },
        ]}
      />
      <TestimonialsStatsBand />
      <TestimonialsGrid />
      <GlobalClosingCta />
    </>
  );
}
