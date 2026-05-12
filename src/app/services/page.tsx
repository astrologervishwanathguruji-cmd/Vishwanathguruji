import PageHero from '@/components/ui/PageHero';
import ServicesIntro from '@/components/sections/services/ServicesIntro';
import AllServicesGrid from '@/components/sections/services/AllServicesGrid';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Astrology Solutions',
  description:
    'Explore all 13 specialised astrology solutions offered by Pandit Sri Vishwanath Guruji — Vashikaran, Black Magic Remedies, Vastu, marriage, career, family, and more.',
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
      <section className="bg-primary text-site-white py-14">
        <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Book a Consultation Today</h3>
            <p className="text-site-white/80 mt-2">
              Same-day appointments are often available. Reach Guruji now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="gold" size="lg">Book Appointment</Button>
            <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
              {SITE_CONFIG.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
