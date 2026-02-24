"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

type ProjectItem = {
  title: string;
  images: string[];
  link: string;
  large?: boolean;
  offset?: number;
};

const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "DMRC",
    images: [
      "/projects/DMRC/IMG_20200612_123416.webp",
      "/projects/DMRC/IMG_20200612_140613.webp",
      "/projects/DMRC/IMG_20200612_175502.webp",
      "/projects/DMRC/IMG_20200612_185405.webp",
    ],
    link: "/gallery",
    large: false,
    offset: 0,
  },
  {
    title: "TVS",
    images: [
      "/projects/TVS/27-06-2025 Image 01.webp",
      "/projects/TVS/27-06-2025 Image 02.webp",
      "/projects/TVS/27-06-2025 Image 03.webp",
      "/projects/TVS/27-06-2025 Image 04.webp",
    ],
    link: "/gallery",
    large: false,
    offset: 1,
  },
  {
    title: "Titan",
    images: [
      "/projects/Titan/27-06-2025 Image 05_edited_edited.webp",
      "/projects/Titan/snapedit_1688104539759_edited.webp",
      "/projects/Titan/snapedit_1688105524557 (1).webp",
    ],
    link: "/gallery",
    large: false,
    offset: 2,
  },
  {
    title: "Usha",
    images: [
      "/projects/Usha/DSCN0741.webp",
      "/projects/Usha/DSC_0077_edited.webp",
      "/projects/Usha/DSC_0080.webp",
      "/projects/Usha/DSC_0111.webp",
    ],
    link: "/gallery",
    large: true,
    offset: 3,
  },
];

export function ServiceSection() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="container px-6 2xl:px-0">
        <div className="mb-16 text-center space-y-4">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900">
              Our Work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our recent projects and the spaces we&apos;ve transformed.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_ITEMS.map((item, index) => {
            const images = item.images.length > 0 ? item.images : [""];
            const currentImage =
              images[(tick + (item.offset ?? 0)) % images.length];

            return (
              <Reveal
                key={index}
                delay={index * 0.1}
                width="100%"
                className={item.large ? "md:col-span-2" : ""}
              >
                <Link
                  href={item.link}
                  className="group block relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm"
                >
                  {/* Image */}
                  <Image
                    src={currentImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/20 transition-colors duration-500" />

                  {/* Pill Button */}
                  <div className="absolute left-1/2 top-[450px] -translate-x-1/2">
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-900 text-sm font-medium tracking-wide shadow-lg transition-transform duration-300 group-hover:scale-105">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
