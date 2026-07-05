import { CtaSection } from "@/components/sections/cta-section";
import { EvidenceSection } from "@/components/sections/evidence-section";
import { MethodSteps } from "@/components/sections/method-steps";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";
import { ServiceCards } from "@/components/sections/service-cards";
import { homePageContent } from "@/content/home";
import { createPageMetadata } from "@/content/metadata";
import { methodSection } from "@/content/method";
import { sectorsSection } from "@/content/sectors";
import { servicesSection } from "@/content/services";

export const metadata = createPageMetadata(homePageContent, {
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <PageHero {...homePageContent.hero} />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-2xl font-semibold">
          {homePageContent.sections.proofPoints.title}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {homePageContent.sections.proofPoints.items.map((point) => (
            <p
              className="border-l pl-4 text-sm leading-6 text-muted-foreground"
              key={point}
            >
              {point}
            </p>
          ))}
        </div>
      </section>
      <EvidenceSection content={homePageContent.sections.operationalEvidence} />
      <ServiceCards {...servicesSection} />
      <MethodSteps {...methodSection} />
      <SectorCards {...sectorsSection} />
      {homePageContent.cta ? <CtaSection content={homePageContent.cta} /> : null}
    </>
  );
}
