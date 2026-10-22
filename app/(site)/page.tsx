import { HeroSection } from "@/components/sections/home/HeroSection";
import { CapabilitiesSection } from "@/components/sections/home/CapabilitiesSection";
import { JourneySection } from "@/components/sections/home/JourneySection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { SectorsPreview } from "@/components/sections/home/SectorsPreview";
import { PilotSection } from "@/components/sections/sectors/PilotSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

/**
 * Accueil — plan d'amélioration du 21/10/2026 (lot 1).
 *
 * Ordre : promesse → fonctionnement → exemple assurance → captures réelles →
 * preuve client → aperçu des secteurs → pilote (accès démo) → contact.
 *
 * Retirées de l'accueil, fichiers conservés : BeforeAfterSection,
 * ImpactSection, MissionSection, ModulesSection, SovereigntySection. La
 * hiérarchie reste à valider par David.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <JourneySection />
      <ProductsSection />
      <ProofSection />
      <SectorsPreview />
      <PilotSection />
      <CtaSection />
    </>
  );
}
