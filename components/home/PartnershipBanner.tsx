import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PartnershipBanner() {
  return (
    <section className="bg-white py-12 border-y border-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Partner Logo Side */}
          <div className="shrink-0">
            <div className="flex items-center gap-1">
              <span className="text-6xl font-black text-[#E31A22] tracking-tighter italic">
                oando
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="max-w-2xl text-center md:text-right">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-4 block">
              Official Strategic Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 leading-tight">
              Authorized Franchise <br className="hidden md:block" /> Partner
            </h2>
            <p className="text-neutral-500 text-base mb-8 max-w-lg md:ml-auto">
              Bringing world-class manufacturing excellence and sustainable
              furniture solutions to your workspace.
            </p>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-primary transition-colors border-b-2 border-neutral-100 pb-1"
            >
              Visit oando.co.in <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
