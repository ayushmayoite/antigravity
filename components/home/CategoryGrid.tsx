import Link from "next/link";
import { getCatalog } from "@/lib/getProducts";
import { CategoryImage } from "@/components/home/CategoryImage";

export const dynamic = "force-dynamic";

const CATEGORY_THUMBNAILS: Record<string, string> = {
  "oando-workstations": "/images/products/imported/cabin/image-1.webp",
  "oando-tables": "/images/products/imported/meeting-table/image-33.webp",
  "oando-storage": "/images/products/imported/storage/image-14.webp",
  "oando-soft-seating": "/images/products/imported/cocoon/image-1.webp",
  "oando-seating": "/images/products/imported/fluid/image-1.webp",
  "oando-educational": "/images/products/imported/accent/image-1.webp",
};

export async function CategoryGrid() {
  const oandoCatalog = await getCatalog();

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container px-6 2xl:px-0">
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-label-xs text-neutral-400 uppercase tracking-[0.25em] mb-3">
            Product Range
          </p>
          <h2 className="text-heading-2 font-light text-neutral-900">
            Explore Solutions
          </h2>
        </div>

        {/* Uniform 3-col grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {oandoCatalog.map((category) => {
            const allProducts = category.series.flatMap((s) => s.products);
            const flagshipImage =
              CATEGORY_THUMBNAILS[category.id] ||
              allProducts[0]?.flagshipImage ||
              "/images/products/60x30-workstation-1.webp";

            return (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="group relative bg-white block overflow-hidden"
              >
                {/* Uniform square image */}
                <div className="relative aspect-square overflow-hidden bg-neutral-50">
                  <CategoryImage src={flagshipImage} alt={category.name} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-500" />
                </div>

                {/* Card text */}
                <div className="px-5 py-5 border-t border-neutral-100 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-body font-medium text-neutral-900 group-hover:text-primary transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-label text-neutral-400 mt-0.5">
                      {allProducts.length} products
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 shrink-0 text-neutral-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
