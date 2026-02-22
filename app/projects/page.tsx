import { Hero } from "@/components/home/Hero";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Our Projects"
        subtitle="Featured office design projects and case studies"
        showButton={false}
        backgroundImage="/hero/franklin-hero.webp"
      />
      
      <section className="container px-6 2xl:px-0 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-teal-50 rounded-2xl p-12 border border-teal-100">
            <div className="text-6xl mb-6">🏗️</div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Coming Soon</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Our projects portfolio section is currently under development.
            </p>
            <p className="text-lg text-neutral-500">
              Soon you'll be able to explore our completed office projects, 
              see before-and-after transformations, and read detailed case studies 
              showcasing our furniture solutions in real-world environments.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-white rounded-xl border border-neutral-100">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Corporate Offices</h3>
              <p className="text-neutral-600 mb-4">
                Modern workspace solutions for businesses
              </p>
              <div className="text-sm text-neutral-500 space-y-1">
                <p>• Tech company headquarters</p>
                <p>• Financial institutions</p>
                <p>• Professional services firms</p>
              </div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-neutral-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Education & Healthcare</h3>
              <p className="text-neutral-600 mb-4">
                Specialized furniture for institutions
              </p>
              <div className="text-sm text-neutral-500 space-y-1">
                <p>• University campuses</p>
                <p>• Hospitals and clinics</p>
                <p>• Research facilities</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-white rounded-xl border border-neutral-100">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Hospitality</h3>
              <p className="text-neutral-600 mb-4">
                Luxury furniture for hotels and resorts
              </p>
              <div className="text-sm text-neutral-500 space-y-1">
                <p>• Hotel lobbies</p>
                <p>• Conference centers</p>
                <p>• Restaurant seating</p>
              </div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-neutral-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Startups & Co-working</h3>
              <p className="text-neutral-600 mb-4">
                Flexible solutions for modern workspaces
              </p>
              <div className="text-sm text-neutral-500 space-y-1">
                <p>• Co-working spaces</p>
                <p>• Startup offices</p>
                <p>• Creative studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
