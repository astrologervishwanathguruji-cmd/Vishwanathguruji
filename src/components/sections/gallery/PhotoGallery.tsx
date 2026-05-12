'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { GALLERY, GALLERY_CATEGORIES } from '@/constants/gallery';
import type { GalleryImage } from '@/types';
import { cn } from '@/lib/utils';

export default function PhotoGallery() {
  const [filter, setFilter] = useState<GalleryImage['category'] | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section className="bg-site-bg py-12 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                filter === c.key
                  ? 'bg-primary text-site-white border-primary'
                  : 'bg-site-white text-site-text border-site-border/60 hover:border-primary hover:text-primary',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="block mb-4 w-full overflow-hidden rounded-md group break-inside-avoid"
              aria-label={`Open image: ${img.alt}`}
            >
              <div className="relative" style={{ aspectRatio: `${img.width} / ${img.height}` }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={filtered.map((g) => ({ src: g.src, alt: g.alt }))}
        />
      </div>
    </section>
  );
}
