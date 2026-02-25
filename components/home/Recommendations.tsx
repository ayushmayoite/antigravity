"use client";

import { useRecommendations } from "@/hooks/useRecommendations";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export function Recommendations() {
  const { data, isLoading, error } = useRecommendations();

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center items-center h-48 bg-neutral-50 border-y border-neutral-100">
        <Loader2 className="w-8 h-8 text-neutral-300 animate-spin" />
      </div>
    );
  }

  if (error || !data || !data.recommendations?.length) {
    return null;
  }

  return (
    <section className="py-24 bg-neutral-50 border-y border-neutral-100">
      <div className="container-wide px-6 2xl:px-0">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-light text-neutral-900 tracking-tight mb-4">
            Recommended for You
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-light">
            Based on your browsing history and our workspace engineering
            insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.recommendations.map(
            (
              rec: {
                productId: string;
                category?: string;
                productName: string;
                why: string;
                budgetEstimate?: string;
              },
              idx: number,
            ) => {
              const [cat, id] = rec.productId.split("--");
              // Assuming fallback path if parsing slug fails
              const productHref =
                cat && id ? `/products/${cat}/${id}` : `/products`;

              return (
                <Link
                  key={idx}
                  href={productHref}
                  className="group flex flex-col bg-white p-6 border border-neutral-200 hover:border-neutral-900 transition-colors h-full"
                >
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      {rec.category || "General"}
                    </span>
                    <h3 className="text-lg font-medium text-neutral-900 mt-2 mb-3">
                      {rec.productName}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed truncate">
                      {rec.why}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-900">
                      {rec.budgetEstimate || "Consult for pricing"}
                    </span>
                    <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors font-medium">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
