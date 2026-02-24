"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const carouselSlides = [
  {
    src: "/images/hero/hero-1.webp",
    tag: "GOVERNMENT PROJECTS",
    headline: "Transforming Public Spaces",
  },
  {
    src: "/images/hero/hero-2.webp",
    tag: "CORPORATE EXCELLENCE",
    headline: "Modern Work Culture",
  },
  {
    src: "/images/hero/hero-3.webp",
    tag: "ERGONOMIC DESIGN",
    headline: "Health Meets Productivity",
  },
  {
    src: "/images/hero/hero-4.webp",
    tag: "EDUCATIONAL",
    headline: "Inspiring Learning Spaces",
  },
  {
    src: "/images/hero/hero-5.webp",
    tag: "SOFT SEATING",
    headline: "Comfort Meets Design",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className="relative w-full overflow-hidden h-[80vh] min-h-[600px] bg-gray-900"
      ref={emblaRef}
    >
      <div className="flex h-full">
        {carouselSlides.map((slide, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 z-10">
              <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="inline-block text-sm md:text-base font-semibold tracking-[0.2em] font-sans uppercase mb-4 text-gray-200">
                  {slide.tag}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white [text-shadow:0_2px_10px_rgb(0_0_0/40%)]">
                  {slide.headline}
                </h1>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === activeIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
