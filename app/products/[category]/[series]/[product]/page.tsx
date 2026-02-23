import { getCatalog } from "@/lib/getProducts";
import type {
  CompatCategory,
  CompatSeries,
  CompatProduct,
} from "@/lib/getProducts";
import { notFound } from "next/navigation";
import { ProductViewer } from "./ProductViewer";
import type { Metadata } from "next";
import { Suspense } from "react";

const BASE_URL = "https://oando.co.in";

export async function generateStaticParams() {
  const catalog = await getCatalog();
  const params = [];
  for (const category of catalog) {
    for (const series of category.series) {
      for (const product of series.products) {
        params.push({
          category: category.id,
          series: series.id,
          product: product.id,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; series: string; product: string }>;
}): Promise<Metadata> {
  const {
    category: categoryId,
    series: seriesId,
    product: productId,
  } = await params;
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);
  const series = category?.series.find((s: CompatSeries) => s.id === seriesId);
  const product = series?.products.find(
    (p: CompatProduct) => p.id === productId,
  );

  if (!product) return {};

  const title = `${product.name} | ${category?.name ?? ""} | One and Only Furniture`;
  const description =
    product.detailedInfo?.overview ||
    product.description ||
    `${product.name} — premium office furniture from One and Only Furniture, Patna Bihar.`;
  const image =
    product.flagshipImage || "/images/products/imported/fluid/image-1.webp";
  const url = `${BASE_URL}/products/${categoryId}/${seriesId}/${productId}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: image, width: 800, height: 800, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function ProductLoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl px-6">
        <div className="h-96 bg-neutral-100 rounded" />
        <div className="h-8 bg-neutral-100 rounded w-1/3" />
        <div className="h-4 bg-neutral-100 rounded w-2/3" />
      </div>
    </div>
  );
}

async function ProductContent({
  categoryId,
  seriesId,
  productId,
}: {
  categoryId: string;
  seriesId: string;
  productId: string;
}) {
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);
  const series = category?.series.find((s: CompatSeries) => s.id === seriesId);
  const product = series?.products.find(
    (p: CompatProduct) => p.id === productId,
  );

  if (!category || !series || !product) {
    notFound();
  }

  const url = `${BASE_URL}/products/${categoryId}/${seriesId}/${productId}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.detailedInfo?.overview || product.description,
    image: product.flagshipImage,
    url,
    brand: { "@type": "Brand", name: "One and Only Furniture" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "One and Only Furniture" },
    },
    category: category.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductViewer
        product={product}
        seriesName={series.name}
        categoryRoute={`/products/${category.id}/${series.id}`}
        categoryId={category.id}
      />
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; series: string; product: string }>;
}) {
  const {
    category: categoryId,
    series: seriesId,
    product: productId,
  } = await params;

  return (
    <Suspense fallback={<ProductLoadingSkeleton />}>
      <ProductContent
        categoryId={categoryId}
        seriesId={seriesId}
        productId={productId}
      />
    </Suspense>
  );
}
