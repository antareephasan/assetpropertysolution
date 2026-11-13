'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type RevealWordsProps = {
  text: string;
  className?: string;
  /** Word opacity at the start of the scroll-linked progression */
  from?: number;
};

/**
 * Scroll-linked word fade: copy resolves from a light grey into full ink as
 * the block moves through the viewport.
 */
export default function RevealWords({ text, className = '', from = 0.16 }: RevealWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-word]',
        { opacity: from },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.6 / Math.max(words.length, 1),
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            end: 'bottom 58%',
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [from, words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span data-word className="inline-block">
            {word}
          </span>{' '}
        </span>
      ))}
    </p>
  );
}
