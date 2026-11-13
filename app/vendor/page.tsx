import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ParallaxImage from '@/components/motion/ParallaxImage';

export const metadata: Metadata = {
  title: 'Vendor Network',
  description:
    'Join the ASSET PROPERTY SOLUTION LLC vendor network — independent field contractors for inspections, securing, trash-outs, grounds, winterization and repairs.',
  alternates: { canonical: '/vendor/' },
};

const benefits = [
  {
    title: 'Direct coordination',
    text: 'One network manager who knows the order, the property and the client guideline. No ticket queue, no anonymous dispatch.',
  },
  {
    title: 'Scope in writing',
    text: 'Every assignment arrives with a defined scope, access notes and a documentation requirement. Changes are approved, not assumed.',
  },
  {
    title: 'Steady field volume',
    text: 'Recurring work from servicers, asset managers and investors across inspections, preservation and repair programs.',
  },
  {
    title: 'Clean invoicing',
    text: 'Line-item invoicing matched to the approved scope, with photo documentation attached as part of the close-out.',
  },
];

const baseline = [
  'General liability insurance, current COI',
  'Business licence and W-9',
  'Trade licences required in your state',
  'Reliable vehicle, trailer and equipment',
  'Smartphone for indexed photo upload',
  '24–48 hour completion standard',
];

const territories = [
  'Los Angeles County',
  'Southern California',
  'Central & Northern California',
  'Nevada',
  'Arizona',
  'Texas',
  'Florida',
  'Multi-state crews',
];

export default function VendorPage() {
  return (
    <>
      <PageHero
        index="04"
        label="Vendor network"
        titleLines={[
          'Crews, not',
          <>
            call <span className="italic text-brass">centres</span>.
          </>,
        ]}
        description="ASSET PROPERTY SOLUTION works with independent field contractors who treat documentation as part of the job. If you hold your territory and close your orders, we will keep the file full."
        meta={[
          { label: 'Network', value: 'Nationwide' },
          { label: 'Review', value: '5 business days' },
          { label: 'Standard', value: 'Documented close-out' },
        ]}
      />

      {/* ============ WHY PARTNER ============ */}
      <section className="container-edge pb-20 lg:pb-28">
        <div className="grid gap-12 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-muted">
                <span className="text-brass">01</span>
                <span className="mx-2 text-brass/60">/</span>
                The partnership
              </p>
              <h2 className="display mt-5 max-w-lg text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
                A network built on
                <br />
                <span className="italic text-brass">follow-through.</span>
              </h2>
            </Reveal>

            <div className="mt-10">
              {benefits.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 0.06}>
                  <div className="grid gap-3 border-t border-ink/15 py-6 sm:grid-cols-12 sm:gap-6">
                    <span className="eyebrow text-brass sm:col-span-2">0{i + 1}</span>
                    <h3 className="text-[15px] font-medium text-ink sm:col-span-4">
                      {benefit.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted sm:col-span-6">
                      {benefit.text}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-b border-ink/15" />
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-ink">
                  Apply to the network
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <p className="text-[12px] text-muted">Review within five business days.</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <ParallaxImage
                src="/images/hero-office.jpg"
                alt="Commercial property maintained by a field vendor crew"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 38vw, 100vw"
                objectPosition="center 55%"
                strength={5}
              />
              <div className="mt-2 flex items-start justify-between gap-4">
                <p className="eyebrow text-muted">Above — Perimeter program, Los Angeles</p>
                <p className="eyebrow text-muted">FIELD FILE 03</p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 border-t border-ink/15 pt-5">
                <p className="eyebrow text-muted">Out of scope</p>
                <p className="mt-3 text-[12px] leading-relaxed text-muted">
                  This is not a staffing agency or a job board. Applications are for established,
                  insured businesses ready to accept field orders as independent contractors.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BASELINE ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="container-edge py-20 lg:py-24">
          <SectionHeading
            index="02"
            eyebrow="Baseline"
            title="What we require."
            description="The same standard applies to every trade and territory. Full requirements and the application are on the vendor application page."
          />

          <div className="mt-10 grid gap-x-10 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {baseline.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 0.05}>
                <div className="flex items-start gap-3 border-b border-ink/10 py-4 text-[13px] leading-relaxed text-ink/75">
                  <span className="mt-0.5 font-mono text-[10px] text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/apply"
              className="link-underline mt-8 inline-flex items-center gap-1.5 text-[13px] text-ink"
            >
              Full requirements, FAQ and application
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ TERRITORIES ============ */}
      <section className="bg-ink py-20 text-paper lg:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-paper/45">
                <span className="text-brass-light">03</span>
                <span className="mx-2 text-brass/60">/</span>
                Coverage
              </p>
              <h2 className="display mt-6 text-[clamp(2.1rem,4.2vw,3.6rem)] text-paper">
                Where we
                <br />
                need crews.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">
                Our own teams cover Southern California. Outside that footprint we activate
                vetted vendors by territory and trade, under the same documentation standard.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="border-t border-paper/20">
                {territories.map((territory, i) => (
                  <li
                    key={territory}
                    className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-4"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="eyebrow text-brass-light/70">0{i + 1}</span>
                      <span className="text-[15px] text-paper/85">{territory}</span>
                    </span>
                    <span className="eyebrow text-paper/30">Open</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/apply" className="btn btn-paper">
                  Open application
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="mailto:info@assetproperty.net?subject=Vendor%20network%20enquiry"
                  className="btn btn-ghost-light"
                >
                  Ask a question
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="container-edge py-20 lg:py-24">
        <div className="grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-muted">
              <span className="text-brass">04</span>
              <span className="mx-2 text-brass/60">/</span>
              Next step
            </p>
            <h2 className="display mt-5 text-[clamp(2.3rem,5vw,4.4rem)] text-ink">
              Apply to the network.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Three steps, reviewed by a person. If your trade and territory fit, onboarding
              usually completes within two weeks.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Link href="/apply" className="btn btn-ink w-full justify-between sm:w-auto">
              Start application
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <a
              href="mailto:info@assetproperty.net"
              className="btn btn-outline w-full justify-between sm:w-auto"
            >
              info@assetproperty.net
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
