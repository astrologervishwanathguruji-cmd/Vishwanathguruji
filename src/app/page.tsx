import HeroSlider from '@/components/sections/home/HeroSlider';
import AboutSummary from '@/components/sections/home/AboutSummary';
import StatsCounterBand from '@/components/sections/home/StatsCounterBand';
import ServicesGrid from '@/components/sections/home/ServicesGrid';
import ScrollTicker from '@/components/ui/ScrollTicker';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import TestimonialsCarousel from '@/components/sections/home/TestimonialsCarousel';
import GalleryPreview from '@/components/sections/home/GalleryPreview';
import PujasBand from '@/components/sections/home/PujasBand';
import ContactBand from '@/components/sections/home/ContactBand';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSummary />
      <StatsCounterBand />
      <ServicesGrid />
      <ScrollTicker />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <GalleryPreview />
      <PujasBand />
      <ContactBand />
    </>
  );
}
