'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { projectCategories, type Project } from '@/lib/projects';

const layout = [
  { wrapper: 'lg:col-span-7', aspect: 'aspect-[4/3]', sizes: '(min-width: 1024px) 58vw, 100vw' },
  {
    wrapper: 'lg:col-span-5 lg:mt-24',
    aspect: 'aspect-[4/5]',
    sizes: '(min-width: 1024px) 40vw, 100vw',
  },
  { wrapper: 'lg:col-span-5', aspect: 'aspect-[4/5]', sizes: '(min-width: 1024px) 40vw, 100vw' },
  {
    wrapper: 'lg:col-span-7 lg:mt-16',
    aspect: 'aspect-[4/3]',
    sizes: '(min-width: 1024px) 58vw, 100vw',
  },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const visible =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );
    }, grid);
    return () => ctx.revert();
  }, [filter]);

  const changeFilter = (next: (typeof projectCategories)[number]) => {
    if (next === filter) return;
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) {
      setFilter(next);
      return;
    }
    gsap.to(grid, {
      autoAlpha: 0,
      y: 8,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => setFilter(next),
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-ink/15 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {projectCategories.map((category) => {
            const active = category === filter;
            return (
              <button
                key={category}
                type="button"
                onClick={() => changeFilter(category)}
                aria-pressed={active}
                className={`eyebrow relative py-1 transition-colors ${
                  active ? 'text-ink' : 'text-ink/40 hover:text-ink/80'
                }`}
              >
                {category}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brass transition-[width] duration-500 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
        <p className="eyebrow text-muted">
          Showing {String(visible.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </p>
      </div>

      <div ref={gridRef} className="mt-12 grid gap-x-8 gap-y-14 lg:mt-16 lg:grid-cols-12">
        {visible.map((project, i) => {
          const cell = layout[i] ?? layout[0];
          return (
            <div key={project.slug} className={cell.wrapper}>
              <ProjectCard
                project={project}
                aspect={cell.aspect}
                sizes={cell.sizes}
                priority={i === 0}
              />
            </div>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-sm text-muted">No field files in this category yet.</p>
      )}
    </div>
  );
}
