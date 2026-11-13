'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Vertical drift in percent of image height */
  strength?: number;
  /** Clip-path cover reveal on scroll */
  reveal?: boolean;
  objectPosition?: string;
};

export default function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  sizes = '100vw',
  priority = false,
  strength = 6,
  reveal = true,
  objectPosition = 'center',
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img || prefersReducedMotion()) return;

    gsap.set(img, { scale: 1.18 });

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          img,
          { yPercent: -strength },
          {
            yPercent: strength,
            ease: 'none',
            scrollTrigger: {
              trigger: frame,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      if (reveal) {
        gsap.fromTo(
          frame,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.3,
            ease: 'expo.out',
            scrollTrigger: { trigger: frame, start: 'top 92%', once: true },
          }
        );
      }
    }, frame);

    return () => ctx.revert();
  }, [reveal, strength]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden bg-stone ${className}`}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition }}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
