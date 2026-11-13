import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MaskLines from '@/components/motion/MaskLines';
import Magnetic from '@/components/motion/Magnetic';
import Reveal from '@/components/Reveal';

export default function CTABanner({
  title = 'Send the work order.',
  subtitle = 'We confirm scope, pricing and dispatch windows within one business day — then document every step of the visit.',
  label = 'Work order intake',
}: {
  title?: string;
  subtitle?: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] leading-none text-paper/[0.035] lg:block"
      >
        A
      </div>
      <div className="container-edge relative py-20 lg:py-28">
        <div className="rule-label-light">
          <p className="eyebrow text-paper/45">
            <span className="text-brass-light">Next</span>
            <span className="mx-2 text-brass/60">/</span>
            {label}
          </p>
          <p className="eyebrow hidden text-paper/30 sm:block">RESPONSE WITHIN 24 HOURS</p>
        </div>

        <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <MaskLines
              as="h2"
              scroll
              lines={[title]}
              className="display text-[clamp(2.6rem,6vw,5.4rem)] text-paper"
            />
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-paper/60">
                {subtitle}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <Magnetic className="w-full">
                  <Link href="/contact" className="btn btn-paper w-full justify-between">
                    Start a work order
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Magnetic>
                <a
                  href="mailto:info@assetproperty.net"
                  className="btn btn-ghost-light w-full justify-between"
                >
                  info@assetproperty.net
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <p className="mt-2 text-[11px] leading-relaxed text-paper/35">
                  Licensed, insured and bonded. Photo-documented reporting as standard.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
