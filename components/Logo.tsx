import Image from 'next/image';
import Link from 'next/link';

/**
 * Brand lockup. The supplied logo is a JPEG with a solid white field, so it is
 * framed inside a rounded white plate rather than dropped straight onto the
 * paper or ink background.
 */
export default function Logo({
  tone = 'ink',
  className = '',
  size = 'md',
}: {
  tone?: 'ink' | 'paper';
  className?: string;
  size?: 'md' | 'lg';
}) {
  const isPaper = tone === 'paper';
  const tile = size === 'lg' ? 'h-16 w-16' : 'h-12 w-12';

  return (
    <Link
      href="/"
      aria-label="Asset Property Solution — home"
      className={`group flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative block shrink-0 overflow-hidden rounded-[4px] bg-white ring-1 ring-ink/10 ${tile}`}
      >
        <Image
          src="/images/logo.jpeg"
          alt=""
          fill
          sizes="112px"
          priority
          className="object-contain p-[2px] transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`display text-[15px] tracking-[0.16em] ${
            isPaper ? 'text-paper' : 'text-ink'
          }`}
        >
          ASSET
        </span>
        <span
          className={`eyebrow mt-1.5 text-[7.5px] tracking-[0.3em] ${
            isPaper ? 'text-paper/45' : 'text-muted'
          }`}
        >
          PROPERTY SOLUTION
        </span>
      </span>
    </Link>
  );
}
