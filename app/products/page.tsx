import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/shared/Newsletter";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Product Worlds"
        subtitle="Ergonomic, functional, and aesthetic office furniture for your specific needs."
        showButton={false}
        backgroundImage="/images/products/60x30-workstation-1.webp"
      />

      <section className="container px-6 2xl:px-0 py-24">
        <div className="max-w-4xl space-y-8 mb-20">
          <h2 className="typ-h2">
            Form follows <span className="text-primary italic">Function.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed">
            Our furniture is more than just objects in a room. They are tools
            for productivity, symbols of corporate culture, and companions for
            your daily work.
          </p>
        </div>

        <CategoryGrid />
      </section>

      <section className="container px-6 2xl:px-0 py-20">
        <div className="max-w-3xl space-y-6 mb-12">
          <p className="typ-eyebrow">What We Offer</p>
          <h2 className="typ-h2">From concept to installation.</h2>
          <p className="text-lg md:text-xl text-neutral-600">
            We design complete work environments around your team’s needs.
            Select proven systems from our partners, then configure finishes,
            dimensions and accessories to fit your space and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-neutral-200 rounded-2xl bg-white">
            <div className="flex items-center gap-3 mb-4 text-neutral-900">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="typ-h3">Design Consultation</h3>
            </div>
            <p className="text-neutral-600">
              Space planning, product selection and specification with a
              dedicated consultant.
            </p>
          </div>
          <div className="p-8 border border-neutral-200 rounded-2xl bg-white">
            <div className="flex items-center gap-3 mb-4 text-neutral-900">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="typ-h3">Fast Project Turnaround</h3>
            </div>
            <p className="text-neutral-600">
              Modular systems with reliable lead times and coordinated delivery.
            </p>
          </div>
          <div className="p-8 border border-neutral-200 rounded-2xl bg-white">
            <div className="flex items-center gap-3 mb-4 text-neutral-900">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="typ-h3">Warranty & Support</h3>
            </div>
            <p className="text-neutral-600">
              Installation, after‑sales service and product warranties for peace
              of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-20 border-y border-neutral-200">
        <div className="container px-6 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-neutral-200">
              <p className="typ-eyebrow mb-2">Individual Focus</p>
              <h3 className="typ-h3 mb-4">Workstations & Desking</h3>
              <p className="text-neutral-600 mb-6">
                Height‑adjustable desks, panels and accessories for productive
                solo work.
              </p>
              <Link
                href="/products/oando-workstations"
                className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1"
              >
                Explore <span className="text-xl">→</span>
              </Link>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-neutral-200">
              <p className="typ-eyebrow mb-2">Team Collaboration</p>
              <h3 className="typ-h3 mb-4">Soft Seating & Tables</h3>
              <p className="text-neutral-600 mb-6">
                Lounge systems and meeting tables for dynamic discussions.
              </p>
              <Link
                href="/products/oando-soft-seating"
                className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1"
              >
                Explore <span className="text-xl">→</span>
              </Link>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-neutral-200">
              <p className="typ-eyebrow mb-2">Organized Spaces</p>
              <h3 className="typ-h3 mb-4">Storage & Accessories</h3>
              <p className="text-neutral-600 mb-6">
                Lockers, cabinets and smart accessories for a clutter‑free
                office.
              </p>
              <Link
                href="/products/oando-storage"
                className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1"
              >
                Explore <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="container px-6 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/products/fluid-chair-1.webp"
                alt="Ergonomics"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h3 className="typ-h3">Health and Productivity.</h3>
              <p className="text-lg text-neutral-500 font-light leading-relaxed">
                Ergonomics is at the heart of everything we do. From
                height-adjustable desks to supportive seating, our products are
                designed to keep you moving and feeling your best throughout the
                workday.
              </p>
              <ul className="space-y-4">
                {[
                  "Stepless height adjustment for ergonomic sitting and standing.",
                  "Acoustic shielding options for focused work.",
                  "Modular storage solutions for organized workflows.",
                  "Sustainable materials and durable construction.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-700 text-lg"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section - New */}
      <section className="w-full py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container px-6 2xl:px-0 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative aspect-square">
            <Image
              src="/images/products/fluid-chair-1.webp"
              alt="Fluid Chair Detail"
              fill
              className="rounded-none shadow-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 border border-white/20 typ-eyebrow text-white/70 mb-4">
              Flagship
            </div>
            <h2 className="typ-h1 font-slogan leading-none">
              Fluid <span className="text-primary italic">X.</span>
            </h2>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              The chair that moves with you. Advanced ergonomics meeting premium
              aesthetics. Fluid X is designed for the modern executive who
              demands both comfort and style.
            </p>
            <Link
              href="/products/oando-seating/oando-seating-series/fluid-x"
              className="inline-flex items-center gap-2 text-white border-b border-white hover:border-primary hover:text-primary transition-colors text-lg uppercase tracking-[0.2em] mt-8 pb-1"
            >
              Discover Fluid X <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="container px-6 2xl:px-0 text-center">
          <p className="typ-eyebrow mb-3">Ready to Plan?</p>
          <h3 className="typ-h2 mb-6">Start your workspace project today.</h3>
          <div className="flex items-center justify-center gap-4">
            <Link href="/planning" className="btn-primary typ-cta">
              Planning Service
            </Link>
            <Link href="/contact" className="btn-outline typ-cta">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <ContactTeaser />
    </main>
  );
}
