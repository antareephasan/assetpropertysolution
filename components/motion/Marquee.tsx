'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type MarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  separatorClassName?: string;
  duration?: number;
  reverse?: boolean;
  srLabel?: string;
};

/**
 * Seamless typographic ticker. Two identical tracks are shifted by half the
 * total width, so the loop has no visible seam.
 */
export default function Marquee({
  items,
  className = '',
  itemClassName = '',
  separatorClassName = '',
  duration = 34,
  reverse = false,
  srLabel,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    if (reverse) gsap.set(track, { xPercent: -50 });

    const tween = gsap.to(track, {
      xPercent: reverse ? 0 : -50,
      duration,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [duration, reverse]);

  return (
    <div className={className}>
      {srLabel ? <p className="sr-only">{srLabel}</p> : null}
      <div className="overflow-hidden" aria-hidden>
        <div ref={trackRef} className="flex w-max will-change-transform">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {items.map((item, i) => (
                <span key={`${copy}-${i}`} className="flex shrink-0 items-center">
                  <span className={itemClassName}>{item}</span>
                  <span
                    className={`mx-6 select-none text-brass sm:mx-10 ${separatorClassName}`}
                  >
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
