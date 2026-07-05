import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { createPageMetadata } from "@/content/metadata";
import { servicesPageContent, servicesSection } from "@/content/services";

export const metadata = createPageMetadata(servicesPageContent);

export default function ServiciosPage() {
  return (
    <>
      <PageHero {...servicesPageContent.hero} />
      <ServiceCards {...servicesSection} />
      {servicesPageContent.cta ? (
        <CtaSection content={servicesPageContent.cta} />
      ) : null}
    </>
  );
}
