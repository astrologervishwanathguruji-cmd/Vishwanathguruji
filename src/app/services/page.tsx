import PageHero from '@/components/ui/PageHero';
import ServicesIntro from '@/components/sections/services/ServicesIntro';
import AllServicesGrid from '@/components/sections/services/AllServicesGrid';
import Button from '@/components/ui/Button';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Astrology Solutions',
  description:
    'Explore all 13 specialised astrology solutions offered by Pandit Sri Vishwanath Guruji, Vashikaran, Black Magic Remedies, Vastu, marriage, career, family, and more.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
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
