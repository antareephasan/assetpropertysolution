import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/vendor', label: 'Vendor Network' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Property Inspections',
  'Securing & Lock Changes',
  'Debris & Trash-Out',
  'Lawn & Yard Care',
  'Winterization',
  'Repairs & Rehab',
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      {/* Top gold hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
              className="h-11 w-11 shrink-0 object-contain"
            />
            <Image
              src="/images/label.png"
              alt="ASSET PROPERTY SOLUTION — Property Preservation"
              width={1024}
              height={152}
              className="h-7 w-auto shrink-0"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-body/80">
            Premier property preservation and field services protecting real estate assets
            across Los Angeles and nationwide.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-gold">
            QUICK LINKS
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-body/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-gold">
            OUR SERVICES
          </h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-body/80 transition-colors hover:text-gold"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-gold">
            CONTACT
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-body/80">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:info@assetproperty.net" className="transition-colors hover:text-gold">
                info@assetproperty.net
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Los Angeles, CA
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Nationwide dispatch coverage
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-body/50">
            © {new Date().getFullYear()} ASSET PROPERTY SOLUTION LLC. All rights reserved.
            <br className="mt-2 sm:hidden" />{' '}
            <span className="hidden sm:inline">·</span> Legal Disclaimer: ASSET PROPERTY
            SOLUTION LLC is a private field services company and is not affiliated with,
            endorsed by, or acting on behalf of any government agency, lender, or financial
            institution unless expressly contracted. All work is performed per executed work
            orders and photographed for documentation. Nothing on this site constitutes legal,
            financial, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
