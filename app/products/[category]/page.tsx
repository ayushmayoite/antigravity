import { oandoCatalog, Category } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FilterGrid } from "./FilterGrid";
import type { Metadata } from "next";

const BASE_URL = "https://oando.co.in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = oandoCatalog.find((c: Category) => c.id === categoryId);
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
  "oando-seating": "/images/products/imported/fluid/image-1.webp",
  "oando-soft-seating": "/images/products/imported/cocoon/image-1.webp",
  "oando-educational": "/images/products/imported/adam/image-1.webp",
  "oando-collaborative": "/images/products/imported/pod/image-2.webp",
};

export async function generateStaticParams() {
  return oandoCatalog.map((c: Category) => ({ category: c.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = oandoCatalog.find((c: Category) => c.id === categoryId);
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
      <FilterGrid category={category} categoryId={categoryId} />
    </main>
  );
}
