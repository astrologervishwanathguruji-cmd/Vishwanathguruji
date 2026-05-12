'use client';

import { useEffect, useRef, useState } from 'react';

export function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(start + (end - start) * eased));
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return { ref, count };
}
