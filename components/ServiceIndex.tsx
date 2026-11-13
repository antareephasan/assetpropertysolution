'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap, hasFinePointer, prefersReducedMotion } from '@/lib/gsap';

export type ServiceRow = {
  slug: string;
  title: string;
  description: string;
  image: string;
  position?: string;
};

export default function ServiceIndex({ services }: { services: ServiceRow[] }) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewInner = useRef<HTMLDivElement>(null);
  const canPreview = useRef(false);

  useEffect(() => {
    canPreview.current = hasFinePointer() && !prefersReducedMotion();
    const preview = previewRef.current;
    if (!preview || !canPreview.current) return;

    gsap.set(preview, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.92 });
    const xTo = gsap.quickTo(preview, 'x', { duration: 0.7, ease: 'power3.out' });
    const yTo = gsap.quickTo(preview, 'y', { duration: 0.7, ease: 'power3.out' });

    const onMove = (event: MouseEvent) => {
      gsap.set(preview, { xPercent: -50, yPercent: -50 });
      xTo(event.clientX);
      yTo(event.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || !canPreview.current) return;

    if (active !== null) {
      gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
      if (previewInner.current) {
        gsap.fromTo(
          previewInner.current,
          { scale: 1.12 },
          { scale: 1, duration: 0.9, ease: 'expo.out' }
        );
      }
    } else {
      gsap.to(preview, { autoAlpha: 0, scale: 0.94, duration: 0.3, ease: 'power2.out' });
    }
  }, [active]);

  return (
    <div className="relative">
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[300px] w-[380px] overflow-hidden opacity-0 lg:block"
      >
        <div ref={previewInner} className="relative h-full w-full">
          {services.map((service, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={service.slug}
              src={service.image}
              alt=""
              style={{ objectPosition: service.position ?? 'center' }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                active === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <ul className="border-t border-ink/15">
        {services.map((service, i) => (
          <li key={service.slug} className="border-b border-ink/15">
            <Link
              href={`/services#${service.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid items-baseline gap-3 py-6 sm:grid-cols-12 sm:gap-6 sm:py-7"
            >
              <span className="eyebrow text-brass sm:col-span-1">0{i + 1}</span>
              <span className="display text-[clamp(1.7rem,3.2vw,2.6rem)] text-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 sm:col-span-6">
                {service.title}
              </span>
              <span className="max-w-sm text-sm leading-relaxed text-muted sm:col-span-4">
                {service.description}
              </span>
              <span className="hidden justify-self-end sm:col-span-1 sm:block">
                <ArrowUpRight
                  className="h-5 w-5 text-ink/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass"
                  strokeWidth={1.25}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
