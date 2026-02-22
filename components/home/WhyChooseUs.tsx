"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Durability",
    description:
      "Built with premium materials and backed by a 5-year warranty.",
  },
  {
    icon: Zap,
    title: "Ergonomic Excellence",
    description:
      "Designs that prioritize comfort and productivity all day long.",
  },
  {
    icon: PenTool,
    title: "Custom Design",
    description: "Tailored solutions to fit your brand, space, and workflow.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Service",
    description: "From consultation to installation, we handle everything.",
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 text-center reveal-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-600 tracking-tight mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Furniture that works as hard as you do. Trusted by India&apos;s
            leading organizations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 border-t border-b sm:border-b-0 sm:border-r border-neutral-200 hover:bg-neutral-50 transition-colors last:border-r-0"
            >
              <div className="mb-6 text-neutral-900">
                <feature.icon className="w-8 h-8" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-neutral-500 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
