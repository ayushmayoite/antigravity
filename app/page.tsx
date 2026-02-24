import { Hero } from "@/components/home/Hero";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { VideoSection } from "@/components/home/VideoSection";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { Teaser } from "@/components/home/Teaser";
import { ServiceSection } from "@/components/home/ServiceSection";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Recommendations } from "@/components/home/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-0">
      <Hero
        variant="cinema"
        title={
          <>
            One & Only – <span className="italic font-serif">Engineered</span>
            <br />
            Workspace Systems.
          </>
        }
        subtitle="Performance-driven solutions for corporate, government, and institutions – Official AFC Regional Franchise"
        backgroundImage="/hero/titan-hero.webp"
      />
      <PartnershipSection />
      <FeaturedCarousel />
      <Recommendations />
      <CategoryGrid />
      <VideoSection
        title="Space for collaboration."
        description="The office is the central home base for personal exchanges and meetings with colleagues. With our modular furniture systems, versatile communication spaces can be created to foster innovation."
        buttonText="Explore Workspace Solutions"
        buttonLink="/products/seating"
        videoSrc="https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_25fps.mp4"
        posterSrc="/images/products/imported/cabin/image-1.webp"
        lightMode={true}
      />
      <ProcessSection />
      <Teaser
        title="OandO STARTUP 2.0"
        subtitle="The Smart Entry"
        description="Height-adjustable by electric motor, customizable, robust and 'Made in India' - and all at a convincing price. With the new technical update, new colors, and many expansion options."
        imageSrc="https://images.unsplash.com/photo-1595515106962-92182bd893a7?auto=format&fit=crop&q=80&w=1600"
        imageAlt="OandO STARTUP 2.0 Desk"
        reversed={false}
        lightMode={false}
        linkUrl="/products"
      />
      <Teaser
        title="Sustainability at the core."
        subtitle="Future Proof Workspace"
        description="Our commitment to the environment goes beyond the surface. We engineer premium office systems using 100% recycled waste wood and low-emission materials, ensuring your workspace supports both your team and the planet."
        imageSrc="/images/products/fluid-chair-1.webp"
        imageAlt="Sustainable Premium Chair Design"
        reversed={true}
        lightMode={true}
        className="bg-neutral-50"
        linkUrl="/sustainability"
      />
      <ClientLogos />
      <ServiceSection />
      <ContactTeaser />
    </main>
  );
}
