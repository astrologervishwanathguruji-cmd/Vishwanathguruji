import Button from '@/components/ui/Button';

export default function MissionBand() {
  return (
    <section className="relative bg-primary text-site-white overflow-hidden">
      <span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-devanagari text-accent text-[16rem] opacity-10 pointer-events-none"
      >
        ॐ
      </span>
      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 text-center max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
          Our Mission
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Vedic wisdom, delivered ethically — for every seeker.
        </h2>
        <p className="text-site-white/80 text-lg leading-relaxed mb-8 mx-auto max-w-2xl">
          Sri Panchamukhi Astro Centre exists to make authentic Vedic counsel accessible without
          fear, without exaggeration, and without compromise. Every consultation is held in
          confidence; every remedy is rooted in classical texts; every seeker leaves with clarity.
        </p>
        <Button href="/contact" variant="gold">
          Begin Your Consultation
        </Button>
      </div>
    </section>
  );
}
