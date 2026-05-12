import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PUJAS } from '@/constants/pujas';
import { cn } from '@/lib/utils';

export default function PujaListing() {
  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 space-y-14 lg:space-y-20">
        {PUJAS.map((puja, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={puja.slug}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
            >
              <div
                className={cn(
                  'relative aspect-[4/3] overflow-hidden rounded-md',
                  reverse && 'lg:order-2',
                )}
              >
                <div className="absolute inset-3 border-2 border-accent z-10 pointer-events-none" />
                <Image
                  src={puja.image}
                  alt={puja.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={cn(reverse && 'lg:order-1')}>
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
                  Sacred Ritual
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-primary font-bold leading-tight">
                  {puja.title}
                </h3>
                <div className="w-10 h-[3px] bg-accent my-4" />
                <p className="text-site-text-muted leading-relaxed mb-5">{puja.description}</p>
                <ul className="space-y-2 mb-6">
                  {puja.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="text-accent text-lg leading-none mt-0.5">◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" size="md">
                  Book This Puja →
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
