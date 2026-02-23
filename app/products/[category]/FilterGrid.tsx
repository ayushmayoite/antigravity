"use client";

import { Category } from "@/lib/catalog";
import Link from "next/link";
import { Search as SearchIcon, X } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { useState, useMemo } from "react";
import clsx from "clsx";

export function FilterGrid({
  category,
  categoryId,
}: {
  category: Category;
  categoryId: string;
}) {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"az" | "za">("az");

  const allProducts = useMemo(() => {
    return category.series.flatMap((series) =>
      series.products.map((product) => ({
        ...product,
        seriesId: series.id,
        seriesName: series.name,
      })),
    );
  }, [category]);

  const filteredProducts = useMemo(() => {
    let list = [...allProducts];
    if (selectedSeries !== "all") {
      list = list.filter((p) => p.seriesId === selectedSeries);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }
    list.sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    return list;
  }, [allProducts, selectedSeries, query, sort]);

  const cleanName = (raw: string) => {
    if (!raw) return raw;
    const m = raw.match(/^([A-Z][a-z]+(?:[- ][A-Z][a-z0-9]*)?)\1/);
    if (m && m[1]) return m[1];
    if (raw.length > 30 && !raw.includes(" ")) {
      const cap = raw.match(/^[A-Z][a-z]+/);
      if (cap) return cap[0];
    }
    return raw;
  };

  return (
    <section
      className="w-full bg-[#f8f9fa]"
      aria-label={`${category.name} product catalog`}
    >
      {/* Top toolbar - fixed sticky layout */}
      <div className="w-full bg-white border-b border-neutral-200 sticky top-16 z-20">
        <div className="container-wide py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder={`Search ${category.name.toLowerCase()}…`}
                aria-label={`Search ${category.name}`}
                className="w-full h-10 pl-9 pr-8 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-800" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 shrink-0">
              <span
                aria-live="polite"
                aria-atomic="true"
                className="text-xs text-neutral-500 font-medium"
              >
                {filteredProducts.length} products
              </span>
              <select
                aria-label="Sort products"
                title="Sort products"
                className="h-10 px-3 bg-white border border-neutral-200 rounded-sm text-sm text-neutral-700 focus:outline-none focus:border-neutral-800"
                value={sort}
                onChange={(e) => setSort(e.target.value as "az" | "za")}
              >
                <option value="az">Name A–Z</option>
                <option value="za">Name Z–A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-8 flex gap-8">
        {/* LEFT SIDEBAR — always visible on desktop */}
        <aside className="hidden lg:block w-56 shrink-0 self-start sticky top-32">
          <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden">
            {/* Series filter */}
            <div className="px-5 py-4 border-b border-neutral-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-3">
                Series
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSeries("all")}
                  className={clsx(
                    "w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors",
                    selectedSeries === "all"
                      ? "bg-neutral-900 text-white font-semibold"
                      : "text-neutral-600 hover:bg-neutral-50",
                  )}
                >
                  All Series
                </button>
                {category.series.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSeries(s.id)}
                    className={clsx(
                      "w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors",
                      selectedSeries === s.id
                        ? "bg-neutral-900 text-white font-semibold"
                        : "text-neutral-600 hover:bg-neutral-50",
                    )}
                  >
                    {s.name.replace(/ Series$/i, "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-3">
                Collection
              </p>
              <p className="text-sm text-neutral-600">
                {category.series.length} series
              </p>
              <p className="text-sm text-neutral-600">
                {allProducts.length} total products
              </p>
            </div>
          </div>

          {/* Request quote CTA */}
          <Link
            href="/contact"
            className="mt-4 block w-full text-center bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-sm hover:bg-neutral-800 transition-colors"
          >
            Request Quote
          </Link>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-lg font-semibold text-neutral-800 mb-2">
                No products found
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setSelectedSeries("all");
                }}
                className="text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-0.5 hover:text-primary transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-neutral-200">
                {filteredProducts.map((product) => {
                  const img =
                    product.flagshipImage ||
                    "/images/products/imported/cabin/image-1.webp";
                  return (
                    <Link
                      key={product.id}
                      href={`/products/${categoryId}/${product.seriesId}/${product.id}`}
                      className="group bg-white block"
                    >
                      {/* Image */}
                      <div className="aspect-square bg-[#f5f5f5] overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={cleanName(product.name)}
                          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            if (!el.dataset.fallback) {
                              el.dataset.fallback = "1";
                              el.src =
                                "/images/products/imported/cabin/image-1.webp";
                            }
                          }}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-colors duration-300 pointer-events-none" />
                        {/* BIFMA badge */}
                        {product.metadata?.bifmaCertified && (
                          <div className="absolute top-3 left-3 bg-white border border-neutral-200 text-[9px] font-bold tracking-widest uppercase px-2 py-1 text-neutral-700">
                            BIFMA
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="px-4 pt-3 pb-5 border-t border-neutral-100 group-hover:border-neutral-300 transition-colors">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-1">
                          {product.seriesName.replace(/ Series$/i, "")}
                        </p>
                        <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                          {cleanName(product.name)}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                          {product.description?.substring(0, 60)}
                        </p>
                        <div className="flex items-center gap-1 mt-3 text-[11px] font-bold uppercase tracking-widest text-neutral-900 group-hover:text-primary transition-colors">
                          <span>View Details</span>
                          <svg
                            className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
