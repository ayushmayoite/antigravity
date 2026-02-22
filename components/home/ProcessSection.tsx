"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "We discuss your requirements, budget, and timeline to understand your vision.",
  },
  {
    id: "02",
    title: "Space Planning",
    description: "Our experts create 2D/3D layouts to optimize your workspace efficiency.",
  },
  {
    id: "03",
    title: "Selection",
    description: "Choose materials, finishes, and configurations from our premium catalog.",
  },
  {
    id: "04",
    title: "Installation",
    description: "Professional delivery and assembly by our trained technical team.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky Left Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
              Seamless from Start to Finish
            </h2>
            <p className="text-neutral-500 text-lg mb-8">
              We&apos;ve refined our workflow to ensure your office transformation is smooth, on-time, and within budget.
            </p>
            <button className="bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors">
              Start Your Project
            </button>
          </div>

          {/* Scrolling Right Steps */}
          <div className="lg:w-2/3 grid gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-8 group"
              >
                <span className="text-5xl md:text-6xl font-light text-neutral-200 group-hover:text-amber-600 transition-colors duration-300">
                  {step.id}
                </span>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
