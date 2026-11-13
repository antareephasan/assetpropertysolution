import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import MaskLines from '@/components/motion/MaskLines';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { getNextProject, getProject, projects } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Field File ${project.index}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — Field File ${project.index}`,
      description: project.summary,
      images: [{ url: project.cover, alt: project.coverAlt }],
    },
  };
}

const programPhases = [
  {
    label: 'Weeks 01–02',
    title: 'Clear',
    text: 'Perimeter cleared, debris hauled, access points repaired and lighting checked.',
  },
  {
    label: 'Weeks 03–06',
    title: 'Maintain',
    text: 'Fixed weekly visits against the same photo checklist, with same-day reporting.',
  },
  {
    label: 'Close-out',
    title: 'Hand off',
    text: 'Complete photo record and maintenance log delivered to the asset manager and broker.',
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <article>
      {/* ============ HEADER ============ */}
      <header className="container-edge pb-10 pt-32 sm:pt-40 lg:pt-48">
        <div className="rule-label">
          <p className="eyebrow text-ink">
            <span className="text-brass">Field file {project.index}</span>
            <span className="mx-2 text-brass/60">/</span>
            {project.category}
          </p>
          <p className="eyebrow hidden text-muted sm:block">{project.location}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <MaskLines
              as="h1"
              lines={[project.title]}
              className="display text-[clamp(2.9rem,7vw,6.2rem)] text-ink"
            />
          </div>
          <div className="lg:col-span-4 lg:pt-3">
            <Reveal delay={0.3}>
              <p className="max-w-sm text-[15px] leading-relaxed text-muted">{project.summary}</p>
              <Link
                href="/projects"
                className="link-underline mt-6 inline-flex items-center gap-2 text-[13px] text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                All field files
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink/15 pt-4">
            <p className="eyebrow text-muted">
              Asset <span className="ml-2 text-ink">{project.assetType}</span>
            </p>
            <p className="eyebrow text-muted">
              Client <span className="ml-2 text-ink">{project.clientType}</span>
            </p>
            <p className="eyebrow text-muted">
              Year <span className="ml-2 text-ink">{project.year}</span>
            </p>
          </div>
        </Reveal>
      </header>

      {/* ============ COVER ============ */}
      <div className="container-edge">
        <ParallaxImage
          src={project.cover}
          alt={project.coverAlt}
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          priority
          strength={5}
          objectPosition={project.coverPosition}
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          <p className="eyebrow text-muted">
            {project.location} — {project.year}
          </p>
          <p className="eyebrow hidden text-muted sm:block">ASSET PROPERTY SOLUTION</p>
        </div>
      </div>

      {/* ============ NARRATIVE ============ */}
      <section className="container-edge py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-muted">
                  <span className="text-brass">01</span>
                  <span className="mx-2 text-brass/60">/</span>
                  Brief
                </p>
                <dl className="mt-6 border-t border-ink/15">
                  {[
                    { label: 'Client', value: project.clientType },
                    { label: 'Asset', value: project.assetType },
                    { label: 'Category', value: project.category },
                    { label: 'Year', value: project.year },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3"
                    >
                      <dt className="eyebrow text-muted">{item.label}</dt>
                      <dd className="max-w-[9rem] text-right text-[12px] leading-relaxed text-ink">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted">
              {project.brief.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={
                    i === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.72] first-letter:text-brass'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Reveal>
              <blockquote className="display mt-10 max-w-2xl border-l border-brass pl-6 text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.2] text-ink">
                “{project.quote}”
              </blockquote>
            </Reveal>

            <div className="mt-12">
              <p className="eyebrow text-muted">
                <span className="text-brass">02</span>
                <span className="mx-2 text-brass/60">/</span>
                Approach
              </p>
              <div className="mt-5 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted">
                {project.approach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-ink/15 pt-6">
              <p className="eyebrow text-muted">Outcome</p>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {project.result.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-ink/10 py-3 text-[13px] leading-relaxed text-ink/75"
                  >
                    <span className="mt-0.5 font-mono text-[10px] text-brass">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="container-edge grid sm:grid-cols-3">
          {project.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.07}
              className={`py-8 sm:py-10 ${
                i > 0 ? 'border-t border-ink/15 sm:border-l sm:border-t-0 sm:pl-8' : ''
              }`}
            >
              <p className="display text-[clamp(2.6rem,5vw,4rem)] leading-none text-ink">
                {stat.value}
              </p>
              <p className="eyebrow mt-3 text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SCOPE ============ */}
      <section className="container-edge py-20 lg:py-28">
        <SectionHeading
          index="03"
          eyebrow="Scope of work"
          title="What the order covered."
          description="Every line below was priced and approved before work began. Changes are documented, never assumed."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 lg:col-start-5">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {project.scope.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-t border-ink/15 py-3 text-[13px] text-ink/75"
                >
                  <span className="font-mono text-[10px] text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-3">
            <p className="eyebrow text-muted">Delivered</p>
            <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-muted">
              <li>Photo set, indexed</li>
              <li>Line-item invoice</li>
              <li>Completion notes</li>
              <li>Client sign-off where required</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ============ AFTER / PROGRAM ============ */}
      {project.gallery ? (
        <section className="container-edge pb-20 lg:pb-28">
          <div className="border-t border-ink/15 pt-6">
            <p className="eyebrow text-muted">
              <span className="text-brass">04</span>
              <span className="mx-2 text-brass/60">/</span>
              After
            </p>
          </div>
          <div className="mt-6">
            <ParallaxImage
              src={project.gallery.src}
              alt={project.gallery.alt}
              className="aspect-[4/3] w-full sm:aspect-[16/9]"
              sizes="100vw"
              objectPosition={project.gallery.position}
              strength={5}
            />
            <p className="mt-3 text-[12px] leading-relaxed text-muted">
              {project.gallery.caption}
            </p>
          </div>
        </section>
      ) : (
        <section className="container-edge pb-20 lg:pb-28">
          <div className="border-t border-ink/15 pt-6">
            <p className="eyebrow text-muted">
              <span className="text-brass">04</span>
              <span className="mx-2 text-brass/60">/</span>
              Program
            </p>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {programPhases.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 0.07}>
                <p className="eyebrow text-brass">{phase.label}</p>
                <h2 className="display mt-3 text-[clamp(1.6rem,2.4vw,2rem)] text-ink">
                  {phase.title}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{phase.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ============ NEXT FILE ============ */}
      <section className="bg-ink text-paper">
        <Link href={`/projects/${next.slug}`} className="group block">
          <div className="container-edge py-16 lg:py-20">
            <div className="flex items-baseline justify-between gap-4 border-t border-paper/20 pt-4">
              <p className="eyebrow text-paper/45">Next field file</p>
              <p className="eyebrow text-paper/30">
                {next.index} / {String(projects.length).padStart(2, '0')}
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-6">
              <h2 className="display text-[clamp(2.4rem,6.4vw,5.4rem)] text-paper transition-colors duration-500 group-hover:text-brass-light">
                {next.title}
              </h2>
              <span className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/25 transition-colors duration-500 group-hover:border-paper group-hover:bg-paper group-hover:text-ink sm:h-16 sm:w-16">
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.25} />
              </span>
            </div>
            <p className="mt-3 text-sm text-paper/45">
              {next.location} — {next.category}
            </p>
          </div>
        </Link>
      </section>
    </article>
  );
}
