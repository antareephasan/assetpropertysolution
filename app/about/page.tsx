import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ASSET PROPERTY SOLUTION LLC is a Los Angeles property preservation and field services firm protecting assets for banks, lenders, realtors, investors and property managers nationwide.',
  alternates: { canonical: '/about/' },
};

const principles = [
  {
    title: 'Integrity',
    text: 'Transparent pricing, honest scope recommendations and no surprises. If a property does not need a service, we do not sell it.',
  },
  {
    title: 'Precision',
    text: 'Line-item accuracy on every invoice, photo-first reporting, and strict adherence to each client’s inspection standard.',
  },
  {
    title: 'Accountability',
    text: 'Every work order has a named owner — confirmation at intake, an update during dispatch and a report at close-out.',
  },
  {
    title: 'Partnership',
    text: 'We operate as an extension of the asset management team: proactive, responsive and built for the long file.',
  },
];

const clientRows = [
  {
    client: 'Banks & servicers',
    focus: 'Default servicing, REO onboarding and pre-sale condition verification.',
    order: 'Inspection · Securing · Preservation',
  },
  {
    client: 'Realtors & brokers',
    focus: 'Pre-listing clean-ups, securing and maintenance that protect presentation value.',
    order: 'Clean-out · Grounds · Repairs',
  },
  {
    client: 'Investors',
    focus: 'Occupancy checks, rehab scoping and turn-key property preparation.',
    order: 'Inspection · Scope · Rehab',
  },
  {
    client: 'Property managers',
    focus: 'Recurring maintenance, inspections and code violation remediation.',
    order: 'Recurring · Compliance',
  },
];

const regions = [
  'Southern California — base',
  'Northern California',
  'Nevada',
  'Arizona',
  'Texas',
  'Florida',
  'Nationwide vendor network',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        label="About the firm"
        titleLines={[
          'A field partner,',
          <>
            not a <span className="italic text-brass">call center</span>.
          </>,
        ]}
        description="ASSET PROPERTY SOLUTION was built for the people who carry the file: the servicer waiting on a condition report, the investor staring at a vacant unit, the manager answering a city notice."
        meta={[
          { label: 'Founded', value: '2024' },
          { label: 'Base', value: 'Los Angeles, CA' },
          { label: 'Coverage', value: 'Nationwide' },
        ]}
      />

      {/* ============ STORY ============ */}
      <section className="container-edge py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-muted">
                <span className="text-brass">01</span>
                <span className="mx-2 text-brass/60">/</span>
                The story
              </p>
              <h2 className="display mt-5 max-w-xl text-[clamp(2rem,4.2vw,3.5rem)] text-ink">
                Built to protect what matters most.
              </h2>
            </Reveal>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-muted">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.72] first-letter:text-brass">
                ASSET PROPERTY SOLUTION was founded in 2024 on a simple observation: vacant and
                distressed properties lose value quickly, and owners frequently find out too
                late. We exist to close that gap — providing banks, lenders, realtors, investors
                and property managers with a disciplined, photographic record of every property
                condition and every completed service.
              </p>
              <p>
                From our base in <span className="text-ink">Los Angeles, California</span>, we
                dispatch vetted, insured field crews across the region and support nationwide
                work orders through our service network. Whether it is a single occupancy
                inspection or a full trash-out, re-key and winterization package, the outcome is
                the same: the asset secured, the client informed, the file complete.
              </p>
              <p>
                We answer every work order within 24–48 hours and return photo documentation with
                a line-item invoice the same day the work is completed. Fast, verifiable and
                audit-ready — exactly how field services should operate.
              </p>
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 grid max-w-xl gap-6 border-t border-ink/15 pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-muted">Based</p>
                  <p className="mt-2 text-sm text-ink">Los Angeles, California</p>
                </div>
                <div>
                  <p className="eyebrow text-muted">Dispatch standard</p>
                  <p className="mt-2 text-sm text-ink">24–48 hours, documented</p>
                </div>
              </div>
              <Link href="/contact" className="btn btn-ink mt-8">
                Start a work order
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <ParallaxImage
                src="/images/house.jpg"
                alt="Craftsman property maintained by ASSET PROPERTY SOLUTION field crews"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 38vw, 100vw"
                objectPosition="center 60%"
                strength={5}
              />
              <div className="mt-2 flex items-start justify-between gap-4">
                <p className="eyebrow text-muted">Above — Los Angeles field file</p>
                <p className="eyebrow text-muted">SECURED · DOCUMENTED</p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex items-end justify-between gap-6 border-t border-ink/15 pt-5">
                <p className="display text-[clamp(3rem,6vw,5rem)] leading-none text-ink">2024</p>
                <p className="max-w-[10rem] text-[11px] leading-relaxed text-muted">
                  Founded in Los Angeles. Still operated by the same standard.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="container-edge pb-20 lg:pb-28">
        <SectionHeading
          index="02"
          eyebrow="The standard"
          title={
            <>
              Four commitments.
              <br />
              <span className="italic text-brass">No exceptions.</span>
            </>
          }
          description="These are operating rules, not values on a wall. They decide how a crew behaves on site and how the office answers the phone."
        />

        <div className="mt-12 lg:mt-16">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06}>
              <div className="grid gap-3 border-t border-ink/15 py-7 sm:grid-cols-12 sm:gap-6 sm:py-9">
                <span className="eyebrow text-brass sm:col-span-2">0{i + 1}</span>
                <h3 className="display text-[clamp(1.6rem,2.4vw,2.2rem)] text-ink sm:col-span-4">
                  {principle.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-muted sm:col-span-6">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-b border-ink/15" />
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="container-edge py-20 lg:py-28">
          <SectionHeading
            index="03"
            eyebrow="Clients"
            title={
              <>
                Built around
                <br />
                <span className="italic text-brass">the file.</span>
              </>
            }
            description="Different clients, different guidelines. The reporting standard does not change."
          />

          <div className="mt-12 border-t border-ink/15">
            <div className="hidden grid-cols-12 gap-6 border-b border-ink/15 py-3 sm:grid">
              <p className="eyebrow col-span-3 text-muted">Client</p>
              <p className="eyebrow col-span-5 text-muted">Primary focus</p>
              <p className="eyebrow col-span-4 text-muted">Typical order</p>
            </div>
            {clientRows.map((row, i) => (
              <Reveal key={row.client} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-12 sm:gap-6">
                  <h3 className="text-[15px] font-medium text-ink sm:col-span-3">{row.client}</h3>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-5">{row.focus}</p>
                  <p className="eyebrow text-brass sm:col-span-4 sm:pt-1">{row.order}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COVERAGE ============ */}
      <section className="bg-ink py-20 text-paper lg:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-paper/45">
                <span className="text-brass-light">04</span>
                <span className="mx-2 text-brass/60">/</span>
                Coverage
              </p>
              <h2 className="display mt-6 text-[clamp(2.1rem,4.2vw,3.6rem)] text-paper">
                Los Angeles
                <br />
                baseline.
                <br />
                <span className="italic text-brass-light">Nationwide reach.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">
                Our own crews cover Southern California. Beyond that, a vetted network handles
                dispatch under the same documentation and insurance requirements.
              </p>
              <p className="mt-10 font-mono text-[11px] tracking-[0.18em] text-paper/30">
                34.0522° N — 118.2437° W
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <ul className="border-t border-paper/20">
                {regions.map((region, i) => (
                  <li
                    key={region}
                    className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-4"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="eyebrow text-brass-light/70">0{i + 1}</span>
                      <span className="text-[15px] text-paper/85">{region}</span>
                    </span>
                    <span className="eyebrow text-paper/30">
                      {i < 6 ? '24–48h' : 'By assignment'}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-paper">
                  Check coverage
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="/vendor" className="btn btn-ghost-light">
                  Vendor network
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have an asset that needs attention?"
        subtitle="Talk to our team about inspections, securing, clean-outs and rehab scope for your portfolio."
        label="Portfolio enquiry"
      />
    </>
  );
}
