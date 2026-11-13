'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Route transition: an ink curtain lifts away from the top edge on every
 * navigation. Mounted through app/template.tsx so it remounts per route.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curtain = rootRef.current?.querySelector<HTMLElement>('[data-curtain]');
    if (!curtain) return;

    if (prefersReducedMotion()) {
      gsap.set(curtain, { display: 'none' });
      return;
    }

    const tl = gsap.timeline();
    tl.set(curtain, { yPercent: 0, display: 'flex' })
      .to(curtain, { yPercent: -101, duration: 0.9, ease: 'expo.inOut' })
      .set(curtain, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <noscript>
        <style>{'[data-curtain]{display:none!important}'}</style>
      </noscript>
      <div
        data-curtain
        aria-hidden
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
      >
        <span className="eyebrow text-paper/35">ASSET — PROPERTY SOLUTION</span>
      </div>
      {children}
    </div>
  );
}
