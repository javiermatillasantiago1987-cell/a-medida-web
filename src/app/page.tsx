import { CtaSection } from "@/components/sections/cta-section";
import { ClientLogoSection } from "@/components/sections/client-logo-section";
import { DiagnosticSection } from "@/components/sections/diagnostic-section";
import { EvidenceSection } from "@/components/sections/evidence-section";
import { OperatingRhythmSection } from "@/components/sections/operating-rhythm-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";
import { ServiceCards } from "@/components/sections/service-cards";
import { homePageContent } from "@/content/home";
import { homepageClientSection } from "@/content/clients";
import { createPageMetadata } from "@/content/metadata";
import { sectorsSection } from "@/content/sectors";
import { servicesSection } from "@/content/services";

export const metadata = createPageMetadata(homePageContent, {
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <PageHero {...homePageContent.hero} />
      <DiagnosticSection content={homePageContent.sections.diagnostic} />
      <EvidenceSection content={homePageContent.sections.operationalEvidence} />
      <ServiceCards {...servicesSection} />
      <OperatingRhythmSection content={homePageContent.sections.methodPreview} />
      <SectorCards {...sectorsSection} />
      <ClientLogoSection content={homepageClientSection} variant="home" />
      {homePageContent.cta ? <CtaSection content={homePageContent.cta} /> : null}
    </>
  );
}
