'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsCarousel() {
  return (
    <section className="bg-site-surface py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="What Clients Say"
          title="Real Stories of Transformation"
          subtitle="Drawn from over 55,000 consultations — a small selection of those who returned to share their gratitude."
        />
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: '.t-prev', nextEl: '.t-next' }}
          pagination={{ clickable: true, el: '.t-pagination', bulletClass: 'hero-dot', bulletActiveClass: 'hero-dot--active' }}
          className="!pb-2"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <div className="h-full pb-6">
                <TestimonialCard testimonial={t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            type="button"
            className="t-prev w-10 h-10 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="t-pagination flex items-center gap-2" />
          <button
            type="button"
            className="t-next w-10 h-10 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
