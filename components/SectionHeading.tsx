import Reveal from '@/components/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">{eyebrow}</p>
      )}
      <h2
        className={`font-display mt-4 text-3xl font-bold text-white sm:text-4xl ${
          center ? '' : 'gold-rule'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-body/80">{description}</p>
      )}
    </Reveal>
  );
}
