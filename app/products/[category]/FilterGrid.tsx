"use client";

import { Category } from "@/lib/catalog";
import Link from "next/link";
import { Filter, ChevronDown, Search as SearchIcon, Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { useState, useMemo } from "react";
import clsx from "clsx";

export function FilterGrid({ category, categoryId }: { category: Category; categoryId: string }) {
    const [selectedSeries, setSelectedSeries] = useState<string>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [bifmaOnly, setBifmaOnly] = useState(false);
    const [warranty5, setWarranty5] = useState(false);
    const [sort, setSort] = useState<"az" | "za">("az");

    // Extract all products from all series in this category
    const allProducts = useMemo(() => {
        return category.series.flatMap(series => 
            series.products.map(product => ({
                ...product,
                seriesId: series.id,
                seriesName: series.name
            }))
        );
    }, [category]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        let list = [...allProducts];
        if (selectedSeries !== "all") {
            list = list.filter(p => p.seriesId === selectedSeries);
        }
        if (query.trim()) {
            const q = query.trim().toLowerCase();
            list = list.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.seriesName.toLowerCase().includes(q)
            );
        }
        if (bifmaOnly) {
            list = list.filter(p => p.metadata?.bifmaCertified);
        }
        if (warranty5) {
            list = list.filter(p => (p.metadata?.warrantyYears || 0) >= 5);
        }
        list.sort((a, b) =>
            sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        return list;
    }, [allProducts, selectedSeries, query, bifmaOnly, warranty5, sort]);

    const cleanName = (raw: string) => {
        if (!raw) return raw;
        // Collapse repeated leading token like "MargasMargas..."
        const m = raw.match(/^([A-Z][a-z]+)\1/);
        if (m && m[1]) return m[1];
        // If the string is very long and contains no spaces (likely concatenated), try to slice first capitalized token
        if (raw.length > 40 && !raw.includes(" ")) {
            const capWord = raw.match(/^[A-Z][a-z]+/);
            if (capWord) return capWord[0];
        }
        return raw;
    };

    return (
        <section className="container px-6 2xl:px-0 py-12 md:py-16">
            {/* Top Toolbar */}
            {allProducts.length > 0 && (
                <div className="flex flex-col gap-4 mb-8 border-b border-neutral-200 pb-3">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-sm text-sm transition-colors"
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-semibold text-neutral-800">Filters</span>
                        </button>
                        
                        <div className="hidden md:flex items-center gap-2">
                            <Filter className="w-4 h-4 text-neutral-800" />
                            <span className="typ-eyebrow text-neutral-700">{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                            <span className="font-semibold text-neutral-800">{filteredProducts.length} results</span>
                            <div className="relative border border-neutral-300 rounded-sm px-3 py-1.5 flex items-center gap-2 bg-white">
                                <span className="text-neutral-700">Sort</span>
                                <select
                                    className="bg-transparent outline-none text-neutral-700"
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value as "az" | "za")}
                                >
                                    <option value="az">Name A–Z</option>
                                    <option value="za">Name Z–A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder={`Search ${category.name.toLowerCase()}...`}
                            className="w-full h-11 pl-9 pr-3 bg-white border border-neutral-200 rounded-sm focus:outline-none focus:border-neutral-900"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
                {/* Left Sidebar (Filters) */}
                <div className={clsx(
                    "w-full md:w-64 shrink-0 space-y-8",
                    !isFilterOpen && "md:block hidden" // keep open on md by default for mockup, but toggleable if we want
                )}>
                    {/* Basic Series Filter implementation as Accordion */}
                    <div className="border-b border-neutral-200 pb-6">
                        <h3 className="typ-eyebrow mb-4 flex justify-between items-center cursor-pointer">
                            SERIES <ChevronDown className="w-3 h-3" />
                        </h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="series"
                                    checked={selectedSeries === "all"}
                                    onChange={() => setSelectedSeries("all")}
                                    className="w-4 h-4 border-neutral-300 rounded-full text-primary focus:ring-primary cursor-pointer accent-neutral-800"
                                />
                                <span className={clsx("text-sm transition-colors", selectedSeries === "all" ? "text-black font-semibold" : "text-neutral-600 group-hover:text-black")}>
                                    All Series
                                </span>
                            </label>
                            {category.series.map(s => (
                                <label key={s.id} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="series"
                                        checked={selectedSeries === s.id}
                                        onChange={() => setSelectedSeries(s.id)}
                                        className="w-4 h-4 border-neutral-300 rounded-full text-primary focus:ring-primary cursor-pointer accent-neutral-800"
                                    />
                                    <span className={clsx("text-sm transition-colors", selectedSeries === s.id ? "text-black font-semibold" : "text-neutral-600 group-hover:text-black")}>
                                        {s.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Quick Toggles */}
                    <div className="border-b border-neutral-200 pb-6">
                        <h3 className="typ-eyebrow mb-4 flex justify-between items-center">REFINE <ChevronDown className="w-3 h-3 text-neutral-400" /></h3>
                        <label className="flex items-center gap-3 cursor-pointer group mb-3">
                            <input
                                type="checkbox"
                                checked={bifmaOnly}
                                onChange={() => setBifmaOnly(v => !v)}
                                className="w-4 h-4 border-neutral-300 rounded-sm text-primary focus:ring-primary cursor-pointer accent-neutral-800"
                            />
                            <span className={clsx("text-sm transition-colors", bifmaOnly ? "text-black font-semibold" : "text-neutral-600 group-hover:text-black")}>
                                BIFMA Certified
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={warranty5}
                                onChange={() => setWarranty5(v => !v)}
                                className="w-4 h-4 border-neutral-300 rounded-sm text-primary focus:ring-primary cursor-pointer accent-neutral-800"
                            />
                            <span className={clsx("text-sm transition-colors", warranty5 ? "text-black font-semibold" : "text-neutral-600 group-hover:text-black")}>
                                Warranty 5+ Years
                            </span>
                        </label>
                    </div>
                </div>

                {/* Right Product Grid */}
                <div className="flex-1">
                    <Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                            {filteredProducts.map((product) => {
                                const productImage = product.flagshipImage || "/images/products/myel-chair-1.webp";
                                return (
                                    <Link
                                        key={product.id}
                                        href={`/products/${categoryId}/${product.seriesId}/${product.id}`}
                                        className="group block relative"
                                    >
                                        <div className="aspect-square mb-4 bg-white relative">
                                            <img
                                                src={productImage}
                                                alt={product.name}
                                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    const el = e.currentTarget as HTMLImageElement;
                                                    if (el.src.indexOf('images/products/myel-chair-1.webp') === -1) {
                                                        el.src = '/images/products/myel-chair-1.webp';
                                                    }
                                                }}
                                            />
                                            {/* Top Right Action Icon (Tooltip/Dots) */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-100 p-1.5 rounded-sm">
                                                <div className="flex gap-0.5">
                                                    <div className="w-1 h-1 bg-black rounded-full" />
                                                    <div className="w-1 h-1 bg-black rounded-full" />
                                                    <div className="w-1 h-1 bg-black rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            {/* Meta tags */}
                                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                                                <span>{category.name}</span>
                                                {product.metadata?.bifmaCertified && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-neutral-800 flex items-center gap-1">
                                                            <Check className="w-3 h-3" /> BIFMA
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                            
                                            {/* Title and Heart Icon */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-base font-bold text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">
                                                        {cleanName(product.name)}
                                                    </h3>
                                                    <p className="text-sm text-neutral-500 font-light mt-1">{product.seriesName}</p>
                                                </div>
                                                <svg className="w-5 h-5 text-neutral-400 hover:text-red-500 cursor-pointer transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </Reveal>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 bg-neutral-50 rounded-sm mt-8">
                            <p className="text-base text-neutral-700 font-semibold mb-2">No results matched your filters.</p>
                            <button
                                onClick={() => setSelectedSeries("all")}
                                className="text-neutral-900 font-semibold border-b border-black hover:text-black transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {allProducts.length === 0 && (
                <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <p className="text-xl text-neutral-700 font-light">Coming Soon.</p>
                    <Link href="/products" className="text-primary hover:underline mt-4 inline-block text-sm">
                        Back to all categories
                    </Link>
                </div>
            )}
        </section>
    );
}

