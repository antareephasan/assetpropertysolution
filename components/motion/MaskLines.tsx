'use client';

import { createElement, useEffect, useRef } from 'react';
import type { ElementType, ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type MaskLinesProps = {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** Trigger on scroll instead of on mount */
  scroll?: boolean;
  start?: string;
};

/**
 * Editorial line reveal: each line sits inside a clipping mask and slides up.
 * Keeps server-rendered text intact for SEO — the animation is applied only
 * after mount, and is skipped for reduced-motion users.
 */
export default function MaskLines({
  as = 'div',
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.09,
  scroll = false,
  start = 'top 88%',
}: MaskLinesProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-mask-inner]',
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: 'expo.out',
          stagger,
          delay,
          scrollTrigger: scroll
            ? { trigger: el, start, once: true }
            : undefined,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, scroll, start]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any;

  return createElement(
    Tag,
    { className, ref },
    lines.map((line, i) => (
      <span
        key={i}
        className={`block overflow-hidden pb-[0.16em] -mb-[0.16em] ${lineClassName}`}
      >
        <span data-mask-inner className="block will-change-transform">
          {line}
        </span>
      </span>
    ))
  );
}
