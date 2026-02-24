import { Leaf, Recycle, Lightbulb } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { Newsletter } from "@/components/shared/Newsletter";

export default function SustainabilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Thinking Green."
        subtitle="Sustainability is deeply rooted in our corporate philosophy. For us, sustainable action means thinking about tomorrow, today."
        showButton={false}
        backgroundImage="/images/products/imported/halo/image-1.webp"
      />
      <section className="container px-6 2xl:px-0 py-24">
        <div className="max-w-4xl space-y-8 mb-20 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            Our Responsibility for the{" "}
            <span className="text-primary italic">Future.</span>
          </h2>
          <p className="text-xl font-light text-neutral-600 leading-relaxed">
            Sustainable furniture construction starts with the selection of
            materials and doesn&apos;t end with production. We take a holistic
            view of our ecological footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-light text-neutral-900 border-l-2 border-primary pl-4">
              Eco-Friendly Materials
            </h3>
            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              We exclusively use wood from sustainable forestry (PEFC/FSC
              certified) and low-emission materials that meet the highest
              environmental standards.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Recycle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-light text-neutral-900 border-l-2 border-primary pl-4">
              Circular Economy
            </h3>
            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              Our products are designed to be disassembled and recycled. Up to
              98% of materials can be returned to the cycle, ensuring a
              closed-loop system.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-light text-neutral-900 border-l-2 border-primary pl-4">
              Energy Efficiency
            </h3>
            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              Our production site in Coppenbrügge operates with state-of-the-art
              energy management and uses 100% renewable power sources.
            </p>
          </div>
        </div>

        {/* Eco Score Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light text-neutral-900 tracking-tight mb-6">
              Our Eco-Score System
            </h2>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Transparency is the foundation of structural change. We have
              introduced an Eco-Score rating (from 1 to 10) for every product in
              our catalog. This metric evaluates the complete lifecycle of our
              furniture systems.
            </p>
            <ul className="space-y-4 text-neutral-600 font-light">
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  1
                </span>
                <span>
                  <strong>Materials:</strong> Preference for recycled aluminum,
                  FSC-certified woods, and post-consumer plastics.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  2
                </span>
                <span>
                  <strong>Manufacturing:</strong> Partnering with local
                  factories (&quot;Made in India&quot;) to significantly reduce
                  transit emissions.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  3
                </span>
                <span>
                  <strong>Longevity:</strong> Heavy-duty construction and
                  certifications ensure products don&apos;t end up in landfills
                  prematurely.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-neutral-50 p-10 md:p-12 border border-neutral-100 space-y-8 rounded-2xl">
            <div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Eco-Score: 8+
              </h3>
              <p className="text-sm text-neutral-500 font-light">
                Products passing this threshold utilize a majority of recycled
                or highly renewable materials, are produced locally minimizing
                freight footprints, and are designed for longevity.
              </p>
            </div>
            <div className="h-px bg-neutral-200"></div>
            <div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Eco-Score: 5-7
              </h3>
              <p className="text-sm text-neutral-500 font-light">
                These products meet standard environmental baselines. They
                incorporate some sustainable elements like partial recycled
                packaging, non-toxic adhesives, and replaceable wear parts.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 p-12 bg-neutral-900 text-white rounded-3xl overflow-hidden relative">
          {/* Visual decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl">
              <h3 className="text-3xl font-light mb-4">Certified Excellence</h3>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Our commitment is documented through international standards and
                certifications including ISO 14001, Blue Angel, and LEVEL 3.
              </p>
            </div>
            <div className="flex gap-8 items-center bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center text-xs text-white/80 font-bold uppercase tracking-widest">
                ISO 14k
              </div>
              <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center text-xs text-white/80 font-bold uppercase tracking-widest">
                PEFC
              </div>
              <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center text-xs text-white/80 font-bold uppercase tracking-widest">
                FSC
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <ContactTeaser />
    </main>
  );
}
