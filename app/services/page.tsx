import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Check, ClipboardCheck, Hammer, LockKeyhole, Leaf, Snowflake, Truck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive property preservation, inspection, securing, clean-out, winterization, lawn care, repairs and code compliance services.',
  alternates: { canonical: '/services/' },
};

const services = [
  {
    icon: ClipboardCheck,
    title: 'Property Inspections',
    intro:
      'Detailed occupancy and property condition reporting that keeps lenders and servicers informed between work orders.',
    features: [
      'Occupancy inspections (verified vs. vacant)',
      'Interior & exterior condition reports',
      'Photo documentation of all findings',
      'Mortgage & delinquency inspections',
      'Utility and meter status verification',
    ],
  },
  {
    icon: LockKeyhole,
    title: 'Securing & Lock Changes',
    intro:
      'Vacant and distressed properties secured to code, with full re-key documentation for transfer and record purposes.',
    features: [
      'Re-keys and lock box installations',
      'Padlock & hasp installations',
      'Boarding of doors, windows & openings',
      'Hazard identification & removal',
      'Securing documentation with lock codes',
    ],
  },
  {
    icon: Truck,
    title: 'Debris & Trash-Out',
    intro:
      'Full-scale interior and exterior removal of debris, personal property and hazardous materials, always documented.',
    features: [
      'Complete interior/exterior clean-outs',
      'Debris & construction hauling',
      'Personal property handling per guidelines',
      'Hazardous material identification',
      'Disposal receipts & records retained',
    ],
  },
  {
    icon: Leaf,
    title: 'Lawn & Yard Care',
    intro:
      'Scheduled and recurring grounds maintenance that keeps every collateral asset presentable and market-ready.',
    features: [
      'Recurring grass cuts (weekly / bi-weekly)',
      'Overgrowth & brush removal',
      'Tree & branch trimming',
      'Edging, blow-down & weed control',
      'Seasonal clean-up programs',
    ],
  },
  {
    icon: Snowflake,
    title: 'Winterization',
    intro:
      'Plumbing systems protected against freeze damage using documented drain-down and anti-freeze procedures.',
    features: [
      'Complete water system drain-downs',
      'Anti-freeze application to fixtures & traps',
      'Water heater & appliance draining',
      'Inspection tags & placards posted',
      'De-winterization & press testing available',
    ],
  },
  {
    icon: Hammer,
    title: 'Repairs & Rehab',
    intro:
      'Bid-supported repair and rehabilitation work executed by vetted trades to restore condition and code compliance.',
    features: [
      'Roofing, drywall & paint',
      'Mold remediation & moisture control',
      'Code violation remediation',
      'Occupancy / smoke & CO detector installs',
      'Before/after photo reporting per scope',
    ],
  },
];

const extras = [
  {
    title: 'Code Compliance Services',
    points: [
      'Violation notices received & resolved',
      'Permit pulls & inspector re-checks',
      'City / county agency coordination',
      'Compliance photo & letter documentation',
    ],
  },
  {
    title: 'Asset & Facility Maintenance',
    points: [
      'Recurring property checks & walkthroughs',
      'PM / NPN escalation coverage',
      'Utility & seasonal readiness programs',
      'Line-item scope on every invoice',
    ],
  },
];

export default function ServicesPage() {
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
            Our Services
          </p>
          <h1
            className="fade-up font-display mx-auto mt-5 max-w-3xl text-4xl font-bold text-white sm:text-5xl"
            style={{ animationDelay: '120ms' }}
          >
            Full-Spectrum <span className="text-gold-gradient">Property Preservation</span>
          </h1>
          <p
            className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body/80"
            style={{ animationDelay: '240ms' }}
          >
            Every service below is delivered with photo documentation, a line-item invoice and
            a 24–48h dispatch window. <Camera className="inline h-4 w-4 text-gold" /> Detailed scope available on request.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Service Lines"
          title="Detailed Service Breakdown"
          description="Six core service lines, each with a defined scope of work and reporting standard."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, intro, features }, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
            <article
              className="lift h-full rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-body/75">{intro}</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-body/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Additional capabilities */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {extras.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
            <div
              className="lift h-full rounded-lg border border-gold/25 bg-gradient-to-b from-gold/5 to-transparent p-8"
            >
              <h3 className="font-display text-lg font-semibold text-gold">{e.title}</h3>
              <ul className="mt-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-body/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need a custom scope or nationwide work order?"
        subtitle="Send us the details — we will confirm pricing, timeline and documentation requirements before any crew is dispatched."
      />
      <div className="bg-ink py-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
        >
          Go to Contact Form <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
