import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ParallaxImage from '@/components/motion/ParallaxImage';
import type { Project } from '@/lib/projects';

export default function ProjectCard({
  project,
  aspect = 'aspect-[4/3]',
  sizes = '(min-width: 1024px) 55vw, 100vw',
  priority = false,
  tone = 'ink',
}: {
  project: Project;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  tone?: 'ink' | 'paper';
}) {
  const isPaper = tone === 'paper';

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <ParallaxImage
          src={project.cover}
          alt={project.coverAlt}
          className={`${aspect} w-full`}
          sizes={sizes}
          priority={priority}
          objectPosition={project.coverPosition}
          strength={5}
          imgClassName="transition-[filter] duration-700 group-hover:brightness-[1.04]"
        />
      </div>

      <div
        className={`mt-4 flex items-start justify-between gap-4 border-t pt-3 ${
          isPaper ? 'border-paper/20' : 'border-ink/15'
        }`}
      >
        <div>
          <p className={`eyebrow ${isPaper ? 'text-paper/45' : 'text-muted'}`}>
            <span className={isPaper ? 'text-brass-light' : 'text-brass'}>{project.index}</span>
            <span className="mx-2 opacity-60">/</span>
            {project.category} · {project.year}
          </p>
          <h3
            className={`display mt-2 text-[clamp(1.35rem,2vw,1.9rem)] ${
              isPaper ? 'text-paper' : 'text-ink'
            }`}
          >
            <span className="link-underline">{project.title}</span>
          </h3>
          <p className={`mt-1 text-[13px] ${isPaper ? 'text-paper/50' : 'text-muted'}`}>
            {project.location}
          </p>
        </div>
        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
            isPaper
              ? 'border-paper/25 group-hover:border-paper group-hover:bg-paper group-hover:text-ink'
              : 'border-ink/15 group-hover:border-ink group-hover:bg-ink group-hover:text-paper'
          }`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
        </span>
      </div>
    </Link>
  );
}
