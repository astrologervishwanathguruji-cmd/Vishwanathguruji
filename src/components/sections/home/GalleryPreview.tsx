import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { GALLERY } from '@/constants/gallery';

const NUMBERED_GALLERY_IMAGE = /^\/images\/gallery-\d+\.jpg$/;

export default function GalleryPreview() {
  const tiles = GALLERY.filter((img) => NUMBERED_GALLERY_IMAGE.test(img.src)).slice(0, 8);

  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Photos & Events"
          title="Glimpses of Sacred Ceremonies"
          subtitle="Moments from pujas, consultations, and gatherings at the centre and across India."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {tiles.map((img, i) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-md group ${
                i % 4 === 0 || i % 4 === 3 ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/gallery">View Full Gallery →</Button>
        </div>
      </div>
    </section>
  );
}
