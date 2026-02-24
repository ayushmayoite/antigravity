"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { OneAndOnlyLogo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navigationData = {
  products: {
    title: "Products",
    columns: [
      {
        heading: "Seating",
        items: [
          { label: "Task Chairs", href: "/products?category=seating" },
          { label: "Executive Chairs", href: "/products?category=seating" },
          { label: "Conference Chairs", href: "/products?category=seating" },
          {
            label: "Lounge Seating",
            href: "/products?category=reception-lounge",
          },
          { label: "Guest Chairs", href: "/products?category=seating" },
        ],
      },
      {
        heading: "Workspaces",
        items: [
          { label: "Modular Desks", href: "/products?category=workstations" },
          { label: "Executive Desks", href: "/products?category=workstations" },
          {
            label: "Height Adjustable",
            href: "/products?category=workstations",
          },
          {
            label: "Benching Systems",
            href: "/products?category=workstations",
          },
        ],
      },
      {
        heading: "Storage",
        items: [
          { label: "Filing Cabinets", href: "/products?category=storage" },
          { label: "Pedestals", href: "/products?category=storage" },
          { label: "Bookcases", href: "/products?category=storage" },
          { label: "Lockers", href: "/products?category=storage" },
        ],
      },
    ],
  },
  solutions: {
    title: "Solutions",
    columns: [
      {
        heading: "Industries",
        items: [
          { label: "Corporate", href: "/products" },
          { label: "Government", href: "/products" },
          { label: "Education", href: "/products" },
          { label: "Healthcare", href: "/products" },
        ],
      },
    ],
  },
  resources: {
    title: "Resources",
    columns: [
      {
        heading: "Tools & Downloads",
        items: [
          {
            label: "Workstation Configurator",
            href: "/workstations/configurator",
          },
          { label: "Specifications", href: "/downloads" },
          { label: "CAD Files", href: "/downloads" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Design Guides", href: "/downloads" },
        ],
      },
    ],
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b",
          scrolled || isMobileMenuOpen
            ? "bg-white py-4 border-neutral-200 shadow-sm"
            : "bg-white/95 py-5 border-transparent",
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <OneAndOnlyLogo
              variant={scrolled || isMobileMenuOpen ? "orange" : "orange"}
              className="h-[42px] md:h-[48px] transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {Object.entries(navigationData).map(([key, section]) => (
              <div
                key={key}
                className="relative h-full"
                onMouseEnter={() => setActiveMegaMenu(key)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-[22px] font-medium tracking-wide transition-colors duration-200 py-2",
                    activeMegaMenu === key
                      ? "text-[#D30000]"
                      : "text-neutral-900 hover:text-[#D30000]",
                  )}
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-300 mt-1",
                      activeMegaMenu === key
                        ? "rotate-180 text-[#D30000]"
                        : "text-neutral-400",
                    )}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={cn(
                    "absolute top-full -left-20 pt-8 w-[900px] transition-all duration-300 origin-top-left",
                    activeMegaMenu === key
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible pointer-events-none",
                  )}
                >
                  <div
                    className={`bg-white shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] border border-neutral-100 p-10 grid gap-12 ${section.columns.length <= 2 ? "grid-cols-2" : "grid-cols-4"}`}
                  >
                    {section.columns.map((col, idx) => (
                      <div key={idx} className="space-y-6">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                          {col.heading}
                        </h4>
                        <ul className="space-y-3">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block text-[18px] text-neutral-600 hover:text-[#D30000] transition-colors duration-200"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/gallery"
              className="text-[22px] font-medium tracking-wide text-neutral-900 hover:text-[#D30000] transition-colors duration-200"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-[22px] font-medium tracking-wide text-neutral-900 hover:text-[#D30000] transition-colors duration-200"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[22px] font-medium tracking-wide text-neutral-900 hover:text-[#D30000] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/catalog"
              className="hidden xl:flex items-center gap-2 text-[16px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <span>Catalog</span>
            </Link>

            <div className="hidden md:flex items-center gap-4 pl-6 border-l border-neutral-200">
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-[#D30000] text-white text-[16px] font-medium px-6 py-3 rounded-none hover:bg-[#9A0A12] transition-colors duration-200"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 -mr-2 text-neutral-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <div className="h-full overflow-y-auto pt-28 pb-12 px-6 flex flex-col justify-between">
          <div className="space-y-8">
            {Object.entries(navigationData).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-3xl font-light text-neutral-900">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 gap-6 pl-4 border-l border-neutral-100">
                  {section.columns.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                        {col.heading}
                      </h4>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-base text-neutral-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8 space-y-4 border-t border-neutral-100">
              <Link
                href="/projects"
                className="block text-3xl font-light text-neutral-900 hover:text-[#BF0D17] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="block text-3xl font-light text-neutral-900 hover:text-[#BF0D17] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-3xl font-light text-neutral-900 hover:text-[#BF0D17] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full bg-neutral-900 text-white text-base font-medium py-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
            </Link>
            <Link
              href="/catalog"
              className="flex items-center justify-center w-full border border-neutral-200 text-neutral-900 text-base font-medium py-4 hover:border-neutral-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
