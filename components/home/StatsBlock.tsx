"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Real business stats — verified figures for One and Only Furniture
// Founded 2010, operations started 2011
const STATS = [
  { value: "15", label: "Years of Excellence", suffix: "+" },
  { value: "259", label: "Projects Delivered", suffix: "+" },
  { value: "120", label: "Corporate Clients", suffix: "+" },
  { value: "20", label: "Locations Served", suffix: "+" },
];

function StatItem({
  value,
  label,
  suffix,
  index,
}: {
  value: string;
  label: string;
  suffix: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center md:items-start"
    >
      <div className="text-5xl md:text-6xl font-light text-neutral-900 tracking-tight tabular-nums">
        {value}
        <span className="text-3xl md:text-4xl text-neutral-400">{suffix}</span>
      </div>
      <div className="mt-2 text-xs text-neutral-500 font-semibold tracking-[0.15em] uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsBlock() {
  return (
    <section className="w-full bg-neutral-50 border-y border-neutral-100 py-20 md:py-28">
      <div className="container px-6 2xl:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
