"use client";

import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "./SearchOverlay";
import { MegaMenu } from "./MegaMenu";

import { oandoCatalog } from "@/lib/catalog";
import { OneAndOnlyLogo } from "@/components/ui/Logo";

const discoverMenuItems = oandoCatalog
  .map((category) => ({
    label: category.name,
    href: `/products/${category.id}`,
  }))
  .concat([{ label: "All Products", href: "/products" }]);

const discoverMenuCards = [
  {
    title: "Seating",
    description:
      "Ergonomic office chairs and task seating for every workspace.",
    image: "/images/products/imported/fluid/image-1.webp",
    href: "/products/oando-seating",
  },
  {
    title: "Workstations",
    description: "Modular workstation solutions for modern offices.",
    image: "/images/products/imported/cabin/image-1.webp",
    href: "/products/oando-workstations",
  },
  {
    title: "Soft Seating",
    description:
      "Comfortable seating solutions for collaborative environments.",
    image: "/images/products/imported/cocoon/image-1.webp",
    href: "/products/oando-soft-seating",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setActiveMenu(null);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-1020 transition-all duration-500 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-white py-0",
          "border-b border-neutral-100",
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex flex-col w-full">
          {/* Meta Navigation (Top Row) */}
          <div
            className={clsx(
              "w-full flex justify-end items-center transition-all duration-300 overflow-hidden bg-white border-b border-neutral-100",
              isScrolled ? "h-0 opacity-0" : "h-10 opacity-100",
            )}
          >
            <div className="container px-6 2xl:px-0 flex justify-end items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-neutral-400">
              <span className="hidden md:inline mr-auto text-neutral-500 font-medium">
                One and Only Furniture
              </span>
              <Link
                href="/service"
                className="hover:text-primary transition-colors"
              >
                Service
              </Link>
              <Link
                href="/showrooms"
                className="hover:text-primary transition-colors"
              >
                Showrooms
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact us
              </Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-primary transition-colors flex items-center gap-1.5"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Navigation (Bottom Row) */}
          <div
            className={clsx(
              "container flex items-center justify-between px-6 2xl:px-0 transition-all duration-300",
              isScrolled ? "h-16" : "h-20 lg:h-24",
            )}
          >
            {/* Logo Section */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="flex items-center py-2"
                aria-label="One and Only Home"
              >
                <OneAndOnlyLogo
                  className="h-8 md:h-10"
                  variant={isScrolled ? "orange" : "orange"}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              {[
                { label: "Products", href: "/products", hasMegaMenu: true },
                { label: "Solutions", href: "/solutions" },
                { label: "Projects", href: "/gallery" },
                { label: "About", href: "/about" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={() =>
                    item.hasMegaMenu
                      ? setActiveMenu(item.label)
                      : setActiveMenu(null)
                  }
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "h-full flex items-center text-[15px] font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 border-transparent",
                      activeMenu === item.label
                        ? "text-primary border-primary-hover"
                        : "text-neutral-900 hover:text-primary",
                    )}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={clsx(
                          "ml-1.5 w-4 h-4 transition-transform opacity-40",
                          activeMenu === item.label && "rotate-180",
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contact" className="btn-primary typ-cta">
                Request Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex lg:hidden items-center justify-center w-10 h-10 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors shadow-sm"
              title="Open menu"
            >
              <Menu className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <MegaMenu
          isOpen={activeMenu === "Products"}
          onClose={() => setActiveMenu(null)}
          items={discoverMenuItems}
          cards={discoverMenuCards}
        />
      </header>

      {/* Mobile & Search Overlays */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
