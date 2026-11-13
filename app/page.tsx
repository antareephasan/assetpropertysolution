import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MaskLines from '@/components/motion/MaskLines';
import RevealWords from '@/components/motion/RevealWords';
import ParallaxImage from '@/components/motion/ParallaxImage';
import Marquee from '@/components/motion/Marquee';
import Magnetic from '@/components/motion/Magnetic';
import CountUp from '@/components/motion/CountUp';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceIndex, { type ServiceRow } from '@/components/ServiceIndex';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/components/CTABanner';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const services: ServiceRow[] = [
  {
    slug: 'inspections',
    title: 'Property Inspections',
    description: 'Occupancy, condition and utility verification — photographed and reported to client guidelines.',
    image: '/images/house.jpg',
    position: 'center 40%',
  },
  {
    slug: 'securing',
    title: 'Securing & Locks',
    description: 'Re-keys, lockboxes, boarding and hazard removal to bring a vacant asset back to code.',
    image: '/images/hero-sunset.jpg',
    position: 'center 60%',
  },
  {
    slug: 'trash-out',
    title: 'Debris & Trash-Out',
    description: 'Full interior and exterior clear-outs with disposal records and before-and-after frames.',
    image: '/images/hero-office.jpg',
    position: 'center 65%',
  },
  {
    slug: 'grounds',
    title: 'Lawn & Grounds',
    description: 'Recurring cuts, overgrowth removal and seasonal maintenance that protects curb value.',
    image: '/images/hero-sunset.jpg',
    position: 'center 80%',
  },
  {
    slug: 'winterization',
    title: 'Winterization',
    description: 'Documented drain-downs, anti-freeze application and tagged systems ahead of freeze season.',
    image: '/images/house.jpg',
    position: 'center 70%',
  },
  {
    slug: 'repairs',
    title: 'Repairs & Rehab',
    description: 'Bid-supported trade work and code corrections, sequenced and reported line by line.',
    image: '/images/hero-office.jpg',
    position: 'center 30%',
  },
];

const metrics = [
  { value: '24–48h', label: 'Dispatch window', note: 'From confirmed work order' },
  { count: 100, suffix: '%', label: 'Photo documented', note: 'Every visit, every scope' },
  { count: 6, label: 'Service lines', note: 'One coordinated file' },
  { count: 1, label: 'Point of contact', note: 'Intake through close-out' },
];

const processSteps = [
  {
    title: 'Intake',
    text: 'Send the address, the scope and any client guidelines. We confirm receipt the same day and flag what is missing before a crew is assigned.',
    meta: 'Same-day confirmation',
  },
  {
    title: 'Dispatch',
    text: 'A vetted, insured crew is assigned inside the dispatch window. Access details, lock codes and site hazards are verified in advance.',
    meta: '24–48 hours on site',
  },
  {
    title: 'Close-out',
    text: 'The photo set, line-item invoice and completion notes are delivered the day the work closes — one file, ready for review or audit.',
    meta: 'Reporting same day',
  },
];

const clients = [
  { label: 'Banks & servicers', note: 'Default servicing, REO and pre-sale verification.' },
  { label: 'Realtors & brokers', note: 'Presentation, securing and pre-listing preparation.' },
  { label: 'Investors', note: 'Scope development, rehab oversight and turns.' },
  { label: 'Property managers', note: 'Recurring checks, maintenance and code response.' },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-40">
        <div className="container-edge">
          <div className="rule-label">
            <p className="eyebrow text-ink">
              <span className="text-brass">00</span>
              <span className="mx-2 text-brass/60">/</span>
              Property preservation & field services
            </p>
            <p className="eyebrow hidden text-muted sm:block">LOS ANGELES — NATIONWIDE</p>
          </div>

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <MaskLines
                as="h1"
                lines={[
                  'Property,',
                  'held to a',
                  <>
                    <span className="italic text-brass">higher</span> standard.
                  </>,
                ]}
                stagger={0.1}
                delay={0.15}
                className="display text-[clamp(3.1rem,7.4vw,7rem)] text-ink"
              />

              <div className="mt-10 grid gap-8 sm:grid-cols-12 sm:items-end lg:mt-12">
                <div className="sm:col-span-7">
                  <Reveal delay={0.55}>
                    <p className="max-w-md text-[15px] leading-relaxed text-muted">
                      ASSET PROPERTY SOLUTION is a Los Angeles field-services firm protecting
                      vacant and distressed assets for lenders, servicers, investors and
                      property managers — inspected, secured and documented to the last
                      detail.
                    </p>
                  </Reveal>
                  <Reveal delay={0.68}>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Magnetic>
                        <Link href="/contact" className="btn btn-ink">
                          Start a work order
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </Link>
                      </Magnetic>
                      <Link href="/projects" className="btn btn-outline">
                        View field files
                      </Link>
                    </div>
                  </Reveal>
                </div>

                <div className="hidden sm:col-span-5 sm:block">
                  <Reveal delay={0.8}>
                    <dl className="border-t border-ink/15">
                      <div className="flex justify-between gap-4 border-b border-ink/10 py-2.5">
                        <dt className="eyebrow text-muted">Based</dt>
                        <dd className="text-[13px]">Los Angeles, CA</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-ink/10 py-2.5">
                        <dt className="eyebrow text-muted">Coverage</dt>
                        <dd className="text-[13px]">Nationwide</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-ink/10 py-2.5">
                        <dt className="eyebrow text-muted">Established</dt>
                        <dd className="text-[13px]">2024</dd>
                      </div>
                    </dl>
                  </Reveal>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:-mr-6 xl:-mr-14">
                <ParallaxImage
                  src="/images/hero-sunset.jpg"
                  alt="Craftsman home with lit windows at dusk, secured and maintained"
                  className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                  strength={5}
                />
                <div className="mt-2 flex items-start justify-between gap-4">
                  <p className="eyebrow text-muted">
                    Above — Field file 01 / Pasadena, CA
                  </p>
                  <p className="eyebrow hidden text-muted sm:block">SECURED · DOCUMENTED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ METRICS ============ */}
      <section className="border-y border-ink/15">
        <div className="container-edge grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.08}
              className={`py-7 sm:py-8 ${
                i % 2 === 1 ? 'border-l border-ink/15 pl-5 sm:pl-6' : 'pr-5 sm:pr-6'
              } ${i > 1 ? 'border-t border-ink/15 lg:border-t-0' : ''} ${
                i === 2 ? 'lg:border-l lg:border-ink/15 lg:pl-6' : ''
              } ${i === 3 ? 'lg:border-l lg:border-ink/15 lg:pl-6' : ''}`}
            >
              <p className="display text-[clamp(1.9rem,3.2vw,2.8rem)] text-ink">
                {metric.count ? (
                  <CountUp value={metric.count} suffix={metric.suffix ?? ''} />
                ) : (
                  metric.value
                )}
              </p>
              <p className="eyebrow mt-2.5 text-ink">{metric.label}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{metric.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICE TICKER ============ */}
      <section className="border-b border-ink bg-ink py-4 text-paper sm:py-5">
        <Marquee
          items={[
            'Inspections',
            'Securing',
            'Trash-out',
            'Grounds',
            'Winterization',
            'Repairs',
          ]}
          itemClassName="display text-[clamp(1.15rem,2.1vw,1.9rem)] text-paper/85"
          srLabel="Capabilities: inspections, securing, trash-out, grounds, winterization, repairs"
        />
      </section>

      {/* ============ PREMISE ============ */}
      <section className="container-edge py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow text-muted">
                <span className="text-brass">01</span>
                <span className="mx-2 text-brass/60">/</span>
                The premise
              </p>
              <p className="mt-6 max-w-[17rem] text-sm leading-relaxed text-muted">
                A vacant property changes condition faster than any file updates. We exist to
                close that gap.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <RevealWords
              text="Every day a property sits unsecured, the asset loses value — and the file falls further behind. We make sure that never happens quietly."
              className="display max-w-4xl text-[clamp(1.85rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.02em] text-ink"
            />

            <div className="mt-14 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal delay={0.05}>
                <p className="text-sm leading-relaxed text-muted">
                  Founded in Los Angeles in 2024, ASSET PROPERTY SOLUTION gives lenders,
                  servicers and property managers a field partner that reports like an
                  operator, not a vendor. One point of contact, one standard, every market.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-sm leading-relaxed text-muted">
                  Crews are vetted and insured. Work is photographed before, during and after.
                  Invoices are line-item and delivered with the photo set on the day the work
                  closes.
                </p>
              </Reveal>
              <Reveal delay={0.19}>
                <div className="border-t border-ink/15 pt-4 sm:border-t-0 sm:pt-0">
                  <p className="eyebrow text-muted">The measure</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    Documented. Invoiced. Closed.
                    <br />
                    Every visit, without exception.
                  </p>
                  <Link
                    href="/about"
                    className="link-underline mt-6 inline-flex items-center gap-1.5 text-[13px] text-ink"
                  >
                    Read the standard
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="container-edge pb-24 lg:pb-32">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title={
            <>
              Six disciplines.
              <br />
              <span className="italic text-brass">One standard.</span>
            </>
          }
          description="Every service line shares the same reporting discipline: scope confirmed in writing, work photographed, invoice itemised."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9">
            <ServiceIndex services={services} />
          </div>
          <aside className="lg:col-span-3 lg:pl-6">
            <Reveal delay={0.15}>
              <p className="eyebrow text-muted">Scope notes</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Work is priced from the order, not from a rate card. If a scope changes on
                site, we stop, document and request approval before proceeding.
              </p>
              <Link
                href="/services"
                className="link-underline mt-6 inline-flex items-center gap-1.5 text-[13px] text-ink"
              >
                Full capabilities
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="bg-ink py-24 text-paper lg:py-32">
        <div className="container-edge">
          <SectionHeading
            tone="paper"
            index="03"
            eyebrow="Field files"
            title={
              <>
                Selected work,
                <br />
                <span className="italic text-brass-light">documented.</span>
              </>
            }
            description="Anonymised field files from recent work orders. Client names are withheld by agreement; photo sets and documentation are available under NDA."
          />

          <div className="mt-14 grid gap-x-8 gap-y-14 lg:mt-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProjectCard
                project={projects[0]}
                tone="paper"
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
              />
            </div>
            <div className="lg:col-span-5 lg:mt-24">
              <ProjectCard
                project={projects[1]}
                tone="paper"
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-paper/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="eyebrow text-paper/40">Client names withheld by agreement</p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[13px] text-paper"
            >
              All field files
              <span className="text-paper/40">(04)</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="container-edge py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow text-muted">
                  <span className="text-brass">04</span>
                  <span className="mx-2 text-brass/60">/</span>
                  Process
                </p>
                <h2 className="display mt-6 text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink">
                  Three steps.
                  <br />
                  <span className="italic text-brass">No gaps.</span>
                </h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                  A work order moves through the same path every time — with a named owner at
                  each stage and a written record at the end.
                </p>
                <Link href="/contact" className="btn btn-outline mt-8">
                  Send a work order
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="grid gap-3 border-t border-ink/15 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
                  <span className="eyebrow text-brass sm:col-span-2">0{i + 1}</span>
                  <h3 className="display text-[clamp(1.6rem,2.4vw,2.1rem)] text-ink sm:col-span-4">
                    {step.title}
                  </h3>
                  <div className="sm:col-span-6">
                    <p className="max-w-md text-sm leading-relaxed text-muted">{step.text}</p>
                    <p className="eyebrow mt-5 text-ink/40">{step.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-b border-ink/15" />
          </div>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/60">
        <div className="container-edge grid gap-10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-3">
            <p className="eyebrow text-muted">
              <span className="text-brass">05</span>
              <span className="mx-2 text-brass/60">/</span>
              Who we serve
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4">
            {clients.map((client, i) => (
              <Reveal key={client.label} delay={i * 0.07}>
                <p className="eyebrow text-brass">0{i + 1}</p>
                <h3 className="mt-3 text-[15px] font-medium text-ink">{client.label}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{client.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
