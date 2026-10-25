import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Eye, Handshake, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ASSET PROPERTY SOLUTION LLC protects real estate assets for banks, lenders, realtors, investors and property managers from Los Angeles and nationwide.',
  alternates: { canonical: '/about/' },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Transparent pricing, honest scope recommendations and zero surprises. If a property does not need a service, we do not sell it.',
  },
  {
    icon: Eye,
    title: 'Precision',
    text: 'Line-item accuracy on every invoice, photo-first reporting and strict adherence to each client\u2019s inspection standards.',
  },
  {
    icon: Compass,
    title: 'Accountability',
    text: 'Every work order has an owner. Confirmation on intake, updates during dispatch and same-day completion reporting.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    text: 'We operate as an extension of our clients\u2019 asset management teams — proactive, responsive and built for the long term.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-overlay absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="glow-pulse absolute -top-24 left-1/2 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="fade-up text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            About ASSET PROPERTY SOLUTION LLC
          </p>
          <h1
            className="fade-up font-display mx-auto mt-5 max-w-3xl text-4xl font-bold text-white sm:text-5xl"
            style={{ animationDelay: '120ms' }}
          >
            Trusted Stewards of <span className="text-gold-gradient">Real Estate Assets</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Built to Protect What Matters Most"
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-body/80 sm:text-base">
              <p>
                ASSET PROPERTY SOLUTION LLC was founded in 2024 on a simple observation: vacant and
                distressed properties lose value quickly, and owners frequently find out too
                late. We exist to close that gap — providing banks, lenders, realtors,
                investors and property managers with a disciplined, photographic record of
                every property condition and every completed service.
              </p>
              <p>
                From our base in{' '}
                <span className="font-semibold text-gold">Los Angeles, California</span>, we
                dispatch vetted, insured field crews across the region and support nationwide
                work orders through our service network. Whether it is a single occupancy
                inspection or a full trash-out, re-key and winterization package, the outcome
                is always the same: the asset secured, the client informed, the file complete.
              </p>
              <p>
                We answer every work order within 24–48 hours and return photo documentation
                with a line-item invoice the same day the work is completed. Fast, verifiable,
                and              audit-ready — exactly how field services should operate.
              </p>
            </div>

            {/* Editorial framed photo */}
            <div className="relative mt-12 max-w-xl">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 h-full w-full rounded-lg border border-gold/40"
              />
              <Image
                src="/images/house.jpg"
                alt="Suburban property maintained by ASSET PROPERTY SOLUTION field crews"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="relative rounded-lg border border-line object-cover"
              />
              <div
                aria-hidden
                className="absolute bottom-4 left-4 rounded-md border border-gold/30 bg-ink/80 px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-gold backdrop-blur-sm"
              >
                SECURED & DOCUMENTED — LOS ANGELES, CA
              </div>
            </div>

            <Link
              href="/contact"
              className="shadow-glow mt-10 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Start a Work Order <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </Reveal>

          {/* Who we serve */}
          <Reveal delay={120}>
          <div className="rounded-lg border border-line bg-surface p-8 sm:p-10">
            <h3 className="font-display text-xl font-semibold text-white">Who We Serve</h3>
            <ul className="mt-8 space-y-6">
              {[
                { title: 'Banks & Lending Institutions', text: 'Default servicing, REO onboarding and pre-sale condition verification.' },
                { title: 'Realtors & Brokers', text: 'Pre-listing clean-ups, securing and maintenance that maximize presentation value.' },
                { title: 'Investors', text: 'Occupancy checks, rehab scoping and turn-key property preparation.' },
                { title: 'Property Managers', text: 'Recurring maintenance, inspections and code violation remediation.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 border-b border-line pb-6 last:border-0 last:pb-0">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-body/70">{item.text}</p>
                  </div>
                </li>
              ))}              </ul>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Principles"
            title="Core Values That Drive Every Site Visit"
            description="Four commitments shape how our crews operate in the field and how our office communicates with clients."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 90}>
              <div
                className="lift h-full rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-glow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/30 bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/75">{text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have an asset that needs attention?"
        subtitle="Talk to our team about inspections, securing, clean-outs and rehab scope for your portfolio."
      />
    </>
  );
}
