"use client";

import { useState } from "react";
import { Product, ProductVariant } from "@/lib/catalog";
import { ArrowLeft } from "lucide-react";
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
    const m = raw.match(/^([A-Z][a-z]+)\1/);
    if (m && m[1]) return m[1];
    if (raw.length > 40 && !raw.includes(" ")) {
      const capWord = raw.match(/^[A-Z][a-z]+/);
      if (capWord) return capWord[0];
    }
    return raw;
  };
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : null,
  );

  const is3DSupported =
    categoryId === "workstations" || categoryId === "desking";

  const allImages = [
    product.flagshipImage,
    ...(selectedVariant?.galleryImages || []),
    ...(product.sceneImages || []),
  ].filter(Boolean);

  const uniqueImages = Array.from(new Set(allImages));
  if (uniqueImages.length === 0) {
    uniqueImages.push("/images/products/myel-chair-1.webp");
  }

  const [activeImage, setActiveImage] = useState(uniqueImages[0]);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    const newImages = Array.from(new Set(variant.galleryImages || []));
    if (newImages.length > 0) {
      setActiveImage(newImages[0]);
    }
  };

  const features = product.detailedInfo?.features || [
    "Ergonomic precision engineering",
    "Premium breathable mesh material",
    "Synchronized tilt mechanism",
    "Adjustable lumbar support",
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-neutral-200">
      {/* Absolute Header Overlay */}
      <div className="absolute top-24 left-0 w-full z-20 px-6 sm:px-12 flex items-center justify-between text-neutral-900 mix-blend-difference font-semibold text-[10px] tracking-[0.2em] uppercase pt-4">
        <Link
          href={categoryRoute}
          className="hover:text-neutral-900 transition-all flex items-center gap-3 border-b border-transparent hover:border-current pb-1"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO{" "}
          {seriesName.replace(/ Series$/i, "")}
        </Link>
        <span className="hidden sm:inline">ONE AND ONLY PRODUCT EXPLORER</span>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen relative max-w-[2000px] mx-auto pt-[60px] lg:pt-[80px]">
        {/* LEFT SIDE: MASSIVE EDGE-TO-EDGE IMAGES */}
        <div className="w-full lg:w-[65%] xl:w-[70%] lg:border-r lg:border-neutral-200 flex flex-col pt-0">
          <div className="grid grid-cols-1 gap-1 md:gap-2 pr-0 border-r border-transparent">
            {uniqueImages.map((img, idx) => (
              <div
                key={idx}
                className={clsx(
                  "w-full bg-neutral-100 flex items-center justify-center p-8 sm:p-16 relative overflow-hidden group",
                  idx === 0
                    ? "aspect-4/3 sm:aspect-16/10 md:col-span-1"
                    : "aspect-4/3 sm:aspect-video",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${product.name} View ${idx + 1}`}
                  className="w-full h-full object-contain animate-[fade-in_0.8s_ease-out_forward] transition-transform duration-1000 group-hover:scale-[1.03] motion-gpu"
                  loading={idx === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (!el.src.includes('/images/products/myel-chair-1.webp')) {
                      el.src = '/images/products/myel-chair-1.webp';
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* 3D Model Inject */}
          {is3DSupported && selectedVariant?.threeDModelUrl && (
            <div className="w-full aspect-square md:aspect-video bg-neutral-50 relative border-t border-neutral-200 mt-2">
              <div className="absolute top-6 left-6 z-10 text-[10px] font-bold tracking-[0.2em] text-neutral-900 uppercase">
                Interactive 3D Viewer
              </div>
              <Product3DViewer
                modelPath={selectedVariant.threeDModelUrl}
                fallbackImage={activeImage}
              />
            </div>
          )}
        </div>

        {/* RIGHT SIDE: CLEAN STICKY CONFIGURATOR */}
        <div className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] overflow-y-auto px-6 sm:px-12 py-12 hide-scrollbar">
          <div className="max-w-md mx-auto">
            {/* Header & Overview */}
            <div className="mb-12">
              <p className="typ-eyebrow mb-4">
                {seriesName.replace(/ Series$/i, "")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-sans font-medium text-neutral-900 tracking-tight leading-[1.1] mb-6">
                {cleanName(product.name)}
              </h1>
              <p className="text-[14px] text-neutral-500 leading-relaxed font-sans font-light">
                {product.detailedInfo?.overview || product.description}
              </p>
            </div>

            {/* Circular Swatch Configurator */}
            {product.variants && product.variants.length > 0 && (
              <div className="pt-8 border-t border-neutral-200 mb-12">
                <h3 className="typ-eyebrow mb-6 flex justify-between items-center">
                  <span>Configuration</span>
                  <span className="text-neutral-400 font-normal">
                    {product.variants.length} Options
                  </span>
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 mb-6">
                  {product.variants.map((variant: ProductVariant) => {
                    const isSelected = selectedVariant?.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantChange(variant)}
                        title={variant.variantName}
                        className={clsx(
                          "w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-300",
                          isSelected
                            ? "ring-2 ring-neutral-900 ring-offset-2 scale-110"
                            : "ring-1 ring-neutral-200 hover:ring-neutral-400 hover:scale-105",
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
                            if (!el.src.includes('/images/products/myel-chair-1.webp')) {
                              el.src = '/images/products/myel-chair-1.webp';
                            }
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
                {/* Active Selection Label */}
                <div className="text-xs font-semibold text-neutral-800 tracking-wide">
                  Selected{" "}
                  <span className="font-normal text-neutral-500 mx-2">|</span>{" "}
                  {selectedVariant?.variantName}
                </div>
              </div>
            )}

            {/* Sticky Actions */}
            <div className="mb-16">
              <Link
                href="/contact"
                className="group w-full btn-primary py-5"
              >
                <span className="typ-cta">
                  Request Quote
                </span>
                <ArrowLeft className="w-4 h-4 rotate-180 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Specifications Accordion Feel */}
            <div className="space-y-8 pt-8 border-t border-neutral-200">
              {/* Features */}
              {features &&
                features.length > 0 &&
                features[0] !== "MANUFACTURING" && (
                  <div>
                  <h3 className="typ-eyebrow mb-4">
                      Performance Details
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="text-neutral-600 text-[13px] font-light leading-relaxed flex items-start gap-4"
                        >
                          <span className="text-neutral-400 mt-[2px]">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Dimensions */}
              {product.detailedInfo?.dimensions && (
                <div>
                  <h3 className="typ-eyebrow mb-4">
                    Dimensions
                  </h3>
                  <p className="text-neutral-600 text-[13px] font-light leading-relaxed flex items-start gap-4">
                    <span className="text-neutral-400 mt-[2px]">—</span>
                    <span>{product.detailedInfo.dimensions}</span>
                  </p>
                </div>
              )}

              {/* Materials */}
              {product.detailedInfo?.materials &&
                product.detailedInfo.materials.length > 0 && (
                  <div>
                  <h3 className="typ-eyebrow mb-4">
                      Materials
                    </h3>
                    <ul className="space-y-3">
                      {product.detailedInfo.materials.map(
                        (material: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-neutral-600 text-[13px] font-light flex items-start gap-4"
                          >
                            <span className="text-neutral-400 mt-[2px]">—</span>
                            <span>{material}</span>
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

      {/* EDITORIAL STORYTELLING SECTION (LOWER BAND) */}
      <section className="w-full bg-neutral-50 px-6 sm:px-12 py-24 lg:py-40 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-neutral-400 uppercase mb-6 block">
              DESIGN PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light text-neutral-900 tracking-tight leading-[1.1] mb-8">
              Designed for the elements. <br />{" "}
              <span className="italic">Built for humans.</span>
            </h2>
            <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-8">
              Our engineering team rigorously tested every component of the{" "}
              {product.name} to ensure it meets the highest standards of
              ergonomic performance and sustainable durability.
            </p>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 hover:text-primary hover:border-primary transition-colors text-xs uppercase tracking-widest pb-1 font-bold"
            >
              Explore our sustainability impact
            </Link>
          </div>
          <div className="w-full aspect-4/3 bg-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                product.sceneImages?.[0] || uniqueImages[1] || uniqueImages[0]
              }
              alt="Lifestyle or environmental view"
              className="w-full h-full object-cover filter brightness-[0.95]"
            />
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `,
        }}
      />
    </main>
  );
}
