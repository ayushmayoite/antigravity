"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const FEATURED_PRODUCTS = [
  {
    id: "fluid-x",
    name: "Fluid X",
    category: "Seating",
    description:
      "The next generation of ergonomic performance. Designed for movement.",
    image: "/images/afc/oando-seating--fluid-x/image-1.webp",
    link: "/products/oando-seating/oando-seating--fluid-x",
    theme: "light",
  },
  {
    id: "cabin",
    name: "Cabin Workstation",
    category: "Workstations",
    description:
      "Modular architecture to support any way of working, anywhere.",
    image: "/images/products/imported/cabin/image-1.webp",
    link: "/products/oando-workstations/cabin-l-shape",
    theme: "dark",
  },
  {
    id: "cocoon",
    name: "Cocoon Pod",
    category: "Collaborative",
    description:
      "Where focus meets comfort. The perfect acoustic pod for deep work.",
    image: "/images/products/imported/cocoon/image-1.webp",
    link: "/products/oando-collaborative/oando-collaborative--cocoon-pod",
    theme: "light",
  },
];

export function FeaturedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="w-full bg-neutral-50 py-24 md:py-40">
      <div className="container px-6 2xl:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="hidden"
            >
              Our projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-neutral-900 border-b border-neutral-900 pb-1 hover:text-primary hover:border-primary-hover transition-colors"
            >
              Explore All Collections{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          ref={containerRef}
        >
          {/* Main Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
            className="our-work md:col-span-8 group relative w-full aspect-4/3 md:aspect-auto md:h-[700px] overflow-hidden bg-stone-100 rounded-lg"
          >
            <Link
              href={FEATURED_PRODUCTS[0].link}
              className="absolute inset-0 z-20"
            >
              <span className="sr-only">View {FEATURED_PRODUCTS[0].name}</span>
            </Link>
            <Image
              src={FEATURED_PRODUCTS[0].image}
              alt={FEATURED_PRODUCTS[0].name}
              fill
              className="object-contain p-6 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-stone-200/50 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-2xl z-10 text-neutral-900">
              <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                {FEATURED_PRODUCTS[0].name}
              </h3>
              <p className="text-lg md:text-xl font-light text-neutral-600 line-clamp-2 md:line-clamp-none">
                {FEATURED_PRODUCTS[0].description}
              </p>
            </div>
          </motion.div>

          {/* Side Features */}
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-12 h-full">
            {FEATURED_PRODUCTS.slice(1).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.4 + idx * 0.2 },
                  },
                }}
                className="our-work group relative flex-1 aspect-4/3 md:aspect-auto overflow-hidden bg-stone-100 rounded-lg"
              >
                <Link href={product.link} className="absolute inset-0 z-20">
                  <span className="sr-only">View {product.name}</span>
                </Link>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-stone-200/50 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-8 z-10 text-neutral-900">
                  <h3 className="text-2xl font-medium tracking-tight mb-2">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
