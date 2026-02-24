import { FounderCard } from "@/components/FounderCard";
import { ScrollAnimate } from "@/components/ScrollAnimate";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Story banner — full-width dark bg, 2-line company origin statement */}
      <section className="bg-stone-900 text-white py-12 px-12 text-xl leading-relaxed font-playfair text-center">
        <div className="max-w-4xl mx-auto">
          <p>
            One and Only Furniture was founded in 2011
            <br />
            to bring world-class office environments to India&apos;s leading
            corporates.
          </p>
          <p className="mt-8">
            We are the authorized franchise partner of AFC India —<br />
            delivering BIFMA-certified, sustainable workspaces to corporates,
            <br />
            governments, and institutions across the region.
          </p>
        </div>
      </section>

      {/* 2. Partnership section */}
      <section className="py-16 bg-neutral-50 text-center border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-neutral-800">
            Official AFC India Authorized Partner
          </h2>
        </div>
      </section>

      {/* 3. Two founder cards side by side */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FounderCard
              name="Ayush Kumar"
              title="Co-Founder & Director"
              image="/images/team/ayush.jpg"
              bio="MBA from SMU Singapore. 10+ years building One and Only Furniture into a leading office furniture partner. Previously consulted with PwC and EY. Specializes in B2B negotiations, workspace innovation, and enterprise client relationships."
            />
            <FounderCard
              name="Arvind Kumar"
              title="Managing Director & Co-Founder"
              image="/images/team/arvind.jpg"
              bio="20+ years in furniture manufacturing and business governance. Co-founded One and Only Furniture in 2011 with a vision to transform how India's offices work. Leads operations, supply chain, and institutional partnerships."
            />
          </div>
        </div>
      </section>

      {/* 4. 4-step process */}
      <ScrollAnimate>
        <section className="py-24 bg-stone-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center flex-1 text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Consult</h3>
                <p className="text-stone-600">
                  We understand your workspace needs and vision.
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-stone-600">
                  Creating optimized layouts and furniture plans.
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Install</h3>
                <p className="text-stone-600">
                  Professional delivery and precision assembly.
                </p>
              </div>
              <div className="flex flex-col items-center flex-1 text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Support</h3>
                <p className="text-stone-600">
                  Ongoing maintenance and long-term care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>
    </main>
  );
}
