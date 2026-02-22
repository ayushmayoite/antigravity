"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactTeaser() {
  return (
    <section className="w-full bg-neutral-900 py-24 text-center">
      <div className="container px-6 2xl:px-0">
        <h2 className="font-slogan text-5xl md:text-6xl text-white mb-6">
          Have any questions?
        </h2>
        <p className="text-xl text-neutral-400 font-light mb-10 max-w-2xl mx-auto">
          We are happy to help you with your office planning. Contact us for a
          personal consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="bg-primary text-white hover:bg-primary-hover hover:shadow-xl px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-3 group"
          >
            Contact Us{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
          <Link
            href="/support-ivr"
            className="text-white border border-white/20 hover:bg-white/10 px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-3"
          >
            Go to Support <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
