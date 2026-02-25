"use client";

import type {
  CompatCategory as Category,
  CompatProduct as Product,
} from "@/lib/getProducts";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Search as SearchIcon,
  X,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { useState, useMemo, useCallback, Suspense } from "react";
import clsx from "clsx";

// ─── Types ──────────────────────────────────────────────────────────────────

interface FlatProduct extends Product {
  seriesId: string;
  seriesName: string;
}

type SortOption = "az" | "za" | "newest";

interface ActiveFilters {
  series: string;
  subcategory: string[];
  useCase: string[];
  priceRange: string[];
  material: string[];
  hasHeadrest: boolean;
  isHeightAdjustable: boolean;
  bifmaCertified: boolean;
  isStackable: boolean;
  sort: SortOption;
  query: string;
  minEcoScore: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildUrl(pathname: string, filters: ActiveFilters): string {
  const params = new URLSearchParams();
  if (filters.series !== "all") params.set("series", filters.series);
  if (filters.query) params.set("q", filters.query);
  if (filters.sort !== "az") params.set("sort", filters.sort);
  filters.subcategory.forEach((v) => params.append("sub", v));
  filters.useCase.forEach((v) => params.append("use", v));
  filters.priceRange.forEach((v) => params.append("price", v));
  filters.material.forEach((v) => params.append("mat", v));
  if (filters.hasHeadrest) params.set("headrest", "1");
  if (filters.isHeightAdjustable) params.set("height-adj", "1");
  if (filters.bifmaCertified) params.set("bifma", "1");
  if (filters.isStackable) params.set("stackable", "1");
  if (filters.minEcoScore > 0)
    params.set("eco", filters.minEcoScore.toString());
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

function parseFilters(sp: URLSearchParams): ActiveFilters {
  return {
    series: sp.get("series") ?? "all",
    query: sp.get("q") ?? "",
    sort: (sp.get("sort") as SortOption) ?? "az",
    subcategory: sp.getAll("sub"),
    useCase: sp.getAll("use"),
    priceRange: sp.getAll("price"),
    material: sp.getAll("mat"),
    hasHeadrest: sp.get("headrest") === "1",
    isHeightAdjustable: sp.get("height-adj") === "1",
    bifmaCertified: sp.get("bifma") === "1",
    isStackable: sp.get("stackable") === "1",
    minEcoScore: parseInt(sp.get("eco") || "0", 10),
  };
}

function countActive(f: ActiveFilters): number {
  let n = 0;
  if (f.series !== "all") n++;
  if (f.subcategory.length) n += f.subcategory.length;
  if (f.useCase.length) n += f.useCase.length;
  if (f.priceRange.length) n += f.priceRange.length;
  if (f.material.length) n += f.material.length;
  if (f.hasHeadrest) n++;
  if (f.isHeightAdjustable) n++;
  if (f.bifmaCertified) n++;
  if (f.isStackable) n++;
  if (f.minEcoScore > 0) n++;
  return n;
}

// ─── Accordion Section ───────────────────────────────────────────────────────

function AccordionSection({
  title,
  count,
  children,
  defaultOpen = false,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left group"
        aria-expanded={open}
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-600 group-hover:text-neutral-900 transition-colors flex items-center gap-2">
          {title}
          {count !== undefined && count > 0 && (
            <span className="bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none">
              {count}
            </span>
          )}
        </span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
        )}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

// ─── Multi-checkbox list ──────────────────────────────────────────────────────

function CheckList({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  if (!options.length)
    return (
      <p className="text-xs text-neutral-400 italic">No options available</p>
    );
  return (
    <ul className="space-y-1.5">
      {options.map((opt) => (
        <li key={opt}>
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onToggle(opt)}
              className="w-3.5 h-3.5 accent-neutral-900"
            />
            <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors capitalize">
              {opt}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

// ─── Price Range Buttons ─────────────────────────────────────────────────────

const PRICE_RANGES = ["budget", "mid", "premium", "luxury"];
function PriceButtons({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRICE_RANGES.map((p) => (
        <button
          key={p}
          onClick={() => onToggle(p)}
          className={clsx(
            "px-3 py-1.5 text-xs rounded-sm border transition-all capitalize font-medium",
            selected.includes(p)
              ? "bg-neutral-900 text-white border-neutral-900"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400",
          )}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

// ─── Feature Toggle ───────────────────────────────────────────────────────────

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer py-1">
      <span className="text-sm text-neutral-600">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={clsx(
          "relative w-9 h-5 rounded-full transition-colors flex items-center shrink-0",
          checked ? "bg-neutral-900" : "bg-neutral-200",
        )}
      >
        <span
          className={clsx(
            "absolute w-3.5 h-3.5 bg-white rounded-full shadow transition-all",
            checked ? "left-[18px]" : "left-[3px]",
          )}
        />
      </button>
    </label>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  categoryId,
}: {
  product: FlatProduct;
  categoryId: string;
}) {
  const firstImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : product.flagshipImage;

  const [imgSrc, setImgSrc] = useState(
    firstImage || "/images/fallback/category.webp",
  );
  const displayName = product.name;
  const ecoScore = product.metadata?.sustainabilityScore || 0;

  return (
    <Link
      href={`/products/${categoryId}/${product.id}`}
      className="group block bg-white border border-neutral-100 hover:border-neutral-300 transition-all duration-200 hover:shadow-sm"
    >
      {/* Image */}
      <div className="relative w-full aspect-square bg-stone-50 rounded-md overflow-hidden">
        <Image
          src={imgSrc}
          alt={displayName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-103"
          onError={() => setImgSrc("/images/fallback/category.webp")}
        />
        {product.metadata?.bifmaCertified && (
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-600 px-2.5 py-1.5 rounded-sm shadow-sm">
            BIFMA
          </div>
        )}
        {product.metadata?.priceRange && (
          <div className="absolute top-2 right-2 bg-neutral-900/75 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1.5 rounded-sm shadow-sm">
            {product.metadata.priceRange}
          </div>
        )}
        {ecoScore > 0 && (
          <div
            className={clsx(
              "absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-sm shadow-sm",
              ecoScore > 7
                ? "bg-green-100/90 text-green-800"
                : "bg-white/90 text-neutral-600",
            )}
          >
            Eco-Score: {ecoScore}/10
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium mb-1">
          {product.seriesName}
        </p>
        <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors leading-tight">
          {displayName}
        </h3>
        <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        {product.metadata?.useCase && product.metadata.useCase.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {product.metadata.useCase.slice(0, 2).map((uc) => (
              <span
                key={uc}
                className="text-[9px] uppercase tracking-wider font-medium text-neutral-400 bg-neutral-50 px-1.5 py-0.5 rounded-sm"
              >
                {uc}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

// ─── Active Filter Chips ─────────────────────────────────────────────────────

function ActiveChips({
  filters,
  onRemove,
  onClearAll,
  total,
}: {
  filters: ActiveFilters;
  onRemove: (key: string, value?: string) => void;
  onClearAll: () => void;
  total: number;
}) {
  if (total === 0) return null;
  const chips: { label: string; key: string; value?: string }[] = [];
  if (filters.series !== "all")
    chips.push({ label: `Series: ${filters.series}`, key: "series" });
  filters.subcategory.forEach((v) =>
    chips.push({ label: v, key: "subcategory", value: v }),
  );
  filters.useCase.forEach((v) =>
    chips.push({ label: v, key: "useCase", value: v }),
  );
  filters.priceRange.forEach((v) =>
    chips.push({ label: `${v} range`, key: "priceRange", value: v }),
  );
  filters.material.forEach((v) =>
    chips.push({ label: v, key: "material", value: v }),
  );
  if (filters.hasHeadrest)
    chips.push({ label: "With headrest", key: "hasHeadrest" });
  if (filters.isHeightAdjustable)
    chips.push({ label: "Height adjustable", key: "isHeightAdjustable" });
  if (filters.bifmaCertified)
    chips.push({ label: "BIFMA certified", key: "bifmaCertified" });
  if (filters.isStackable)
    chips.push({ label: "Stackable", key: "isStackable" });
  if (filters.minEcoScore > 0)
    chips.push({
      label: `Eco Score >= ${filters.minEcoScore}`,
      key: "minEcoScore",
    });

  return (
    <div className="flex flex-wrap items-center gap-2 py-3 border-b border-neutral-100">
      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
        Active:
      </span>
      {chips.map((chip) => (
        <button
          key={`${chip.key}-${chip.value ?? ""}`}
          onClick={() => onRemove(chip.key, chip.value)}
          className="flex items-center gap-1.5 bg-neutral-900 text-white text-xs px-2.5 py-1 rounded-sm hover:bg-neutral-700 transition-colors"
        >
          <span className="capitalize">{chip.label}</span>
          <X className="w-3 h-3" />
        </button>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs text-neutral-500 hover:text-neutral-900 underline transition-colors ml-1"
      >
        Clear all
      </button>
    </div>
  );
}

// ─── Inner Component (needs useSearchParams) ──────────────────────────────────

function AdvancedFilterGridInner({
  category,
  categoryId,
}: {
  category: Category;
  categoryId: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Parse filters from URL
  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);

  // Flat product list
  const allProducts = useMemo(
    () =>
      category.series.flatMap((s) =>
        s.products.map((p) => ({ ...p, seriesId: s.id, seriesName: s.name })),
      ),
    [category],
  );

  // Build filter option lists from available products
  const options = useMemo(() => {
    const sub = new Set<string>();
    const useCase = new Set<string>();
    const material = new Set<string>();

    allProducts.forEach((p) => {
      if (p.metadata?.subcategory) sub.add(p.metadata.subcategory);
      p.metadata?.useCase?.forEach((u) => useCase.add(u));
      p.metadata?.material?.forEach((m) => material.add(m));
    });

    return {
      subcategory: [...sub].sort(),
      useCase: [...useCase].sort(),
      material: [...material].sort(),
    };
  }, [allProducts]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    // Series
    if (filters.series !== "all") {
      list = list.filter((p) => p.seriesId === filters.series);
    }

    // Search
    if (filters.query.trim()) {
      const q = filters.query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    // Subcategory
    if (filters.subcategory.length) {
      list = list.filter(
        (p) =>
          p.metadata?.subcategory &&
          filters.subcategory.includes(p.metadata.subcategory),
      );
    }

    // Use case
    if (filters.useCase.length) {
      list = list.filter((p) =>
        p.metadata?.useCase?.some((u) => filters.useCase.includes(u)),
      );
    }

    // Price range
    if (filters.priceRange.length) {
      list = list.filter(
        (p) =>
          p.metadata?.priceRange &&
          filters.priceRange.includes(p.metadata.priceRange),
      );
    }

    // Material
    if (filters.material.length) {
      list = list.filter((p) =>
        p.metadata?.material?.some((m) => filters.material.includes(m)),
      );
    }

    // Feature toggles
    if (filters.hasHeadrest) {
      list = list.filter((p) => p.metadata?.hasHeadrest);
    }
    if (filters.isHeightAdjustable) {
      list = list.filter((p) => p.metadata?.isHeightAdjustable);
    }
    if (filters.bifmaCertified) {
      list = list.filter((p) => p.metadata?.bifmaCertified);
    }
    if (filters.isStackable) {
      list = list.filter((p) => p.metadata?.isStackable);
    }

    // Eco Score
    if (filters.minEcoScore > 0) {
      list = list.filter(
        (p) => (p.metadata?.sustainabilityScore || 0) >= filters.minEcoScore,
      );
    }

    // Sort
    list.sort((a, b) =>
      filters.sort === "za"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name),
    );

    return list;
  }, [allProducts, filters]);

  // Update URL on filter change
  const updateFilters = useCallback(
    (next: Partial<ActiveFilters>) => {
      const updated = { ...filters, ...next };
      router.push(buildUrl(pathname, updated), { scroll: false });
    },
    [filters, router, pathname],
  );

  const toggleArray = useCallback(
    (
      key: "subcategory" | "useCase" | "priceRange" | "material",
      value: string,
    ) => {
      const current = filters[key] as string[];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      updateFilters({ [key]: next });
    },
    [filters, updateFilters],
  );

  const removeChip = useCallback(
    (key: string, value?: string) => {
      if (
        key === "subcategory" ||
        key === "useCase" ||
        key === "priceRange" ||
        key === "material"
      ) {
        const current = filters[key] as string[];
        updateFilters({ [key]: current.filter((v) => v !== value) });
      } else if (
        key === "hasHeadrest" ||
        key === "isHeightAdjustable" ||
        key === "bifmaCertified" ||
        key === "isStackable"
      ) {
        updateFilters({ [key]: false });
      } else if (key === "minEcoScore") {
        updateFilters({ minEcoScore: 0 });
      } else if (key === "series") {
        updateFilters({ series: "all" });
      }
    },
    [filters, updateFilters],
  );

  const clearAll = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  const activeCount = countActive(filters);

  // ── Sidebar content (shared between desktop + drawer) ──
  const SidebarContent = (
    <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2">
          <Filter className="w-3.5 h-3.5" />
          Filters
          {activeCount > 0 && (
            <span className="bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none">
              {activeCount}
            </span>
          )}
        </span>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-[10px] text-neutral-500 hover:text-neutral-900 underline transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Series */}
      <AccordionSection
        title="Series"
        count={filters.series !== "all" ? 1 : 0}
        defaultOpen
      >
        <div className="space-y-1.5">
          <button
            onClick={() => updateFilters({ series: "all" })}
            className={clsx(
              "w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors",
              filters.series === "all"
                ? "bg-neutral-900 text-white font-semibold"
                : "text-neutral-600 hover:bg-neutral-50",
            )}
          >
            All Series
          </button>
          {category.series.map((s) => (
            <button
              key={s.id}
              onClick={() => updateFilters({ series: s.id })}
              className={clsx(
                "w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors",
                filters.series === s.id
                  ? "bg-neutral-900 text-white font-semibold"
                  : "text-neutral-600 hover:bg-neutral-50",
              )}
            >
              {s.name}
            </button>
          ))}
        </div>
      </AccordionSection>

      {/* Subcategory */}
      {options.subcategory.length > 0 && (
        <AccordionSection
          title="Type"
          count={filters.subcategory.length}
          defaultOpen={filters.subcategory.length > 0}
        >
          <CheckList
            options={options.subcategory}
            selected={filters.subcategory}
            onToggle={(v) => toggleArray("subcategory", v)}
          />
        </AccordionSection>
      )}

      {/* Use Case */}
      {options.useCase.length > 0 && (
        <AccordionSection
          title="Use Case"
          count={filters.useCase.length}
          defaultOpen={filters.useCase.length > 0}
        >
          <CheckList
            options={options.useCase}
            selected={filters.useCase}
            onToggle={(v) => toggleArray("useCase", v)}
          />
        </AccordionSection>
      )}

      {/* Price Range */}
      <AccordionSection
        title="Price Range"
        count={filters.priceRange.length}
        defaultOpen={filters.priceRange.length > 0}
      >
        <PriceButtons
          selected={filters.priceRange}
          onToggle={(v) => toggleArray("priceRange", v)}
        />
      </AccordionSection>

      {/* Material */}
      {options.material.length > 0 && (
        <AccordionSection
          title="Material"
          count={filters.material.length}
          defaultOpen={filters.material.length > 0}
        >
          <CheckList
            options={options.material}
            selected={filters.material}
            onToggle={(v) => toggleArray("material", v)}
          />
        </AccordionSection>
      )}

      {/* Feature Toggles */}
      <AccordionSection
        title="Features"
        count={
          (filters.hasHeadrest ? 1 : 0) +
          (filters.isHeightAdjustable ? 1 : 0) +
          (filters.bifmaCertified ? 1 : 0) +
          (filters.isStackable ? 1 : 0)
        }
      >
        <div className="space-y-1">
          <Toggle
            label="With Headrest"
            checked={filters.hasHeadrest}
            onChange={(v) => updateFilters({ hasHeadrest: v })}
          />
          <Toggle
            label="Height Adjustable"
            checked={filters.isHeightAdjustable}
            onChange={(v) => updateFilters({ isHeightAdjustable: v })}
          />
          <Toggle
            label="BIFMA Certified"
            checked={filters.bifmaCertified}
            onChange={(v) => updateFilters({ bifmaCertified: v })}
          />
          <Toggle
            label="Stackable"
            checked={filters.isStackable}
            onChange={(v) => updateFilters({ isStackable: v })}
          />
        </div>
      </AccordionSection>

      {/* Eco Score Slider */}
      <AccordionSection
        title="Sustainability"
        count={filters.minEcoScore > 0 ? 1 : 0}
      >
        <div className="space-y-3 pt-1">
          <label
            htmlFor="eco-score-range"
            className="text-sm text-neutral-600 block"
          >
            Min Eco-Score: {filters.minEcoScore}
          </label>
          <input
            id="eco-score-range"
            type="range"
            min="0"
            max="10"
            step="1"
            value={filters.minEcoScore}
            onChange={(e) =>
              updateFilters({ minEcoScore: parseInt(e.target.value, 10) })
            }
            className="w-full accent-neutral-900"
          />
        </div>
      </AccordionSection>
    </div>
  );

  return (
    <section
      className="w-full bg-[#f8f9fa]"
      aria-label={`${category.name} product catalog`}
    >
      {/* ── Top Toolbar ── */}
      <div className="w-full bg-white border-b border-neutral-200 sticky top-16 z-20">
        <div className="container-wide py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Mobile filter button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 h-10 px-3 bg-white border border-neutral-200 rounded-sm text-sm text-neutral-700 hover:border-neutral-400 transition-colors shrink-0"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeCount > 0 && (
                <span className="bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                  {activeCount}
                </span>
              )}
            </button>

            {/* Search */}
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder={`Search ${category.name.toLowerCase()}…`}
                aria-label={`Search ${category.name}`}
                className="w-full h-10 pl-9 pr-8 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-neutral-800 transition-colors"
                value={filters.query}
                onChange={(e) => updateFilters({ query: e.target.value })}
              />
              {filters.query && (
                <button
                  onClick={() => updateFilters({ query: "" })}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-800" />
                </button>
              )}
            </div>

            {/* Count + Sort */}
            <div className="flex items-center gap-3 shrink-0">
              <span
                aria-live="polite"
                aria-atomic="true"
                className="text-xs text-neutral-500 font-medium whitespace-nowrap"
              >
                {filteredProducts.length} / {allProducts.length} products
              </span>
              <select
                aria-label="Sort products"
                className="h-10 px-3 bg-white border border-neutral-200 rounded-sm text-sm text-neutral-700 focus:outline-none focus:border-neutral-800"
                value={filters.sort}
                onChange={(e) =>
                  updateFilters({ sort: e.target.value as SortOption })
                }
              >
                <option value="az">Name A–Z</option>
                <option value="za">Name Z–A</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Active filter chips */}
          <ActiveChips
            filters={filters}
            onRemove={removeChip}
            onClearAll={clearAll}
            total={activeCount}
          />
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="container-wide py-8 flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 self-start sticky top-32">
          {SidebarContent}
        </aside>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <SearchIcon className="w-5 h-5 text-neutral-400" />
              </div>
              <p className="text-base font-semibold text-neutral-700 mb-1">
                No products found
              </p>
              <p className="text-sm text-neutral-400 mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearAll}
                className="text-sm underline text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="transition-all duration-300 animate-fadein"
                >
                  <ProductCard product={product} categoryId={categoryId} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div
            className="fixed inset-y-0 left-0 w-80 max-w-full bg-[#f8f9fa] z-50 overflow-y-auto lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200 bg-white">
              <span className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
                {activeCount > 0 && (
                  <span className="bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                    {activeCount}
                  </span>
                )}
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-neutral-500 hover:text-neutral-900" />
              </button>
            </div>
            <div className="p-4">{SidebarContent}</div>
            <div className="sticky bottom-0 bg-white border-t border-neutral-100 p-4 flex gap-2">
              {activeCount > 0 && (
                <button
                  onClick={() => {
                    clearAll();
                    setDrawerOpen(false);
                  }}
                  className="flex-1 h-10 border border-neutral-200 text-sm text-neutral-700 rounded-sm hover:bg-neutral-50 transition-colors"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setDrawerOpen(false)}
                className="flex-1 h-10 bg-neutral-900 text-white text-sm rounded-sm hover:bg-neutral-700 transition-colors font-medium"
              >
                View {filteredProducts.length} results
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

// ─── Exported wrapper (Suspense for useSearchParams) ─────────────────────────

export function FilterGrid({
  category,
  categoryId,
}: {
  category: Category;
  categoryId: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-64 flex items-center justify-center text-neutral-400 text-sm">
          Loading products…
        </div>
      }
    >
      <AdvancedFilterGridInner category={category} categoryId={categoryId} />
    </Suspense>
  );
}
