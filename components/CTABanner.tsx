import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTABanner({
  title = 'Need work completed on a property?',
  subtitle = 'Send us a work order today — crews are dispatched within 24–48 hours and every visit is photo-documented.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      {/* ambient gold glow */}
      <div
        aria-hidden
        className="glow-pulse absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="grid-overlay absolute inset-0" aria-hidden />
      <Reveal className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {title}{' '}
            <span className="text-gold-gradient">Request a Quote.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body/80 sm:text-base">
            {subtitle}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="shadow-glow inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:info@assetproperty.net"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/40 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
