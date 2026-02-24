"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
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
    tag: "CONFERENCE & MEETING",
    headline: "Spaces That Inspire",
  },
  {
    src: "/images/hero/hero-4.webp",
    tag: "WORKSTATIONS",
    headline: "Built for Focus",
  },
  {
    src: "/images/hero/hero-5.webp",
    tag: "SOFT SEATING",
    headline: "Comfort Meets Design",
  },
];

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div ref={emblaRef} className="overflow-hidden relative h-[90vh] w-full">
      <div className="flex h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-[0_0_100%] h-full">
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-16 left-12">
              <p className="text-xs text-white/60 tracking-widest mb-3 uppercase">
                {slide.tag}
              </p>
              <h1 className="text-white text-5xl md:text-7xl font-playfair font-bold max-w-2xl leading-tight">
                {slide.headline}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
