import Image from 'next/image';
import Link from 'next/link';

/**
 * Brand lockup. The supplied logo is a JPEG with a solid white field, so the
 * mark is framed inside a rounded white plate rather than dropped straight onto
 * the paper or ink background.
 *
 * The original file is a combined mark + "ASSET PROPERTY SOLUTION" lockup. Its
 * baked-in wordmark is a few pixels tall at navbar sizes and smears into a
 * grey band, so `logo-mark.png` holds the cropped 3D mark only and the wordmark
 * is set in live type below for legibility on every viewport.
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
  const plate =
    size === 'lg'
      ? 'h-16 w-16 lg:h-20 lg:w-20'
      : 'h-10 w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16';

  return (
    <Link
      href="/"
      aria-label="Asset Property Solution — home"
      className={`group flex shrink-0 items-center gap-3 ${className}`}
    >
      <span
        className={`relative block shrink-0 overflow-hidden rounded-[5px] bg-white ring-1 ring-ink/10 ${plate}`}
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 128px, 112px"
          priority
          className="object-contain p-[2px] transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
        />
      </span>
      <span className="flex shrink-0 flex-col leading-none">
        <span
          className={`display text-[16px] leading-none tracking-[0.15em] lg:text-[19px] xl:text-[20px] ${
            isPaper ? 'text-paper' : 'text-ink'
          }`}
        >
          ASSET
        </span>
        <span
          className={`eyebrow mt-2 text-[8px] leading-none tracking-[0.28em] lg:text-[9px] ${
            isPaper ? 'text-paper/50' : 'text-muted'
          }`}
        >
          PROPERTY SOLUTION
        </span>
      </span>
    </Link>
  );
}
