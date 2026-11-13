import type { ReactNode } from 'react';
import MaskLines from '@/components/motion/MaskLines';
import Reveal from '@/components/Reveal';

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = 'ink',
  className = '',
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: 'ink' | 'paper';
  className?: string;
}) {
  const isPaper = tone === 'paper';

  return (
    <div
      className={`border-t pt-5 ${
        isPaper ? 'border-paper/20' : 'border-ink/15'
      } ${className}`}
    >
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className={`eyebrow ${isPaper ? 'text-paper/50' : 'text-muted'}`}>
              {index && <span className="text-brass">{index}</span>}
              {index && eyebrow ? <span className="mx-2 text-brass/60">/</span> : null}
              {eyebrow}
            </p>
          </div>
          <div className="lg:col-span-9">
            <MaskLines
              as="h2"
              scroll
              lines={[title]}
              className={`display text-[clamp(2rem,4.2vw,3.6rem)] ${
                isPaper ? 'text-paper' : 'text-ink'
              }`}
            />
            {description && (
              <p
                className={`mt-6 max-w-xl text-[15px] leading-relaxed ${
                  isPaper ? 'text-paper/60' : 'text-muted'
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
