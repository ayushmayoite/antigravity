import { getCatalog } from "@/lib/getProducts";
import type { CompatCategory } from "@/lib/getProducts";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FilterGrid } from "./FilterGrid";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";

const BASE_URL = "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryId } = await params;
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);
  if (!category) return {};
  const title = `${category.name} | One and Only Furniture`;
  const description = `${category.description} Browse our full range of ${category.name.toLowerCase()} in Patna, Bihar.`;
  const url = `${BASE_URL}/products/${categoryId}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

// Hardcoded hero images per category — never rely on product images for hero
const CATEGORY_HEROES: Record<string, string> = {
  "oando-workstations": "/images/products/imported/cabin/image-1.webp",
  "oando-tables": "/images/products/imported/meeting-table/image-33.webp",
  "oando-storage": "/images/products/imported/storage/image-14.webp",
  chairs: "/images/hero/chairs.webp",
  "other-seating": "/images/hero/other-seating.webp",
  "oando-soft-seating": "/images/products/imported/cocoon/image-1.webp",
  "oando-educational": "/images/products/imported/adam/image-1.webp",
  "oando-collaborative": "/images/products/imported/pod/image-2.webp",
};

const validCategories = [
  "chairs",
  "other-seating",
  "tables",
  "storage",
  "workstations",
  "soft-seating",
  "educational",
  "collaborative",
  "oando-chairs",
  "oando-other-seating",
  "oando-tables",
  "oando-storage",
  "oando-workstations",
  "oando-soft-seating",
  "oando-educational",
  "oando-collaborative",
];

export async function generateStaticParams() {
  return [
    { category: "chairs" },
    { category: "other-seating" },
    { category: "tables" },
    { category: "storage" },
    { category: "workstations" },
    { category: "soft-seating" },
    { category: "educational" },
    { category: "collaborative" },
    { category: "oando-chairs" },
    { category: "oando-other-seating" },
    { category: "oando-tables" },
    { category: "oando-storage" },
    { category: "oando-workstations" },
    { category: "oando-soft-seating" },
    { category: "oando-educational" },
    { category: "oando-collaborative" },
  ];
}

// Loading skeleton for the grid while Supabase data resolves
function GridSkeleton() {
  return (
    <div className="container-wide py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-neutral-100 rounded-sm aspect-4/3"
          />
        ))}
      </div>
    </div>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  if (!validCategories.includes(categoryId)) return notFound();
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);

  if (catalog.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white">
        <h1 className="text-2xl font-light mb-4 text-neutral-900">
          Workspace Engineering Engine - Offline
        </h1>
        <p className="max-w-md text-neutral-500 mb-8">
          This system requires a connection to the Supabase product catalog.
          Please ensure{" "}
          <code className="bg-neutral-100 px-1 py-0.5 rounded">
            NEXT_PUBLIC_SUPABASE_URL
          </code>
          is configured in your environment variables.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-2 bg-primary text-white text-sm tracking-widest uppercase font-bold"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (!category) {
    notFound();
  }

  const heroImage =
    CATEGORY_HEROES[categoryId] ||
    "/images/products/imported/cabin/image-1.webp";

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title={category.name}
        subtitle={category.description}
        showButton={false}
        backgroundImage={heroImage}
      />
      <Suspense fallback={<GridSkeleton />}>
        <FilterGrid category={category} categoryId={categoryId} />
      </Suspense>
    </main>
  );
}
