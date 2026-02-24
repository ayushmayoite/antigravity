"use client";

import Link from "next/link";
import { ShieldCheck, Leaf, Award, MapPin, MessageCircle } from "lucide-react";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "5-Year Warranty", sub: "On all products" },
  { icon: Award, label: "BIFMA Certified", sub: "Internationally tested" },
  { icon: Leaf, label: "Sustainable", sub: "Eco-conscious materials" },
  { icon: MapPin, label: "Made in India", sub: "Gurugram, Haryana" },
];

export function Footer() {
  return (
    <footer className="footer w-full font-sans">
      {/* Trust Badges Strip */}
      <div className="bg-neutral-900 text-white border-t border-neutral-700">
        <div className="container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-widest text-white">
                  {label}
                </p>
                <p className="text-[11px] text-neutral-400 font-light">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-neutral-50 text-neutral-500 py-16 lg:py-20 text-base lg:text-xl border-t border-neutral-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-8 lg:col-span-1 border-r border-neutral-100 pr-8">
              <Link href="/" className="block">
                <span className="text-2xl font-bold tracking-tighter text-neutral-900">
                  One and Only
                </span>
              </Link>
              <div className="space-y-2 text-sm lg:text-base font-light">
                <p className="font-semibold text-neutral-900 uppercase tracking-wider">
                  Our Headquarters
                </p>
                <p>
                  One And Only Furniture <br />
                  Khasra No. 129, Sector 84 <br />
                  Gurugram, Haryana 122004 <br />
                  +91 124 403 1666 <br />
                  info@oando.co.in
                </p>
              </div>
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/911244031666?text=Hi%2C+I%27d+like+to+enquire+about+office+furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-[#128C7E] transition-colors rounded-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
              {/* Products */}
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl font-semibold text-neutral-900">
                  Products
                </p>
                <ul className="flex flex-col gap-3 text-sm lg:text-lg font-light">
                  {[
                    { href: "/products", label: "All Products" },
                    { href: "/products/oando-seating", label: "Seating" },
                    {
                      href: "/products/oando-workstations",
                      label: "Workstations",
                    },
                    { href: "/products/oando-tables", label: "Tables" },
                    { href: "/products/oando-storage", label: "Storage" },
                    {
                      href: "/products/oando-soft-seating",
                      label: "Soft Seating",
                    },
                    {
                      href: "/configurator",
                      label: "3D Configurator",
                      highlight: true,
                    },
                  ].map(({ href, label, highlight }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`hover:text-primary transition-colors ${highlight ? "text-primary font-medium italic" : ""}`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl font-semibold text-neutral-900">
                  One and Only
                </p>
                <ul className="flex flex-col gap-3 text-sm lg:text-lg font-light">
                  {[
                    { href: "/about", label: "About Us" },
                    { href: "/sustainability", label: "Sustainability" },
                    { href: "/career", label: "Career", dot: true },
                    { href: "/gallery", label: "Project Gallery" },
                    { href: "/news", label: "News" },
                  ].map(({ href, label, dot }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="relative hover:text-primary transition-colors inline-block"
                      >
                        {label}
                        {dot && (
                          <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-red-600 rounded-full" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service */}
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl font-semibold text-neutral-900">
                  Service
                </p>
                <ul className="flex flex-col gap-3 text-sm lg:text-lg font-light">
                  {[
                    { href: "/downloads", label: "Downloads" },
                    { href: "/planning", label: "Space Planning" },
                    { href: "/showrooms", label: "Showrooms" },
                    { href: "/contact", label: "Contact" },
                    { href: "/tracking", label: "Order Tracking" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="hover:text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm lg:text-base font-light text-neutral-400">
            <div className="flex gap-6 lg:gap-12 flex-wrap justify-center">
              <Link
                href="/imprint"
                className="hover:text-neutral-900 transition-colors"
              >
                Imprint
              </Link>
              <Link
                href="/privacy"
                className="hover:text-neutral-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-neutral-900 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
            <div suppressHydrationWarning>
              &copy; {new Date().getFullYear()} One and Only. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
