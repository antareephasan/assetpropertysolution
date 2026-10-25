'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/vendor', label: 'Vendor Network' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-ink/95 backdrop-blur-md' : 'border-transparent bg-ink/80 backdrop-blur'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand — mark pinned left, wordmark centred below lg and inline from lg */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={500}
            height={500}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <Image
            src="/images/label.png"
            alt="ASSET PROPERTY SOLUTION — Property Preservation"
            width={1024}
            height={152}
            className="absolute left-1/2 top-1/2 h-7 w-auto shrink-0 -translate-x-1/2 -translate-y-1/2 sm:h-9 lg:static lg:h-9 lg:translate-x-0 lg:translate-y-0"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === l.href ? 'text-gold' : 'text-body hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="shadow-glow rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md border border-line p-2 text-body lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-line bg-ink transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-surface text-gold'
                  : 'text-body hover:bg-surface hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-4 py-3 text-center text-base font-semibold text-ink"
          >
            Get a Quote
          </Link>
          <a
            href="mailto:info@assetproperty.net"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-sm text-body"
          >
            <Phone className="h-4 w-4 text-gold" /> info@assetproperty.net
          </a>
        </nav>
      </div>
    </header>
  );
}
