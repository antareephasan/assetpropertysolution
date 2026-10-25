import type { Metadata } from 'next';
import { Check, ClipboardList, DollarSign, MapPinned, Network, Wallet } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import VendorApplicationForm from '@/components/VendorApplicationForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Vendor Network',
  description:
    'Join the ASSET PROPERTY SOLUTION LLC vendor network — apply as a field contractor for inspections, securing, trash-outs, lawn care and rehab work.',
};

const benefits = [
  {
    icon: ClipboardList,
    title: 'Consistent Work Orders',
    text: 'Recurring assignments from lenders, servicers and asset managers — including after-hours and rush dispatch.',
  },
  {
    icon: Wallet,
    title: 'Fast, Predictable Pay',
    text: 'Line-item pricing on approved scopes, with clear invoicing timelines and photo-debit support.',
  },
  {
    icon: Network,
    title: 'National Network Support',
    text: 'Back-office coordination,guideline references and escalation help whenever you are on-site.',
  },
  {
    icon: MapPinned,
    title: 'Coverage Flexibility',
    text: 'Serve your own territory — urban, suburban or rural — at the volume it fits your crew size.',
  },
];

const requirements = [
  'General liability insurance (GL certificate required)',
  'Valid business license & W-9',
  'Any trade licenses required in your state',
  'Reliable truck/trailer and crew equipment',
  'Smartphone for photo upload & completion bid',
  'Ability to complete work orders within 24–48h',
];

export default function VendorPage() {
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
            Vendor Network
          </p>
          <h1
            className="fade-up font-display mx-auto mt-5 max-w-3xl text-4xl font-bold text-white sm:text-5xl"
            style={{ animationDelay: '120ms' }}
          >
            Join Our Nationwide <span className="text-gold-gradient">Field Vendor Network</span>
          </h1>
          <p
            className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body/80"
            style={{ animationDelay: '240ms' }}
          >
            ASSET PROPERTY SOLUTION LLC is actively recruiting licensed, insured field
            contractors across the country. Complete the application below and our network
            managers will begin onboarding your company.
          </p>
        </div>
      </section>

      {/* Benefits & requirements */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="Built for Contractors, Backed by Process"
          description="We handle client communication, compliance paperwork and photo-debit disputes so crews can stay focused on completing orders."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
            <div
              className="lift flex h-full gap-5 rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/75">{text}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Requirements */}
        <Reveal delay={100}>
        <div className="mt-12 rounded-lg border border-gold/25 bg-gradient-to-b from-gold/5 to-transparent p-8 sm:p-10">
          <h3 className="font-display text-xl font-semibold text-gold">
            Vendor Onboarding Requirements
          </h3>
          <p className="mt-3 text-sm text-body/70">
            Have these ready before applying — it lets our team approve your application in
            days, not weeks.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm text-body/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
      </section>

      {/* Application form */}
      <section
        id="apply"
        className="border-y border-line bg-surface/50 scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Contractor Application
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
              Apply to the Network
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-body/70">
              All fields marked * are required. Applications are reviewed on a rolling basis
              by our network managers.
            </p>
          </div>
          <VendorApplicationForm />
        </div>
      </section>

      <CTABanner
        title="Already an approved vendor with an open order?"
        subtitle="Email info@assetproperty.net with your order number and property address — our coordinator will respond within one business day."
      />
    </>
  );
}
