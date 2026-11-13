import type { ReactNode } from 'react';
import MaskLines from '@/components/motion/MaskLines';
import Reveal from '@/components/Reveal';

export default function PageHero({
  index,
  label,
  titleLines,
  description,
  meta,
}: {
  index: string;
  label: string;
  titleLines: ReactNode[];
  description?: ReactNode;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="container-edge pb-14 pt-32 sm:pt-40 lg:pb-20 lg:pt-48">
      <div className="rule-label">
        <p className="eyebrow text-ink">
          <span className="text-brass">{index}</span>
          <span className="mx-2 text-brass/60">/</span>
          {label}
        </p>
        <p className="eyebrow hidden text-muted sm:block">
          ASSET PROPERTY SOLUTION — LOS ANGELES
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <MaskLines
            as="h1"
            lines={titleLines}
            stagger={0.08}
            className="display text-[clamp(2.85rem,7vw,6.4rem)] text-ink"
          />
        </div>

        <div className="lg:col-span-4 lg:pl-6 lg:pt-3">
          {description && (
            <Reveal delay={0.35}>
              <p className="max-w-sm text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          )}
          {meta && meta.length > 0 && (
            <Reveal delay={0.45}>
              <dl className="mt-8 border-t border-ink/15">
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3"
                  >
                    <dt className="eyebrow text-muted">{item.label}</dt>
                    <dd className="text-right text-[13px] text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
