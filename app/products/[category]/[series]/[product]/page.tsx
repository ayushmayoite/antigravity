import { oandoCatalog, Category, Series, Product } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { ProductViewer } from "./ProductViewer";
import type { Metadata } from "next";

const BASE_URL = "https://oando.co.in";

export async function generateStaticParams() {
  const params = [];
  for (const category of oandoCatalog) {
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
  const category = oandoCatalog.find((c: Category) => c.id === categoryId);
  const series = category?.series.find((s: Series) => s.id === seriesId);
  const product = series?.products.find((p: Product) => p.id === productId);

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

  const category = oandoCatalog.find((c: Category) => c.id === categoryId);
  const series = category?.series.find((s: Series) => s.id === seriesId);
  const product = series?.products.find((p: Product) => p.id === productId);

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
