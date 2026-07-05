import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Consultoría para restaurantes, hoteles y grupos de hostelería que necesitan mejorar operaciones y crecimiento.",
};

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Restaurantes, hoteles y grupos con operaciones vivas."
        description="Cada formato tiene ritmos, márgenes, equipos y clientes distintos. A-Medida trabaja desde esa realidad para proponer cambios que tengan sentido en el día a día."
      />
      <SectorCards />
      <CtaSection title="Cuéntanos el tipo de negocio y el momento en el que está." />
    </>
  );
}
