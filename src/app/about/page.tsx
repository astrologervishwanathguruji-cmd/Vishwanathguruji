import PageHero from '@/components/ui/PageHero';
import BiographySection from '@/components/sections/about/BiographySection';
import CredentialsSection from '@/components/sections/about/CredentialsSection';
import GurujiGalleryCarousel from '@/components/sections/about/GurujiGalleryCarousel';
import MissionBand from '@/components/sections/about/MissionBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd, personSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Pandit Vishwanath Guruji — Best Astrologer in Bangalore',
  description:
    "Pandit Sri Vishwanath Guruji is Bangalore's most trusted Vedic astrologer with 35+ years of practice in Jayanagar. Learn about Guruji's lineage, credentials, mission, and the founding of Sri Panchamukhi Astro Centre in 1989.",
  path: '/about',
  keywords: [
    'about Vishwanath Guruji',
    'famous vedic astrologer in Bangalore biography',
    'best pandit in Bangalore Jayanagar',
    'experienced astrologer in Karnataka',
  ],
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(personSchema())} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'About Guruji', href: '/about' },
          ]),
        )}
      />
      <PageHero
        title="About Guruji"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      <BiographySection />
      <CredentialsSection />
      <GurujiGalleryCarousel />
      <MissionBand />
      <DividerOrnament variant="lotus" />
    </>
  );
}
