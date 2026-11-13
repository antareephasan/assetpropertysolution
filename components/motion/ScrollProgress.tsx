'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed left-0 top-0 z-[80] h-px w-full origin-left scale-x-0 bg-brass"
    />
  );
}
