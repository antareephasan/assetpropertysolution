"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const primaryLinks = [
  { href: "/projects", label: "Field Files", index: "01" },
  { href: "/services", label: "Services", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/vendor", label: "Vendor Network", index: "04" },
  { href: "/contact", label: "Contact", index: "05" },
];

const menuLinks = [
  { href: "/projects", label: "Field Files", index: "01" },
  { href: "/services", label: "Services", index: "02" },
  { href: "/about", label: "About the firm", index: "03" },
  { href: "/vendor", label: "Vendor Network", index: "04" },
  { href: "/apply", label: "Vendor Application", index: "05" },
  { href: "/contact", label: "Contact", index: "06" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasOpened = useRef(false);
  const pathname = usePathname();
  // Static export runs with trailing slashes; normalise so active states match.
  const path = pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const items = overlay.querySelectorAll("[data-menu-item]");
    const reduced = prefersReducedMotion();

    if (open) {
      hasOpened.current = true;
      document.body.style.overflow = "hidden";

      if (reduced) {
        gsap.set(overlay, { display: "block", clipPath: "inset(0 0 0% 0)" });
        gsap.set(items, { autoAlpha: 1, yPercent: 0 });
      } else {
        gsap.killTweensOf([overlay, items]);
        gsap.set(overlay, { display: "block" });
        gsap.fromTo(
          overlay,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.75, ease: "expo.inOut" },
        );
        gsap.fromTo(
          items,
          { yPercent: 45, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.055,
            ease: "expo.out",
            delay: 0.28,
          },
        );
      }

      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }

    if (!hasOpened.current) {
      gsap.set(overlay, { display: "none" });
      return;
    }

    document.body.style.overflow = "";
    if (reduced) {
      gsap.set(overlay, { display: "none" });
      return;
    }

    gsap.killTweensOf([overlay, items]);
    gsap.to(items, {
      autoAlpha: 0,
      yPercent: -18,
      duration: 0.3,
      stagger: 0.02,
    });
    gsap.to(overlay, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.65,
      delay: 0.12,
      ease: "expo.inOut",
      onComplete: () => gsap.set(overlay, { display: "none" }),
    });
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`container-edge flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-[68px]" : "h-[82px] lg:h-[92px]"
          }`}
        >
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {primaryLinks.map((link) => {
              const active =
                path === link.href || path.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`eyebrow group relative py-2 transition-colors ${
                    active ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-brass transition-[width] duration-500 ease-out-expo ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-ink hidden !px-5 !py-3 !text-[10px] sm:inline-flex"
            >
              Start a project
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              className="flex items-center gap-2.5 border border-ink/20 px-3.5 py-2.5 text-ink transition-colors hover:border-ink lg:hidden"
            >
              <span className="eyebrow">{open ? "Close" : "Menu"}</span>
              {open ? (
                <X className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen navigation */}
      <div
        ref={overlayRef}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className="fixed inset-0 z-[85] hidden bg-ink text-paper"
      >
        <div className="container-edge flex h-full flex-col overflow-y-auto py-5">
          <div className="flex items-center justify-between">
            <Logo tone="paper" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center gap-2.5 border border-paper/25 px-3.5 py-2.5 text-paper transition-colors hover:border-paper"
            >
              <span className="eyebrow">Close</span>
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-12 lg:gap-10">
            <nav className="lg:col-span-8" aria-label="Menu">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-menu-item
                  className="group flex items-baseline gap-4 border-b border-paper/15 py-4 sm:gap-6 sm:py-5"
                >
                  <span className="eyebrow w-6 shrink-0 text-brass-light/80">
                    {link.index}
                  </span>
                  <span className="display text-[clamp(1.9rem,5vw,3.6rem)] text-paper transition-colors duration-300 group-hover:text-brass-light">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-5 w-5 shrink-0 text-paper/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass-light"
                    strokeWidth={1.25}
                  />
                </Link>
              ))}
            </nav>

            <div data-menu-item className="lg:col-span-4 lg:pl-10">
              <p className="eyebrow text-paper/35">Direct line</p>
              <a
                href="mailto:info@assetproperty.net"
                className="link-underline mt-4 inline-block font-display text-xl text-paper sm:text-2xl"
              >
                info@assetproperty.net
              </a>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/50">
                Work orders, quotes and vendor enquiries. One point of contact
                from intake through close-out.
              </p>

              <div className="mt-8 space-y-2 border-t border-paper/15 pt-5 text-sm">
                <p className="flex justify-between gap-4 text-paper/40">
                  <span className="eyebrow">Based</span>
                  <span className="text-paper/80">Los Angeles, CA</span>
                </p>
                <p className="flex justify-between gap-4 text-paper/40">
                  <span className="eyebrow">Coverage</span>
                  <span className="text-paper/80">Nationwide</span>
                </p>
                <p className="flex justify-between gap-4 text-paper/40">
                  <span className="eyebrow">Dispatch</span>
                  <span className="text-paper/80">24–48 hours</span>
                </p>
              </div>

              <Link
                href="/apply"
                className="btn btn-paper mt-8 w-full justify-between"
              >
                Apply as a vendor
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="rule-label-light">
            <p className="eyebrow text-paper/30">ASSET PROPERTY SOLUTION LLC</p>
            <p className="eyebrow text-paper/30">EST. 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
