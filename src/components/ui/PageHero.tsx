import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { PLACEHOLDER_IMG } from '@/constants/siteConfig';

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumb: Crumb[];
  backgroundImage?: string;
  actions?: ReactNode;
}

export default function PageHero({
  title,
  breadcrumb,
  backgroundImage = PLACEHOLDER_IMG,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative h-full max-w-container mx-auto px-6 flex flex-col items-center justify-center text-center text-site-white">
        <div className="w-10 h-[3px] bg-accent mb-4" />
        <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
        <nav className="mt-4 flex items-center gap-2 text-sm">
          {breadcrumb.map((c, i) => (
            <span key={c.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-accent-light">›</span>}
              {i === breadcrumb.length - 1 ? (
                <span className="text-site-white/90">{c.label}</span>
              ) : (
                <Link href={c.href} className="text-accent-light hover:text-accent">
                  {c.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
        {actions ? (
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">{actions}</div>
        ) : null}
      </div>
    </section>
  );
}
