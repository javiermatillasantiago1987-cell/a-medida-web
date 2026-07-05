import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceEcosystemSection } from "@/components/sections/service-ecosystem-section";
import { createPageMetadata } from "@/content/metadata";
import {
  serviceEcosystemSection,
  servicesPageContent,
  servicesSection,
} from "@/content/services";

export const metadata = createPageMetadata(servicesPageContent);

export default function ServiciosPage() {
  return (
    <>
      <PageHero {...servicesPageContent.hero} />
      <ServiceCards {...servicesSection} />
      <ServiceEcosystemSection content={serviceEcosystemSection} />
      {servicesPageContent.cta ? (
        <CtaSection content={servicesPageContent.cta} />
      ) : null}
    </>
  );
}
