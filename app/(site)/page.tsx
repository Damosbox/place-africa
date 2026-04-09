import { HeroSection } from "@/components/sections/home/HeroSection";
import { ChannelsBar } from "@/components/sections/home/ChannelsBar";
import { BriquesOverview } from "@/components/sections/home/BriquesOverview";
import { SolutionsTeaser } from "@/components/sections/home/SolutionsTeaser";
import { SectorsTeaser } from "@/components/sections/home/SectorsTeaser";
import { IntegrationsBar } from "@/components/sections/home/IntegrationsBar";
import { CtaSection } from "@/components/sections/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChannelsBar />
      <BriquesOverview />
      <SolutionsTeaser />
      <SectorsTeaser />
      <IntegrationsBar />
      <CtaSection />
    </>
  );
}
