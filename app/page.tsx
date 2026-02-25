export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { VideoSection } from "@/components/home/VideoSection";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { Teaser } from "@/components/home/Teaser";
import { ServiceSection } from "@/components/home/ServiceSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Recommendations } from "@/components/home/Recommendations";
import { StatsBlock } from "@/components/home/StatsBlock";
import { ClientMarquee } from "@/components/home/ClientMarquee";

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCarousel />
      <StatsBlock />
      <PartnershipSection />
      <FeaturedCarousel />
      <Recommendations />
      <Suspense fallback={<div className="h-96" />}>
        <CategoryGrid />
      </Suspense>
      <VideoSection
        title="Space for collaboration."
        description="The office is the central home base for personal exchanges and meetings with colleagues. With our modular furniture systems, versatile communication spaces can be created to foster innovation."
        buttonText="Explore Workspace Solutions"
        buttonLink="/products/oando-seating"
        posterSrc="/images/products/imported/cabin/image-1.webp"
        lightMode={true}
      />
      <ProcessSection />
      <Teaser
        title="AFC India — Engineered for Work"
        subtitle="Premium Office Systems"
        description="As an authorised AFC India franchise partner, we bring German-engineered office furniture systems to corporate India. Trusted by Titan, TVS, Usha and DMRC — now available in Patna and across Eastern India."
        imageSrc="/images/products/imported/cabin/image-1.webp"
        imageAlt="AFC India Premium Workstation System"
        reversed={false}
        lightMode={false}
        linkUrl="/products"
      />
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
      <ServiceSection />
      <ContactTeaser />
      <ClientMarquee />
    </main>
  );
}
