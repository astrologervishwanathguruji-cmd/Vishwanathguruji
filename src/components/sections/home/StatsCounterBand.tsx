import StatCounter from '@/components/ui/StatCounter';
import { STATS } from '@/constants/stats';

export default function StatsCounterBand() {
  return (
    <section className="relative bg-site-dark-band overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <span className="font-devanagari text-accent text-[18rem] leading-none opacity-[0.06] select-none">
          ॐ
        </span>
      </div>
      <div className="relative z-10 max-w-container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-site-white/10 md:divide-x">
        {STATS.map((s) => (
          <StatCounter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
