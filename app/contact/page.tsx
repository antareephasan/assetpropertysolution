import type { Metadata } from 'next';
import { Clock, Mail, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a quote or submit a work order to ASSET PROPERTY SOLUTION LLC — email info@assetproperty.net, based in Los Angeles, CA.',
  alternates: { canonical: '/contact/' },
};

const infoCards = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@assetproperty.net',
    href: 'mailto:info@assetproperty.net',
    sub: 'Work orders, quotes & vendor applications',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Los Angeles, CA',
    sub: 'Serving all of Southern California, dispatching nationwide',
  },
  {
    icon: Clock,
    title: 'Turnaround',
    value: '24–48 Hours',
    sub: 'Crews dispatched on most work orders within two business days',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    value: 'Licensed, Insured & Bonded',
    sub: 'Certificates of insurance available upon request',
  },
];

export default function ContactPage() {
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
            Contact Us
          </p>
          <h1
            className="fade-up font-display mx-auto mt-5 max-w-3xl text-4xl font-bold text-white sm:text-5xl"
            style={{ animationDelay: '120ms' }}
          >
            Let’s Get Your <span className="text-gold-gradient">Property Handled</span>
          </h1>
          <p
            className="fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body/80"
            style={{ animationDelay: '240ms' }}
          >
            Request a quote, send a work order, or ask a question. Every submission is
            answered by a real person — usually the same business day.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ icon: Icon, title, value, href, sub }, i) => {
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/30 bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-body/60 uppercase">
                  {title}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs leading-relaxed text-body/60">{sub}</p>
              </>
            );
            return href ? (
              <Reveal key={title} delay={i * 80}>
                <a
                  href={href}
                  className="lift block h-full rounded-lg border border-line bg-surface p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-glow"
                >
                  {content}
                </a>
              </Reveal>
            ) : (
              <Reveal key={title} delay={i * 80}>
                <div className="lift h-full rounded-lg border border-line bg-surface p-7">
                  {content}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Request a Quote or Send a Work Order
          </h2>
          <p className="mt-3 text-sm text-body/70">
            Fields marked * are required. Include the property address and expected timeline
            for the fastest response.
          </p>
        </div>
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-lg border border-line bg-surface/50 px-6 py-6 text-center sm:flex-row sm:text-left">
          <PhoneCall className="h-5 w-5 text-gold" />
          <p className="text-sm text-body/75">
            Prefer direct dispatch? Email{' '}
            <a href="mailto:info@assetproperty.net" className="font-semibold text-gold">
              info@assetproperty.net
            </a>{' '}
            with the property address and scope — our coordinator will confirm the crew
            assignment            within 24–48 hours.
          </p>
        </div>
        </Reveal>
      </section>
    </>
  );
}
