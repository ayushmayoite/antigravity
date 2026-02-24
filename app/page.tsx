import { HeroCarousel } from "@/components/HeroCarousel";
import { ClientCard } from "@/components/ClientCard";
import { ScrollAnimate } from "@/components/ScrollAnimate";
import { supabase } from "@/lib/db";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { VideoSection } from "@/components/home/VideoSection";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { Teaser } from "@/components/home/Teaser";
import { ServiceSection } from "@/components/home/ServiceSection";
import { ProcessSection } from "@/components/home/ProcessSection";

export default async function Home() {
  const { data: clients } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true);

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-0">
      <HeroCarousel />
      <PartnershipSection />
      <FeaturedCarousel />

      <CategoryGrid />
      <VideoSection
        title="Space for collaboration."
        description="The office is the central home base for personal exchanges and meetings with colleagues. With our modular furniture systems, versatile communication spaces can be created to foster innovation."
        buttonText="Explore Workspace Solutions"
        buttonLink="/products/seating"
        posterSrc="/images/products/imported/cabin/image-1.webp"
        lightMode={true}
      />
      <ProcessSection />
      <Teaser
        title="OandO STARTUP 2.0"
        subtitle="The Smart Entry"
        description="Height-adjustable by electric motor, customizable, robust and 'Made in India' - and all at a convincing price. With the new technical update, new colors, and many expansion options."
        imageSrc="/images/products/imported/cabin/image-1.webp"
        imageAlt="OandO STARTUP 2.0 Desk"
        reversed={false}
        lightMode={false}
        linkUrl="/products"
      />
      <ScrollAnimate>
        <Teaser
          title="Sustainability at the core."
          subtitle="Future Proof Workspace"
          description="Our commitment to the environment goes beyond the surface. We engineer premium office systems using 100% recycled waste wood and low-emission materials, ensuring your workspace supports both your team and the planet."
          imageSrc="/images/afc/oando-seating--fluid-x/image-1.webp"
          imageAlt="Sustainable Premium Chair Design"
          reversed={true}
          lightMode={true}
          className="bg-neutral-50"
          linkUrl="/sustainability"
        />
      </ScrollAnimate>
      {/* Our Work Section */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Our Work</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Trusted by leading organizations across East India to deliver
              exceptional workspace solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients?.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      <ServiceSection />
      <ContactTeaser />
    </main>
  );
}
