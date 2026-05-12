import Image from 'next/image';
import { Star } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';
import { SERVICES } from '@/constants/services';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export default function TestimonialCard({ testimonial, compact = false }: TestimonialCardProps) {
  const service = SERVICES.find((s) => s.slug === testimonial.serviceSlug);

  return (
    <article
      className={cn(
        'relative bg-site-white border border-site-border/40 rounded-lg shadow-sm h-full flex flex-col',
        compact ? 'p-5' : 'p-7',
      )}
    >
      <span
        className="absolute top-2 left-4 font-display text-6xl text-accent/20 leading-none select-none"
        aria-hidden
      >
        “
      </span>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div
          className={cn(
            'flex gap-1 text-accent mb-3',
            compact ? 'pl-10' : 'pl-12',
          )}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p
          className={cn(
            'font-display italic text-site-text-muted leading-relaxed flex-1',
            compact ? 'text-sm' : 'text-base',
          )}
        >
          {testimonial.quote}
        </p>
        <hr className="my-4 border-site-border/40" />
        <div className="flex items-center gap-3">
          {compact ? (
            <div className="w-10 h-10 rounded-full bg-primary text-site-white flex items-center justify-center font-display font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          ) : (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-site-surface ring-2 ring-accent-pale shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="font-semibold text-site-text text-sm">{testimonial.name}</div>
            <div className="text-xs text-site-text-muted">
              {testimonial.city} · {formatDate(testimonial.date)}
            </div>
          </div>
          {service && (
            <span className="hidden sm:inline-block bg-accent-pale text-accent text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded">
              {service.title.split(' ')[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
