'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        v: value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${counter.v.toFixed(decimals)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [decimals, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
