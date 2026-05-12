import PageHero from '@/components/ui/PageHero';
import TestimonialsStatsBand from '@/components/sections/testimonials/TestimonialsStatsBand';
import TestimonialsGrid from '@/components/sections/testimonials/TestimonialsGrid';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Client Testimonials',
  description:
    "Real stories of transformation from Pandit Sri Vishwanath Guruji's clients across India and the diaspora.",
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials', href: '/testimonials' },
        ]}
      />
      <TestimonialsStatsBand />
      <TestimonialsGrid />
    </>
  );
}
