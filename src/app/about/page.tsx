import PageHero from '@/components/ui/PageHero';
import BiographySection from '@/components/sections/about/BiographySection';
import CredentialsSection from '@/components/sections/about/CredentialsSection';
import GurujiGalleryCarousel from '@/components/sections/about/GurujiGalleryCarousel';
import MissionBand from '@/components/sections/about/MissionBand';
import DividerOrnament from '@/components/ui/DividerOrnament';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'About Pandit Vishwanath Guruji',
  description:
    "Learn about Pandit Sri Vishwanath Guruji, Bangalore's most trusted Vedic astrologer, with over 35 years of practice in Jayanagar.",
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
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
