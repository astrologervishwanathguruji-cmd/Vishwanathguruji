import PageHero from '@/components/ui/PageHero';
import ServicesIntro from '@/components/sections/services/ServicesIntro';
import AllServicesGrid from '@/components/sections/services/AllServicesGrid';
import Button from '@/components/ui/Button';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Astrology Services in Bangalore — Vashikaran, Vastu, Marriage & More',
  description:
    'Explore 13 specialised Vedic astrology solutions by Pandit Sri Vishwanath Guruji in Bangalore: Vashikaran, Black Magic Removal, Vastu Shastra, Love Marriage, Husband–Wife, Family, Health, Career, Financial, Court Case, and Political problem solutions.',
  path: '/services',
  keywords: [
    'astrology services in Bangalore',
    'best astrology solutions Bangalore',
    'vedic remedies Bangalore Jayanagar',
    'pandit services in Bangalore',
    'puja services in Bangalore',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
          ]),
        )}
      />
      <PageHero
        title="Astrology Solutions"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />
      <ServicesIntro />
      <AllServicesGrid />
      <PrimaryCtaBand
        label="Book a Consultation"
        title="Book a Consultation Today"
        description="Same-day appointments are often available. Reach Guruji now for guidance rooted in classical Vedic texts, confidential, ethical, and clear."
        omSide="right"
      >
        <Button href="/contact" variant="gold" size="lg">
          Book Appointment
        </Button>
        <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
          {SITE_CONFIG.phoneDisplay}
        </Button>
      </PrimaryCtaBand>
      <DividerOrnament variant="lotus" />
    </>
  );
}
