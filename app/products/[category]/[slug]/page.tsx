import { supabase } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProductViewer } from "./ProductViewer";
import type { Metadata } from "next";
import { Suspense } from "react";
import type { Product, CompatProduct } from "@/lib/getProducts";

const BASE_URL = "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: categoryId, slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) return {};

  const title = `${product.name} | One and Only Furniture`;
  const description =
    product.description ||
    `${product.name} — premium office furniture from One and Only Furniture.`;
  const image =
    product.flagship_image || "/images/products/imported/fluid/image-1.webp";
  const url = `${BASE_URL}/products/${categoryId}/${slug}`;

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
  slug,
}: {
  categoryId: string;
  slug: string;
}) {
  const { data: rawProduct } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!rawProduct) {
    notFound();
  }

  const p = rawProduct as Product;

  const compatProduct: CompatProduct = {
    id: p.id,
    name: p.name,
    description: p.description,
    flagshipImage: p.flagship_image,
    sceneImages: p.scene_images || [],
    images: p.images || [],
    variants: p.variants || [],
    detailedInfo: p.detailed_info || {
      overview: "",
      features: [],
      dimensions: "",
      materials: [],
    },
    metadata: p.metadata || {},
  };

  const url = `${BASE_URL}/products/${categoryId}/${p.slug}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: p.flagship_image,
    url,
    brand: { "@type": "Brand", name: "One and Only Furniture" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "One and Only Furniture" },
    },
    category: p.category_id || p.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductViewer
        product={compatProduct}
        seriesName={p.series_name}
        categoryRoute={`/products/${p.category_id || categoryId}`}
        categoryId={p.category_id || categoryId}
      />
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categoryId, slug } = await params;

  return (
    <Suspense fallback={<ProductLoadingSkeleton />}>
      <ProductContent categoryId={categoryId} slug={slug} />
    </Suspense>
  );
}
