import { oandoCatalog, Category } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FilterGrid } from "./FilterGrid";

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
    category.series[0]?.products[0]?.flagshipImage ||
    "/images/products/60x30-workstation-1.webp";

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

