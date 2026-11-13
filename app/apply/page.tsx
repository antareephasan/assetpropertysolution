import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import VendorApplicationForm from '@/components/VendorApplicationForm';

export const metadata: Metadata = {
  title: 'Vendor Application',
  description:
    'Apply to the ASSET PROPERTY SOLUTION LLC field vendor network. Independent contractors in inspections, securing, trash-outs, grounds, winterization and repairs — nationwide.',
  alternates: { canonical: '/apply/' },
};

const baseline = [
  {
    title: 'General liability insurance',
    text: 'A current COI naming the company, with limits appropriate to the trade.',
  },
  {
    title: 'Business licence & W-9',
    text: 'Current business registration and a completed W-9 for onboarding.',
  },
  {
    title: 'Trade licences',
    text: 'Any licence required by your state or municipality for the work you accept.',
  },
  {
    title: 'Vehicle & equipment',
    text: 'Reliable transport and the tools to complete your stated scope without rentals.',
  },
  {
    title: 'Photo workflow',
    text: 'A smartphone and email access to upload indexed photos the same day.',
  },
  {
    title: 'Dispatch capacity',
    text: 'Ability to complete accepted orders within 24–48 hours of assignment.',
  },
];

const faqs = [
  {
    question: 'Who can apply to the network?',
    answer:
      'Licensed, insured independent contractors operating in the United States. We add crews across inspections, securing, debris removal, grounds, winterization, trades and general rehab. This is not a job application.',
  },
  {
    question: 'What insurance is required?',
    answer:
      'Current general liability coverage with limits appropriate to the trade, evidenced by a certificate of insurance. Trade-specific coverage may be requested for roofing, plumbing and remediation work.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Complete applications are reviewed within five business days. Once approved, onboarding — documents, agreement, territory activation and a first order — usually takes ten to fourteen days.',
  },
  {
    question: 'Is work assigned or bid?',
    answer:
      'Both. Routine orders are assigned by territory and trade. Larger or unusual scopes are bid from a written specification, and pricing is confirmed before work begins.',
  },
  {
    question: 'Do I need a specific software platform?',
    answer:
      'No proprietary software is required. You need email, a smartphone for photo capture, and the ability to upload a labelled photo set and completion notes the same day.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Approved scopes are invoiced line by line on completion, with the photo set attached. Invoicing terms and the payment schedule are set out in the vendor agreement during onboarding.',
  },
];

const nextSteps = [
  {
    title: 'Review',
    text: 'A network manager reviews the application within five business days.',
  },
  {
    title: 'Documents',
    text: 'COI, W-9, licence and signed vendor agreement are collected and verified.',
  },
  {
    title: 'Activation',
    text: 'Territory and trades are activated, then a first order is assigned.',
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        index="05"
        label="Vendor application"
        titleLines={[
          'Join the',
          <>
            field <span className="italic text-brass">network</span>.
          </>,
        ]}
        description="We add independent crews who document their work like operators — on time, in writing, with photos that hold up to review. Applications are reviewed by a person, not a portal."
        meta={[
          { label: 'Review', value: '5 business days' },
          { label: 'Requirements', value: 'COI · licence · W-9' },
          { label: 'Coverage', value: 'Nationwide' },
        ]}
      />

      {/* ============ APPLICATION ============ */}
      <section className="container-edge pb-20 lg:pb-28">
        <div className="grid gap-12 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-12">
          <aside className="lg:col-span-4">
            <div className="space-y-9 lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-muted">
                  <span className="text-brass">01</span>
                  <span className="mx-2 text-brass/60">/</span>
                  Before you apply
                </p>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                  We work with crews who can hold a territory, communicate directly and close
                  an order without being chased. If that is how you operate, we want to see the
                  application.
                </p>
                <ul className="mt-6 border-t border-ink/15">
                  {[
                    'Licensed and insured in your trade',
                    'Same-day photo documentation',
                    'Capacity for 24–48 hour dispatch',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-ink/10 py-3 text-[13px] text-ink/75"
                    >
                      <span className="mt-0.5 font-mono text-[10px] text-brass">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow text-muted">
                  <span className="text-brass">02</span>
                  <span className="mx-2 text-brass/60">/</span>
                  What happens next
                </p>
                <ol className="mt-4 border-t border-ink/15">
                  {nextSteps.map((item, i) => (
                    <li key={item.title} className="border-b border-ink/10 py-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] text-brass">0{i + 1}</span>
                        <p className="text-[13px] font-medium text-ink">{item.title}</p>
                      </div>
                      <p className="ml-6 mt-1 text-[11px] leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border-t border-ink/15 pt-5">
                  <p className="eyebrow text-muted">Questions first?</p>
                  <a
                    href="mailto:info@assetproperty.net"
                    className="link-underline mt-3 inline-flex items-center gap-1.5 text-[13px] text-ink"
                  >
                    info@assetproperty.net
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-brass">03 / Application</p>
                <h2 className="display mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                  Apply to the network
                </h2>
              </div>
              <p className="eyebrow hidden text-muted sm:block">* REQUIRED</p>
            </div>
            <VendorApplicationForm />
          </div>
        </div>
      </section>

      {/* ============ BASELINE ============ */}
      <section className="border-y border-ink/15 bg-paper-deep/50">
        <div className="container-edge py-20 lg:py-28">
          <SectionHeading
            index="04"
            eyebrow="Baseline"
            title="What every vendor needs."
            description="Have these in order before applying — complete files move through onboarding in days, not weeks."
          />

          <div className="mt-12 grid gap-x-10 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {baseline.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <div className="border-b border-ink/10 py-5">
                  <p className="eyebrow text-brass">0{i + 1}</p>
                  <h3 className="mt-3 text-[14px] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="container-edge py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-muted">
                <span className="text-brass">05</span>
                <span className="mx-2 text-brass/60">/</span>
                Questions
              </p>
              <h2 className="display mt-5 text-[clamp(2rem,4vw,3.2rem)] text-ink">
                Before you
                <br />
                <span className="italic text-brass">apply.</span>
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                Still unsure whether your trade or territory is a fit? Write to us — a network
                manager will answer directly.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04}>
                <details className="group border-t border-ink/15">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5">
                    <span className="text-[15px] text-ink transition-colors group-hover:text-brass">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center font-mono text-[15px] leading-none text-brass transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 text-[13px] leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
            <div className="border-t border-ink/15" />

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  Ready to send a file instead?{' '}
                  <Link href="/contact" className="text-ink underline underline-offset-4">
                    Start a work order
                  </Link>
                  .
                </p>
                <Link href="/vendor" className="link-underline text-[13px] text-ink">
                  Read about the vendor network
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
