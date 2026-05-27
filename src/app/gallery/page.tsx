import PageHero from '@/components/ui/PageHero';
import PhotoGallery from '@/components/sections/gallery/PhotoGallery';
import VideoGallery from '@/components/sections/gallery/VideoGallery';
import GlobalClosingCta from '@/components/sections/shared/GlobalClosingCta';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Gallery — Pujas, Ceremonies & Consultations in Bangalore',
  description:
    'Browse photos and videos of authentic Vedic pujas, ceremonies, consultations, and gatherings at Sri Panchamukhi Astro Centre, Jayanagar, Bangalore.',
  path: '/gallery',
  keywords: [
    'astrology centre photos Bangalore',
    'puja ceremony pictures Jayanagar',
    'Vishwanath Guruji photos',
    'havan yagya photos Bangalore',
  ],
});

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Gallery', href: '/gallery' },
          ]),
        )}
      />
      <PageHero
        title="Gallery"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />
      <PhotoGallery />
      <VideoGallery />
      <GlobalClosingCta />
    </>
  );
}
