import { CtaSection } from "@/components/sections/cta-section";
import { CompactServiceList } from "@/components/sections/compact-service-list";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { createPageMetadata } from "@/content/metadata";
import {
  compactServiceListSection,
  servicesPageContent,
  servicesSection,
} from "@/content/services";

export const metadata = createPageMetadata(servicesPageContent);

export default function ServiciosPage() {
  return (
    <>
      <PageHero {...servicesPageContent.hero} />
      <ServiceCards {...servicesSection} />
      <CompactServiceList content={compactServiceListSection} />
      {servicesPageContent.cta ? (
        <CtaSection content={servicesPageContent.cta} />
      ) : null}
    </>
  );
}
