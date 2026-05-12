'use client';

import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/types';

export default function StatCounter({ stat }: { stat: Stat }) {
  const { ref, count } = useCountUp(stat.value, 2000);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-display text-4xl md:text-5xl text-accent font-bold">
        {count.toLocaleString('en-IN')}
        {stat.suffix}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-site-white/60">
        {stat.label}
      </div>
    </div>
  );
}
