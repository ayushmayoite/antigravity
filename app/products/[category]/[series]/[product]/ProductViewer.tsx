"use client";

import { useState } from "react";
import type {
  CompatProduct as Product,
  ProductVariant,
} from "@/lib/getProducts";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { Product3DViewer } from "./Product3DViewer";

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
  categoryId,
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

  const is3DSupported =
    categoryId === "oando-workstations" ||
    categoryId === "workstations" ||
    categoryId === "desking";

  const allImages = [
    product.flagshipImage,
    ...(selectedVariant?.galleryImages || []),
    ...(product.sceneImages || []),
  ].filter(Boolean) as string[];

  const uniqueImages = Array.from(new Set(allImages));
  const fallbackImg = "/images/products/imported/fluid/image-1.webp";
  if (uniqueImages.length === 0) uniqueImages.push(fallbackImg);

  const [activeImage, setActiveImage] = useState(uniqueImages[0]);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    const imgs = Array.from(new Set(variant.galleryImages || []));
    if (imgs.length > 0) setActiveImage(imgs[0]);
  };

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
        <div className="w-full lg:w-[58%] xl:w-[62%] flex flex-col">
          {/* Main image */}
          <div className="flex-1 bg-[#f5f5f5] flex items-center justify-center p-8 lg:p-16 relative group min-h-[50vw] lg:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt={cleanName(product.name)}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              loading="eager"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                if (!el.dataset.fallback) {
                  el.dataset.fallback = "1";
                  el.src = fallbackImg;
                }
              }}
            />
          </div>

          {/* Thumbnail strip */}
          {uniqueImages.length > 1 && (
            <div className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-hide bg-[#f5f5f5] border-t border-white/60">
              {uniqueImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={clsx(
                    "shrink-0 w-16 h-16 bg-white rounded-sm overflow-hidden border-2 transition-all",
                    activeImage === img
                      ? "border-neutral-900 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-90 hover:border-neutral-300",
                  )}
                  title={`View ${idx + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      if (!el.dataset.fallback) {
                        el.dataset.fallback = "1";
                        el.src = fallbackImg;
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* 3D viewer */}
          {is3DSupported && selectedVariant?.threeDModelUrl && (
            <div className="w-full aspect-video bg-neutral-50 border-t border-neutral-200 relative">
              <div className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                3D Viewer
              </div>
              <Product3DViewer
                modelPath={selectedVariant.threeDModelUrl}
                fallbackImage={activeImage}
              />
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
              <p className="text-[14px] text-neutral-500 leading-relaxed font-light">
                {product.detailedInfo?.overview || product.description}
              </p>
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

      <style
        dangerouslySetInnerHTML={{
          __html: `.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`,
        }}
      />
    </main>
  );
}
