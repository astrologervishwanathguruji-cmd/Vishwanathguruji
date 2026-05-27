import PageHero from '@/components/ui/PageHero';
import PujasShloka from '@/components/sections/pujas/PujasShloka';
import PujaListing from '@/components/sections/pujas/PujaListing';
import PujasBookingBand from '@/components/sections/pujas/PujasBookingBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Special Pujas & Sacred Rituals in Bangalore — Vedic Yagya & Homa',
  description:
    'Authentic Vedic pujas in Bangalore — Maha Mrityunjaya, Navagraha Shanti, Durga Saptashati, Kaal Sarp Dosh Nivaran, and Lakshmi-Kubera pujas — performed personally by Pandit Sri Vishwanath Guruji at Sri Panchamukhi Astro Centre, Jayanagar.',
  path: '/pujas',
  keywords: [
    'special pujas in Bangalore',
    'Maha Mrityunjaya jaap Bangalore',
    'Navagraha shanti puja Jayanagar',
    'Kaal Sarp Dosh nivaran puja',
    'Lakshmi Kubera puja Bangalore',
    'homa havan in Bangalore',
  ],
});

export default function PujasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Pujas', href: '/pujas' },
          ]),
        )}
      />
      <PageHero
        title="Special Pujas"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Pujas', href: '/pujas' },
        ]}
      />
      <PujasShloka />
      <PujaListing />
      <PujasBookingBand />
      <DividerOrnament variant="lotus" />
    </>
  );
}
