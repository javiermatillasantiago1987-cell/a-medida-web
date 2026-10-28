import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { ClientLogoSection } from "@/components/sections/client-logo-section";
import { DiagnosticSection } from "@/components/sections/diagnostic-section";
import { EvidenceSection } from "@/components/sections/evidence-section";
import { OperatingRhythmSection } from "@/components/sections/operating-rhythm-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";
import { ServiceCards } from "@/components/sections/service-cards";
import { homepageClientSection } from "@/content/clients";
import { homePageContent } from "@/content/home";
import { hospitalityNavigationItems } from "@/content/navigation";
import { sectorsSection } from "@/content/sectors";
import { servicesSection } from "@/content/services";
import { specializations } from "@/content/specializations";
import { createPageMetadata } from "@/content/metadata";

export const metadata = createPageMetadata({ slug: "hosteleria", seo: {
  title: "A-Medida Hostelería | Consultoría para restaurantes y hoteles",
  description: "Consultoría operativa para restaurantes, hoteles y grupos: margen, servicio, equipo, reporting y crecimiento con diagnóstico, implantación y seguimiento.",
}});

export default function HosteleriaPage() {
  return (
    <>
      <PageHero {...homePageContent.hero} primaryCta={{ label: "Hablar de mi negocio", href: specializations.hosteleria.contactPath }} />
      <div className="border-b bg-card">
        <nav aria-label="Explorar hostelería" className="mx-auto flex max-w-6xl flex-wrap gap-x-7 gap-y-3 px-4 py-5 text-sm font-semibold text-primary sm:px-6">
          {hospitalityNavigationItems.filter((item) => item.href !== "/hosteleria").map((item) => (
            <Link key={item.href} href={item.href}>{item.label} <ArrowUpRight className="inline h-3 w-3" aria-hidden="true" /></Link>
          ))}
        </nav>
      </div>
      <DiagnosticSection content={homePageContent.sections.diagnostic} />
      <EvidenceSection content={homePageContent.sections.operationalEvidence} />
      <ServiceCards {...servicesSection} />
      <OperatingRhythmSection content={homePageContent.sections.methodPreview} />
      <SectorCards {...sectorsSection} />
      <ClientLogoSection content={homepageClientSection} variant="home" />
      {homePageContent.cta ? <CtaSection content={{ ...homePageContent.cta, primaryCta: { label: "Contactar sobre hostelería", href: specializations.hosteleria.contactPath } }} /> : null}
    </>
  );
}
