import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCards } from "@/components/sections/service-cards";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de consultoría operativa, reporting, experiencia de cliente y crecimiento para negocios hospitality.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Palancas concretas para mejorar operación, margen y crecimiento."
        description="Trabajamos sobre los puntos que más condicionan el resultado del negocio: cómo se organiza el equipo, cómo se mide, cómo se vende y cómo se entrega la experiencia."
      />
      <ServiceCards />
      <CtaSection title="Si hay muchas prioridades abiertas, empecemos por ordenar impacto y urgencia." />
    </>
  );
}
