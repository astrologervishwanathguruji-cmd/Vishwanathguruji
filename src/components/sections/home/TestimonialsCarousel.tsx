'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
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
          subtitle="Drawn from over 55,000 consultations, a small selection of those who returned to share their gratitude."
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
          pagination={{ clickable: true, el: '.t-pagination' }}
          className="testimonials-swiper !pb-2"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="pb-6">
                <TestimonialCard testimonial={t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 grid min-h-12 w-full grid-cols-[1fr_auto_1fr] items-center gap-x-4 sm:gap-x-5">
          <button
            type="button"
            className="t-prev col-start-1 justify-self-end w-10 h-10 shrink-0 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="t-pagination col-start-2 flex min-h-11 min-w-0 items-center justify-center gap-2 px-1" />
          <button
            type="button"
            className="t-next col-start-3 justify-self-start w-10 h-10 shrink-0 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-center mt-10">
          <Button href="/testimonials" variant="primary" size="md">
            Read All Testimonials →
          </Button>
        </div>
      </div>
    </section>
  );
}
