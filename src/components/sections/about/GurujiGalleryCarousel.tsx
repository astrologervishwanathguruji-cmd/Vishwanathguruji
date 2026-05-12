'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { GALLERY } from '@/constants/gallery';

import 'swiper/css';
import 'swiper/css/navigation';

export default function GurujiGalleryCarousel() {
  const tiles = GALLERY.slice(0, 8);
  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader accent="Glimpses" title="Moments from the Centre" />
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1.2}
          spaceBetween={16}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          navigation={{ prevEl: '.g-prev', nextEl: '.g-next' }}
        >
          {tiles.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            className="g-prev w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-site-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="g-next w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-site-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
