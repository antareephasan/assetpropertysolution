'use client';

import { useEffect, useState } from 'react';

export default function ServiceNav({
  items,
}: {
  items: { slug: string; title: string }[];
}) {
  const [active, setActive] = useState(items[0]?.slug ?? '');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Service index" className="border-t border-ink/15">
      {items.map((item, i) => {
        const isActive = active === item.slug;
        return (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            aria-current={isActive ? 'true' : undefined}
            className={`group flex items-baseline justify-between gap-4 border-b border-ink/15 py-3 text-[13px] transition-colors duration-300 ${
              isActive ? 'text-brass' : 'text-ink/55 hover:text-ink'
            }`}
          >
            <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
              {item.title}
            </span>
            <span className={`eyebrow ${isActive ? 'text-brass' : 'text-muted/60'}`}>
              0{i + 1}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
