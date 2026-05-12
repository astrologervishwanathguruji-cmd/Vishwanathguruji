'use client';

import { useAnimation, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return { ref, controls, variants: fadeUpVariants };
}
