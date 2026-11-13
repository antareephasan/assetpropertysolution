import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/projects', label: 'Field Files' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/vendor', label: 'Vendor Network' },
  { href: '/apply', label: 'Vendor Application' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Property Inspections',
  'Securing & Locks',
  'Debris & Trash-Out',
  'Lawn & Grounds',
  'Winterization',
  'Repairs & Rehab',
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-edge">
        <div className="grid gap-12 border-b border-paper/15 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5">
            <Logo tone="paper" />
            <p className="display mt-8 max-w-sm text-[clamp(1.8rem,3.2vw,2.7rem)] text-paper">
              Property,
              <br />
              held to a higher
              <br />
              <span className="italic text-brass-light">standard.</span>
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/45">
              Field services for lenders, servicers, investors and property managers.
              Inspected, secured and documented — from Los Angeles, nationwide.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="eyebrow text-paper/35">Navigate</h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-paper/35">Capabilities</h2>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-paper/35">Contact</h2>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href="mailto:info@assetproperty.net"
                className="link-underline block break-words text-paper/75 hover:text-paper"
              >
                info@assetproperty.net
              </a>
              <p className="leading-relaxed text-paper/45">
                Los Angeles, California
                <br />
                Nationwide dispatch
              </p>
              <Link
                href="/contact"
                className="link-underline inline-flex items-center gap-1.5 text-brass-light"
              >
                Start a work order
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pb-6 pt-8">
          <p
            aria-hidden
            className="display select-none whitespace-nowrap text-[clamp(3rem,9.6vw,9.5rem)] leading-[0.8] text-paper/[0.07]"
          >
            ASSET PROPERTY
          </p>
        </div>

        <div className="border-t border-paper/15 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-[11px] text-paper/35">
              © {new Date().getFullYear()} ASSET PROPERTY SOLUTION LLC. All rights reserved.
            </p>
            <p className="max-w-3xl text-[10px] leading-relaxed text-paper/25 sm:text-right">
              ASSET PROPERTY SOLUTION LLC is a private field services company and is not
              affiliated with, endorsed by, or acting on behalf of any government agency,
              lender, or financial institution unless expressly contracted. All work is
              performed per executed work orders and photographed for documentation. Nothing
              on this site constitutes legal, financial, or investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
