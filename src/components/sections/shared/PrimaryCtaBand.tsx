import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PrimaryCtaBandProps {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
  /** Decorative ॐ watermark — `right` matches About / Mission default */
  omSide?: 'left' | 'right';
  className?: string;
}

export default function PrimaryCtaBand({
  label,
  title,
  description,
  children,
  omSide = 'right',
  className,
}: PrimaryCtaBandProps) {
  return (
    <section className={cn('relative bg-primary text-site-white overflow-hidden', className)}>
      <span
        aria-hidden
        className={cn(
          'absolute top-1/2 -translate-y-1/2 font-devanagari text-accent text-[16rem] md:text-[18rem] opacity-10 pointer-events-none',
          omSide === 'right' ? 'right-0' : 'left-0',
        )}
      >
        ॐ
      </span>
      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 text-center">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">{label}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-site-white/80 text-lg leading-relaxed mb-8 mx-auto max-w-2xl">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">{children}</div>
      </div>
    </section>
  );
}
