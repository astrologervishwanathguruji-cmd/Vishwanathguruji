import Image from 'next/image';
import { IMG } from '@/constants/images';

const paragraphs = [
  "Born into a lineage of Vedic scholars and trained from an early age in the classical Sanskrit corpus, Pandit Sri Vishwanath Guruji established Sri Panchamukhi Astro Centre in Jayanagar, Bangalore, in 1989, at a time when authentic Vedic counsel was becoming increasingly rare in urban India.",
  "Over the past three and a half decades, Guruji has counselled more than 55,000 seekers, from young couples navigating their first marital crisis to seasoned business leaders facing political and legal obstacles. His method blends deep classical knowledge of the Brihat Parashara Hora Shastra and Jaimini Sutras with a practical, ethical, and unsentimental approach to remedy.",
  "What sets Guruji apart is his refusal to traffic in fear. He is direct about what astrology can and cannot do; he never prescribes a remedy he himself would not perform; and every consultation ends not with a prediction but with a clear, actionable path forward.",
];

export default function BiographySection() {
  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={IMG.about}
              alt="Pandit Sri Vishwanath Guruji"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
            The Astrologer
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold leading-tight">
            Pandit Sri Vishwanath Guruji
          </h2>
          <div className="w-10 h-[3px] bg-accent mt-4 mb-6" />
          <div className="space-y-4 text-site-text-muted leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
