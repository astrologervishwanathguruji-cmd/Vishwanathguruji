import PageHero from '@/components/ui/PageHero';
import PujasShloka from '@/components/sections/pujas/PujasShloka';
import PujaListing from '@/components/sections/pujas/PujaListing';
import PujasBookingBand from '@/components/sections/pujas/PujasBookingBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Special Pujas & Sacred Rituals',
  description:
    'Authentic Vedic pujas, Maha Mrityunjaya, Navagraha, Durga Saptashati, Kaal Sarp Dosh Nivaran, Lakshmi-Kubera, performed personally by Pandit Sri Vishwanath Guruji.',
  path: '/pujas',
});

export default function PujasPage() {
  return (
    <>
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
