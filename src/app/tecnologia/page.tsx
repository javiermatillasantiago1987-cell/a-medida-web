import { CardGrid } from "@/components/sections/card-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { createPageMetadata } from "@/content/metadata";
import { technologyPageContent } from "@/content/technology";

export const metadata = createPageMetadata(technologyPageContent);

export default function TecnologiaPage() {
  return (
    <>
      <PageHero {...technologyPageContent.hero} />
      <CardGrid
        headingLevel={2}
        items={technologyPageContent.sections.pillars.items}
      />
      {technologyPageContent.cta ? (
        <CtaSection content={technologyPageContent.cta} />
      ) : null}
    </>
  );
}
