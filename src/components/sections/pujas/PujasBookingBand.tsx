import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function PujasBookingBand() {
  return (
    <section className="relative bg-primary text-site-white overflow-hidden">
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 font-devanagari text-accent text-[18rem] opacity-10 pointer-events-none"
      >
        ॐ
      </span>
      <div className="relative max-w-container mx-auto px-6 py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-3">
          Book a Puja
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Schedule a sacred ritual with Guruji
        </h2>
        <p className="text-site-white/80 max-w-2xl mx-auto mb-8">
          All pujas are performed personally by Guruji with traditional Vedic precision. Reach out
          to discuss timing, intent, and the right ritual for your situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/contact" variant="gold" size="lg">
            Request a Puja
          </Button>
          <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
            Call {SITE_CONFIG.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
