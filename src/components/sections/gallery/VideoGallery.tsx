import Image from 'next/image';
import { Play } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { VIDEO_GALLERY } from '@/constants/gallery';

export default function VideoGallery() {
  return (
    <section className="bg-site-surface py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader accent="Watch" title="Videos & Discourses" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_GALLERY.map((v) => (
            <a
              key={v.id}
              href={v.url}
              className="group block bg-site-white rounded-md overflow-hidden border border-site-border/40 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <Image src={v.thumb} alt={v.title} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-accent text-site-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-site-text leading-snug">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
