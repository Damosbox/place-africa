import { HeroSection } from "@/components/sections/home/HeroSection";
import { MissionSection } from "@/components/sections/home/MissionSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { AcquisitionBanner } from "@/components/sections/home/AcquisitionBanner";
import { CtaSection } from "@/components/sections/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <AcquisitionBanner />
      <CtaSection />
    </>
  );
}
