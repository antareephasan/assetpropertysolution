import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a quote or submit a work order to ASSET PROPERTY SOLUTION LLC — info@assetproperty.net, based in Los Angeles, CA with nationwide dispatch.',
  alternates: { canonical: '/contact/' },
};

const contactDetails = [
  {
    label: 'Email',
    value: 'info@assetproperty.net',
    href: 'mailto:info@assetproperty.net',
    note: 'Work orders, quotes and vendor enquiries.',
  },
  {
    label: 'Base',
    value: 'Los Angeles, California',
    note: 'Own crews across Southern California; nationwide network dispatch.',
  },
  {
    label: 'Response',
    value: 'Within one business day',
    note: 'Dispatch confirmed at 24–48 hours on most orders.',
  },
  {
    label: 'Compliance',
    value: 'Licensed, insured & bonded',
    note: 'Certificates of insurance available on request.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        label="Contact"
        titleLines={[
          'Tell us about',
          <>
            the <span className="italic text-brass">asset</span>.
          </>,
        ]}
        description="Send the address, the requirement and any client guidelines. Every enquiry is answered by a person, usually the same business day."
        meta={[
          { label: 'Email', value: 'info@assetproperty.net' },
          { label: 'Dispatch', value: '24–48 hours' },
          { label: 'Coverage', value: 'Nationwide' },
        ]}
      />

      <section className="container-edge pb-20 lg:pb-28">
        <div className="grid gap-12 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-muted">Direct line</p>
                <a
                  href="mailto:info@assetproperty.net"
                  className="display mt-4 block break-words text-[clamp(1.7rem,2.6vw,2.3rem)] text-ink hover:text-brass"
                >
                  info@assetproperty.net
                </a>
              </Reveal>

              <dl className="mt-10">
                {contactDetails.map((detail, i) => (
                  <Reveal key={detail.label} delay={i * 0.05}>
                    <div className="border-t border-ink/15 py-4">
                      <dt className="eyebrow text-muted">{detail.label}</dt>
                      <dd className="mt-2 text-[15px] text-ink">
                        {detail.href ? (
                          <a href={detail.href} className="link-underline">
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                      <dd className="mt-1.5 text-[11px] leading-relaxed text-muted">
                        {detail.note}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>

              <Reveal delay={0.2}>
                <div className="mt-6 border-t border-ink/15 pt-5">
                  <p className="eyebrow text-muted">For vendors</p>
                  <p className="mt-3 text-[12px] leading-relaxed text-muted">
                    Applications go through the vendor network, not the work order inbox.
                  </p>
                  <Link
                    href="/apply"
                    className="link-underline mt-4 inline-flex items-center gap-1.5 text-[13px] text-ink"
                  >
                    Apply to the network
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-b border-ink/15 pb-5">
                <div>
                  <p className="eyebrow text-brass">01 / Enquiry</p>
                  <h2 className="display mt-3 text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
                    Request a quote or work order
                  </h2>
                </div>
                <p className="eyebrow hidden text-muted sm:block">* REQUIRED</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 grid gap-6 border-t border-ink/15 pt-6 sm:grid-cols-3">
                <div>
                  <p className="eyebrow text-brass">Access</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    Include lockbox codes or access instructions in your follow-up email, not
                    in this form.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-brass">Scope</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    Photos of the property help us price accurately on the first visit.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-brass">Documentation</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    Photo sets and line-item invoices are delivered at close-out as standard.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
