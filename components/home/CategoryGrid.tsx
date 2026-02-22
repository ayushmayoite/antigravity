"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { oandoCatalog } from "@/lib/catalog";

const CATEGORY_THUMBNAILS: Record<string, string> = {
  "oando-workstations": "/images/products/imported/cabin/image-1.webp",
  "oando-tables": "/images/products/imported/meeting-table/image-33.webp",
  "oando-storage": "/images/products/imported/storage/image-14.webp",
  "oando-soft-seating": "/images/products/imported/cocoon/image-1.webp",
  "oando-seating": "/images/products/imported/fluid/image-1.webp",
  "oando-educational": "/images/products/imported/accent/image-1.webp",
};

export function CategoryGrid() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container px-6 2xl:px-0">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[40px] md:text-[48px] font-light tracking-tight text-neutral-900 mb-4">
            Explore Solutions
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
            Discover our comprehensive range of furniture solutions designed for
            modern workspaces
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-16 lg:gap-y-24">
          {oandoCatalog.map((category) => {
            const allProducts = category.series.flatMap((s) => s.products);
            const catalogImage = allProducts[0]?.flagshipImage;
            const flagshipImage =
              CATEGORY_THUMBNAILS[category.id] ||
              catalogImage ||
              "/images/products/60x30-workstation-1.webp";

            return (
              <div key={category.id} className="group relative">
                <Link href={`/products/${category.id}`} className="block">
                  {/* Image Container - Premium Minimal */}
                  <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 mb-6 rounded-xl ring-1 ring-neutral-200/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={flagshipImage}
                      alt={category.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        if (
                          !el.src.includes(
                            "/images/products/60x30-workstation-1.webp",
                          )
                        ) {
                          el.src = "/images/products/60x30-workstation-1.webp";
                        }
                      }}
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex flex-col">
                    <Reveal delay={0.1}>
                      <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-light text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">
                        {category.name}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <p className="text-neutral-600 leading-relaxed max-w-md mt-4">
                        {category.description}
                      </p>
                    </Reveal>
                    <div className="flex items-center text-sm text-neutral-500 font-light tracking-wide mt-4">
                      <span>{category.series.length} SERIES</span>
                      <span className="mx-3 text-neutral-300">•</span>
                      <span>{allProducts.length} PRODUCTS</span>
                    </div>
                    <div className="flex items-center text-[12px] font-semibold text-neutral-900 group-hover:text-primary transition-colors duration-300 mt-4 tracking-[0.2em] uppercase">
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
