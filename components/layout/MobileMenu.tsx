"use client";

import { X, ChevronRight, Globe, Search } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MAIN_LINKS = [
  {
    label: "Products",
    href: "/products",
    description: "Browse our furniture collections",
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Workspace solutions",
  },
  { label: "Gallery", href: "/gallery", description: "Project references" },
  { label: "About", href: "/about", description: "Company information" },
];

const PRODUCT_CATEGORIES = [
  { label: "Workstations", href: "/products/oando-workstations" },
  { label: "Seating", href: "/products/oando-seating" },
  { label: "Tables", href: "/products/oando-tables" },
  { label: "Storage", href: "/products/oando-storage" },
  { label: "Soft Seating", href: "/products/oando-soft-seating" },
];

const SECONDARY_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Downloads", href: "/downloads" },
  { label: "Sustainability", href: "/sustainability" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
          className="fixed inset-0 bg-neutral-50 z-1100 flex flex-col font-sans overflow-hidden"
        >
          {/* App-like Header */}
          <div className="flex items-center justify-between px-6 h-16 bg-white border-b border-neutral-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-lg font-semibold text-neutral-900">
                Menu
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-white hover:bg-neutral-100 rounded-xl transition-colors shadow-sm"
              aria-label="Close mobile menu"
              title="Close"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="flex flex-col min-h-full">
              {/* App-like Search Bar */}
              <div className="px-6 py-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400">
                    <Search className="w-full h-full" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search furniture..."
                    className="w-full h-12 pl-11 pr-4 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Main Navigation */}
              <nav className="px-6 pb-6">
                <ul className="space-y-3">
                  {MAIN_LINKS.map((link, idx) => (
                    <li key={link.href}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block group py-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-light text-neutral-900 group-hover:text-primary transition-colors">
                              {link.label}
                            </span>
                            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
                          </div>
                          {link.description && (
                            <p className="text-sm text-neutral-500 mt-1">
                              {link.description}
                            </p>
                          )}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Product Categories Filter */}
              <div className="px-6 pb-6">
                <h3 className="typ-eyebrow mb-3">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCT_CATEGORIES.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      onClick={onClose}
                      className="text-sm text-neutral-700 hover:text-primary transition-colors py-2"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider with Logo Mark background idea if needed, otherwise simplified */}
              <div className="h-px bg-neutral-100 mx-6 mb-8" />

              {/* Secondary Navigation */}
              <nav className="px-6 pb-8">
                <ul className="space-y-3">
                  {SECONDARY_LINKS.map((link, idx) => (
                    <li key={link.href}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="text-base text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* App-like Footer */}
          <div className="bg-white border-t border-neutral-100 shrink-0 sticky bottom-0 z-50 px-6 py-4 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <Link
              href="/contact"
              onClick={onClose}
              className="bg-neutral-900 text-white font-semibold text-sm h-12 px-6 rounded-sm flex items-center justify-center hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              Get Quote
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-neutral-500">
              <button
                className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
