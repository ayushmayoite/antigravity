"use client";

import { useState, useEffect } from "react";
import type {
  CompatProduct as Product,
  ProductVariant,
} from "@/lib/getProducts";
import {
  ArrowLeft,
  ChevronRight,
  Twitter,
  Facebook,
  ShieldCheck,
  Award,
  ThumbsUp,
  Share2,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { ThreeDViewer } from "@/components/3DViewer";
import { Reviews } from "@/components/Reviews";
import { ProductGallery } from "@/components/ProductGallery";

interface ProductViewerProps {
  product: Product;
  seriesName: string;
  categoryRoute: string;
  categoryId?: string;
}

export function ProductViewer({
  product,
  seriesName,
  categoryRoute,
}: ProductViewerProps) {
  const cleanName = (raw: string) => {
    if (!raw) return raw;
    const m = raw.match(/^([A-Z][a-z]+(?:[- ][A-Z][a-z0-9]*)?)\1/);
    if (m && m[1]) return m[1];
    if (raw.length > 30 && !raw.includes(" ")) {
      const cap = raw.match(/^[A-Z][a-z]+/);
      if (cap) return cap[0];
    }
    return raw;
  };

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : null,
  );

  const is3DSupported = Boolean(
    selectedVariant?.threeDModelUrl || (product as any).threeDModelUrl,
  );

  const allImages = [
    ...(product.images || []),
    product.flagshipImage,
    ...(selectedVariant?.galleryImages || []),
    ...(product.sceneImages || []),
  ].filter(Boolean) as string[];

  const uniqueImages = Array.from(new Set(allImages));
  const fallbackImg = "/images/products/imported/fluid/image-1.webp";
  if (uniqueImages.length === 0) uniqueImages.push(fallbackImg);

  useEffect(() => {
    // Basic anonymous tracking for recommendations
    let userId = localStorage.getItem("oando_user_id");
    if (!userId) {
      userId = "user_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("oando_user_id", userId);
    }

    fetch("/api/tracking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId: product.id }),
    }).catch(console.error);
  }, [product.id]);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    // When variants change, uniqueImages will update which resets the ProductGallery index implicitly
  };

  const [is3DMode, setIs3DMode] = useState(false);

  const features =
    product.detailedInfo?.features?.filter(
      (f: string) => f && f !== "MANUFACTURING" && f !== "Sustainability",
    ) || [];

  const seriesShort = seriesName.replace(/ Series$/i, "");

  return (
    <main className="bg-white min-h-screen">
      {/* ── BREADCRUMB BAR ── */}
      <div className="border-b border-neutral-100 bg-white/90 backdrop-blur-sm sticky top-16 z-10">
        <div className="container px-6 2xl:px-0 h-10 flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
          <Link
            href="/products"
            className="hover:text-neutral-900 transition-colors"
          >
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={categoryRoute}
            className="hover:text-neutral-900 transition-colors"
          >
            {seriesShort}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-neutral-900 font-semibold">
            {cleanName(product.name)}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-112px)]">
        {/* ── LEFT: IMAGE GALLERY ── */}
        <div className="w-full lg:w-[58%] xl:w-[62%] flex flex-col pt-0 lg:pt-8 bg-[#f5f5f5]">
          <div className="flex-1 w-full max-w-[800px] mx-auto p-4 lg:p-8">
            <ProductGallery
              images={uniqueImages}
              productName={cleanName(product.name)}
            />
          </div>

          {/* 3D viewer toggle wrapper */}
          {is3DSupported && (
            <div className="w-full aspect-video bg-neutral-50 border-t border-neutral-200 relative group">
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <button
                  onClick={() => setIs3DMode(!is3DMode)}
                  className="bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest text-neutral-800 uppercase px-3 py-1.5 rounded-sm hover:bg-neutral-900 hover:text-white transition-colors border border-neutral-200"
                >
                  {is3DMode ? "View Image" : "View in 3D/AR"}
                </button>
              </div>

              {is3DMode ? (
                <div className="w-full h-full absolute inset-0 z-10">
                  <ThreeDViewer
                    src={
                      selectedVariant?.threeDModelUrl ||
                      (product as any).threeDModelUrl
                    }
                    fallbackImage={uniqueImages[0]}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* ── RIGHT: DETAILS PANEL ── */}
        <div className="w-full lg:w-[42%] xl:w-[38%] lg:sticky lg:top-[112px] lg:h-[calc(100vh-112px)] overflow-y-auto px-6 sm:px-10 lg:px-12 py-10 border-l border-neutral-100 scrollbar-hide">
          <div className="max-w-sm mx-auto lg:max-w-none">
            {/* Title block */}
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                {seriesShort}
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-neutral-900 tracking-tight leading-[1.05] mb-5">
                {cleanName(product.name)}
              </h1>
              <p className="text-[14px] text-neutral-500 leading-relaxed font-light mb-6">
                {product.detailedInfo?.overview || product.description}
              </p>

              <div className="flex gap-4 items-center mb-6">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(
                      `Check out ${product.name} at One & Only Furniture!`,
                    );
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
                      "_blank",
                    );
                  }}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                      "_blank",
                    );
                  }}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    // could add a toast here
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>
            </div>

            {/* Variant swatches */}
            {product.variants && product.variants.length > 0 && (
              <div className="pt-7 border-t border-neutral-100 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Configuration
                  </p>
                  <span className="text-xs text-neutral-400">
                    {product.variants.length} options
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5 mb-4">
                  {product.variants.map((variant: ProductVariant) => {
                    const isSelected = selectedVariant?.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantChange(variant)}
                        title={variant.variantName}
                        className={clsx(
                          "w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-200",
                          isSelected
                            ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2 scale-110"
                            : "border-neutral-200 hover:border-neutral-500 hover:scale-105",
                        )}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            variant.galleryImages?.[0] || product.flagshipImage
                          }
                          alt={variant.variantName}
                          className="w-full h-full object-cover scale-150"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            if (!el.dataset.fallback) {
                              el.dataset.fallback = "1";
                              el.src = fallbackImg;
                            }
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
                {selectedVariant && (
                  <p className="text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-800">
                      Selected:
                    </span>{" "}
                    {selectedVariant.variantName}
                  </p>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mb-8">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between bg-neutral-900 text-white px-6 py-4 hover:bg-neutral-800 transition-colors"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Request Quote
                </span>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between border border-neutral-200 text-neutral-900 px-6 py-3.5 hover:border-neutral-400 transition-colors mt-2"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Book a Consultation
                </span>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-neutral-100">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-5 h-5 text-neutral-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                  5-Year Warranty
                </span>
                <p className="text-[10px] text-neutral-500 leading-relaxed font-light">
                  Guaranteed durability and performance.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="w-5 h-5 text-neutral-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                  Made in India
                </span>
                <p className="text-[10px] text-neutral-500 leading-relaxed font-light">
                  Engineered locally to global standards.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <ThumbsUp className="w-5 h-5 text-neutral-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                  Ergonomic
                </span>
                <p className="text-[10px] text-neutral-500 leading-relaxed font-light">
                  Certified for extended use.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div className="space-y-6 pt-7 border-t border-neutral-100 text-[13px]">
              {features.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                    Features
                  </p>
                  <ul className="space-y-2">
                    {features.slice(0, 8).map((f: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-neutral-600 font-light leading-relaxed"
                      >
                        <span className="text-neutral-300 mt-0.5 shrink-0">
                          —
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.detailedInfo?.dimensions && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                    Dimensions
                  </p>
                  <p className="text-neutral-600 font-light">
                    {product.detailedInfo.dimensions}
                  </p>
                </div>
              )}

              {product.detailedInfo?.materials &&
                product.detailedInfo.materials.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                      Materials
                    </p>
                    <ul className="space-y-1.5">
                      {product.detailedInfo.materials.map(
                        (m: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-neutral-600 font-light"
                          >
                            <span className="text-neutral-300 mt-0.5 shrink-0">
                              —
                            </span>
                            <span>{m}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide px-6 2xl:px-0 pb-24">
        <Reviews productId={product.id} />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`,
        }}
      />
    </main>
  );
}
