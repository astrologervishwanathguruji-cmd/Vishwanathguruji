import PageHero from '@/components/ui/PageHero';
import PhotoGallery from '@/components/sections/gallery/PhotoGallery';
import VideoGallery from '@/components/sections/gallery/VideoGallery';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Gallery',
  description:
    'Photos and videos of pujas, ceremonies, consultations, and gatherings at Sri Panchamukhi Astro Centre.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />
      <PhotoGallery />
      <VideoGallery />
    </>
  );
}
