import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import ServiceNav from '@/components/ServiceNav';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Property preservation services from ASSET PROPERTY SOLUTION LLC: inspections, securing and lock changes, debris removal, grounds care, winterization, repairs and code compliance.',
  alternates: { canonical: '/services/' },
};

const services = [
  {
    slug: 'inspections',
    title: 'Property Inspections',
    intro:
      'Occupancy and condition reporting that keeps lenders and servicers current between work orders.',
    detail:
      'Inspections follow the client’s checklist, not a generic template. Every visit captures occupancy, visible damage, utility status and safety hazards, with frames indexed to the room or elevation they describe.',
    features: [
      'Occupancy inspections, occupied vs. vacant',
      'Interior and exterior condition reports',
      'Mortgage and delinquency inspections',
      'Utility and meter status verification',
      'Photo documentation of all findings',
    ],
  },
  {
    slug: 'securing',
    title: 'Securing & Lock Changes',
    intro:
      'Vacant properties secured to code, with re-key documentation that stands up to transfer and review.',
    detail:
      'Securing is treated as a chain-of-custody exercise. Lock codes are recorded, keys are accounted for, and every opening is photographed before and after the work is completed.',
    features: [
      'Re-keys and lockbox installation',
      'Padlock and hasp installation',
      'Boarding of doors, windows and openings',
      'Hazard identification and removal',
      'Securing report with recorded lock codes',
    ],
  },
  {
    slug: 'trash-out',
    title: 'Debris & Trash-Out',
    intro:
      'Full interior and exterior clear-outs of debris, personal property and hazardous material — documented throughout.',
    detail:
      'Personal property is handled to the governing guideline, not simply hauled. Disposal is receipted, hazardous items are separated, and the property is photographed empty so the next vendor starts from a clean record.',
    features: [
      'Complete interior and exterior clean-outs',
      'Debris and construction hauling',
      'Personal property handling per guidelines',
      'Hazardous material identification',
      'Disposal receipts and records retained',
    ],
  },
  {
    slug: 'grounds',
    title: 'Lawn & Grounds Care',
    intro:
      'Scheduled grounds maintenance that keeps every collateral asset presentable and compliant.',
    detail:
      'Grounds work is scheduled against the asset’s exposure, not a single cut. Overgrowth, sidewalk clearance and seasonal regrowth are tracked over time so the property is never photographed out of compliance.',
    features: [
      'Recurring cuts, weekly or bi-weekly',
      'Overgrowth and brush removal',
      'Tree and branch trimming',
      'Edging, blow-down and weed control',
      'Seasonal clean-up programs',
    ],
  },
  {
    slug: 'winterization',
    title: 'Winterization',
    intro:
      'Plumbing protected against freeze damage using documented drain-down and anti-freeze procedures.',
    detail:
      'Systems are drained, fixtures and traps are treated, and tags are posted at the point of service. De-winterization and press testing are available when the asset returns to market.',
    features: [
      'Complete water system drain-downs',
      'Anti-freeze application to fixtures and traps',
      'Water heater and appliance draining',
      'Inspection tags and placards posted',
      'De-winterization and press testing',
    ],
  },
  {
    slug: 'repairs',
    title: 'Repairs & Rehab',
    intro:
      'Bid-supported repair and rehabilitation executed by vetted trades, sequenced around the asset’s timeline.',
    detail:
      'Repairs are scoped and priced line by line before work begins. Trades are sequenced so the property is never left open overnight, and each stage is photographed for the close-out package.',
    features: [
      'Roofing, drywall and paint',
      'Mold remediation and moisture control',
      'Code violation remediation',
      'Smoke and CO detector installation',
      'Before-and-after reporting per scope',
    ],
  },
];

const extras = [
  {
    title: 'Code Compliance',
    intro:
      'Violation notices received, scoped and resolved with the issuing agency — including re-inspection.',
    points: [
      'Violation notices logged and resolved',
      'Permit pulls and inspector re-checks',
      'City and county agency coordination',
      'Compliance photo and letter records',
    ],
  },
  {
    title: 'Asset Maintenance',
    intro:
      'Recurring checks and upkeep for portfolios that need a steady field presence rather than one-off orders.',
    points: [
      'Recurring property checks and walkthroughs',
      'PM and NPN escalation coverage',
      'Utility and seasonal readiness programs',
      'Line-item scope on every invoice',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Capabilities"
        titleLines={[
          'Six disciplines.',
          <>
            One <span className="italic text-brass">standard</span>.
          </>,
        ]}
        description="Every order is delivered with photo documentation, a line-item invoice and a confirmed dispatch window. The service changes; the reporting does not."
        meta={[
          { label: 'Dispatch', value: '24–48 hours' },
          { label: 'Reporting', value: 'Same day close-out' },
          { label: 'Coverage', value: 'Nationwide' },
        ]}
      />

      {/* ============ IMAGE BREAK ============ */}
      <section className="container-edge pb-16 lg:pb-24">
        <Reveal>
          <ParallaxImage
            src="/images/hero-office.jpg"
            alt="Commercial property maintained under a recurring field services program"
            className="aspect-[16/10] w-full sm:aspect-[21/9]"
            sizes="100vw"
            objectPosition="center 60%"
            strength={5}
          />
          <div className="mt-2 flex items-start justify-between gap-4">
            <p className="eyebrow text-muted">
              Above — Recurring perimeter program, South Los Angeles
            </p>
            <p className="eyebrow hidden text-muted sm:block">FIELD FILE 03</p>
          </div>
        </Reveal>
      </section>

      {/* ============ SERVICE DETAIL ============ */}
      <section className="container-edge pb-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow mb-4 text-muted">Service index</p>
                <ServiceNav items={services.map(({ slug, title }) => ({ slug, title }))} />
                <div className="mt-8 border-t border-ink/15 pt-5">
                  <p className="text-[12px] leading-relaxed text-muted">
                    Work is priced from the order, not a rate card. Scope changes are
                    documented and approved before proceeding.
                  </p>
                  <Link
                    href="/contact"
                    className="link-underline mt-4 inline-flex items-center gap-1.5 text-[13px] text-ink"
                  >
                    Request a quote
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {services.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 border-t border-ink/15 py-10 first:border-t-0 first:pt-0 lg:py-14"
              >
                <div className="grid gap-8 sm:grid-cols-12 sm:gap-6">
                  <div className="sm:col-span-5">
                    <p className="eyebrow text-brass">0{i + 1}</p>
                    <h2 className="display mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                      {service.intro}
                    </p>
                  </div>

                  <div className="sm:col-span-7">
                    <p className="text-[15px] leading-relaxed text-ink/75">{service.detail}</p>
                    <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 border-t border-ink/10 py-3 text-[13px] leading-relaxed text-ink/75"
                        >
                          <span className="mt-0.5 font-mono text-[10px] text-brass">+</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ADDITIONAL CAPABILITIES ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="container-edge py-20 lg:py-28">
          <SectionHeading
            index="03"
            eyebrow="Beyond the six"
            title={
              <>
                Compliance and
                <br />
                <span className="italic text-brass">steady presence.</span>
              </>
            }
            description="Two further programs for assets that need ongoing management rather than a single order."
          />

          <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-2 lg:gap-16">
            {extras.map((extra, i) => (
              <Reveal key={extra.title} delay={i * 0.08}>
                <p className="eyebrow text-brass">0{i + 1}</p>
                <h3 className="display mt-4 text-[clamp(1.7rem,2.8vw,2.2rem)] text-ink">
                  {extra.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{extra.intro}</p>
                <ul className="mt-7">
                  {extra.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-ink/10 py-3 text-[13px] text-ink/75"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a scope priced?"
        subtitle="Send the property address and the requirement. We confirm pricing, timeline and documentation standards before any crew is dispatched."
        label="Scope request"
      />
    </>
  );
}
