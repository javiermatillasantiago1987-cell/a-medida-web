import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";
import { createPageMetadata } from "@/content/metadata";
import { sectorsPageContent, sectorsSection } from "@/content/sectors";

export const metadata = createPageMetadata(sectorsPageContent);

export default function SectoresPage() {
  return (
    <>
      <PageHero {...sectorsPageContent.hero} />
      <SectorCards {...sectorsSection} />
      {sectorsPageContent.cta ? (
        <CtaSection content={sectorsPageContent.cta} />
      ) : null}
    </>
  );
}
