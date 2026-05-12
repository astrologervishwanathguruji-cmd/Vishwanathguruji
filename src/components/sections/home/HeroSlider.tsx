'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, MoveDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { PLACEHOLDER_IMG } from '@/constants/siteConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    headline: 'Vashikaran & Love Problem Specialist in Bangalore',
    sub: 'Ancient Vedic solutions to bring your loved one back into your life.',
    image: PLACEHOLDER_IMG,
  },
  {
    headline: 'Black Magic Removal & Protection Rituals',
    sub: 'Break free from dark energies with powerful Tantrik remedies.',
    image: PLACEHOLDER_IMG,
  },
  {
    headline: 'Vastu Shastra & Home Harmony Solutions',
    sub: 'Transform your living space into a sanctuary of positive energy.',
    image: PLACEHOLDER_IMG,
  },
  {
    headline: 'Career, Finance & Business Problem Resolution',
    sub: 'Unlock your true potential with planetary alignment guidance.',
    image: PLACEHOLDER_IMG,
  },
  {
    headline: 'Special Pujas & Sacred Rituals for Your Wellbeing',
    sub: 'Sacred fire ceremonies performed with ancient Vedic precision.',
    image: PLACEHOLDER_IMG,
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[88vh] min-h-[560px] bg-site-dark-band overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={600}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
        pagination={{ clickable: true, el: '.hero-pagination', bulletClass: 'hero-dot', bulletActiveClass: 'hero-dot--active' }}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.headline}>
            <div className="relative w-full h-full">
              <Image
                src={s.image}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/70 to-site-dark-band/85" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-container w-full mx-auto px-6 md:px-10 text-site-white">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-accent-light/30 text-accent-light text-[10px] font-mono uppercase tracking-[0.18em] mb-5">
                      · Trusted Since 1989 ·
                    </span>
                    <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
                      Sri Panchamukhi Astro Centre
                    </div>
                    <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
                      {s.headline}
                    </h1>
                    <p className="text-base md:text-lg text-site-white/85 max-w-xl mb-8">
                      {s.sub}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button href="/services" variant="gold" size="lg">
                        Explore Services
                      </Button>
                      <Button href="/contact" variant="ghost" size="lg">
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="hero-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-site-white/20 text-site-white items-center justify-center hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="hero-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-site-white/20 text-site-white items-center justify-center hover:bg-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2" />

      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-site-white/70 text-xs tracking-widest uppercase animate-bob">
        <span>Scroll</span>
        <MoveDown size={14} />
      </div>

      <style jsx global>{`
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.4);
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-dot--active {
          background: #c9922a;
          width: 24px;
        }
      `}</style>
    </section>
  );
}
