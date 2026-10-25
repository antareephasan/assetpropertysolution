import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ClipboardCheck,
  ClipboardList,
  Hammer,
  Home,
  Leaf,
  LockKeyhole,
  Send,
  ShieldCheck,
  Snowflake,
  Truck,
  UserCheck,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import Reveal from '@/components/Reveal';

const stats = [
  { icon: Home, title: 'Professional Field Services', sub: 'Residential & commercial assets' },
  { icon: BadgeCheck, title: '24–48h Average Turnaround', sub: 'From work order to completion' },
  { icon: Camera, title: '100% Photo-Documented', sub: 'Every visit, fully reported' },
  { icon: ShieldCheck, title: 'Licensed, Insured & Bonded', sub: 'Full compliance coverage' },
];

const services = [
  {
    icon: ClipboardCheck,
    title: 'Property Inspections',
    text: 'Occupancy checks, interior/exterior condition reports and full documentation delivered to client standards.',
  },
  {
    icon: LockKeyhole,
    title: 'Securing & Lock Changes',
    text: 'Re-keys, padlocks, boarding and hazard removal to bring vacant properties to code-compliant security.',
  },
  {
    icon: Truck,
    title: 'Debris & Trash-Out',
    text: 'Full interior/exterior clean-outs and hauling with disposal records and before/after photo documentation.',
  },
  {
    icon: Leaf,
    title: 'Lawn & Yard Care',
    text: 'Recurring cuts, overgrowth removal, tree/branch trimming and seasonal maintenance to preserve curb value.',
  },
  {
    icon: Snowflake,
    title: 'Winterization',
    text: 'Complete plumbing drain-downs, anti-freeze application and winterization protects against seasonal damage.',
  },
  {
    icon: Hammer,
    title: 'Repairs & Rehab',
    text: 'Roofing, drywall, paint, mold remediation and code violation remediation handled by vetted trade crews.',
  },
];

const process = [
  {
    step: '01',
    icon: Send,
    title: 'Send Work Order',
    text: 'Submit by phone call, email (info@assetproperty.net) or our online form — same-day intake confirmation.',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Crew Dispatched',
    text: 'A vetted, insured field crew is on-site within 24–48 hours, nationwide coverage across Los Angeles.',
  },
  {
    step: '03',
    icon: ClipboardList,
    title: 'Full Report Delivered',
    text: 'Photo documentation and a line-item invoice are delivered the same day the work is completed.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Full-bleed photo background */}
        <Image
          src="/images/hero-sunset.jpg"
          alt="Craftsman style home with glowing windows at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Left-weighted ink wash so the headline column stays crisp */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/10"
        />
        {/* Top + bottom fades to merge the photo into the page */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30"
        />
        <div className="grid-overlay absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="glow-pulse absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-3xl">
            <span
              className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold"
            >
              LOS ANGELES, CA — NATIONWIDE SERVICE
            </span>
            <h1
              className="fade-up font-display mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '120ms' }}
            >
              Protecting Properties.{' '}
              <span className="text-gold-gradient">Preserving Value.</span>
            </h1>
            <p
              className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-body/80 sm:text-lg"
              style={{ animationDelay: '240ms' }}
            >
              ASSET PROPERTY SOLUTION LLC delivers reliable property preservation and field
              services for banks, lenders, realtors, investors and property managers —
              from first inspection to finished report, every asset is secured, cleaned
              and documented to the highest standard.
            </p>
            <div
              className="fade-up mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '360ms' }}
            >
              <Link
                href="/contact"
                className="shadow-glow inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/40 px-8 py-4 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGES / STATS ============ */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, title, sub }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div
                className="flex items-start gap-4 border-b border-line px-6 py-8 sm:border-b-0 sm:px-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-body/60">{sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CORE SERVICES ============ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Core Property Preservation Services"
          description="Six service lines covering every stage of the asset lifecycle — each job photo-documented and invoiced line-by-line."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div
                className="lift group relative h-full rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-glow"
              >
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/30 bg-gold/10 transition-colors group-hover:bg-gold/20">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <h3 className="font-display mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body/75">{text}</p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold opacity-80 transition-opacity hover:opacity-100"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Work Order to Final Report in 3 Steps"
            description="A streamlined workflow built for lenders and asset managers who need speed and documentation."
          />
          <div className="relative mt-16 grid gap-10 lg:grid-cols-3">
            {/* connecting line (desktop) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block"
            />
            {process.map(({ step, icon: Icon, title, text }, i) => (
              <Reveal key={step} delay={i * 120} className="relative text-center">
                <div className="flex items-center justify-center gap-4 lg:justify-center">
                  <span className="shadow-glow relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink">
                    <Icon className="h-6 w-6 text-gold" />
                  </span>
                  <span className="font-display text-4xl font-bold text-gold/20 lg:hidden">
                    {step}
                  </span>
                </div>
                <p className="font-display mt-6 text-xs font-semibold tracking-[0.3em] text-gold">
                  STEP {i + 1}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold text-white">{title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-body/75">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
