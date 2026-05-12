import StatCounter from '@/components/ui/StatCounter';
import { STATS } from '@/constants/stats';

export default function StatsCounterBand() {
  return (
    <section className="relative bg-site-dark-band overflow-hidden">
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-devanagari text-accent text-[18rem] opacity-[0.06] pointer-events-none select-none"
      >
        ॐ
      </span>
      <div className="relative max-w-container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-site-white/10 md:divide-x">
        {STATS.map((s) => (
          <StatCounter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
