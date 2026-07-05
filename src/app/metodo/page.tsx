import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { MethodSteps } from "@/components/sections/method-steps";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Método",
  description:
    "Método de trabajo de A-Medida: diagnóstico, plan de actuación, implementación acompañada y seguimiento.",
};

export default function MetodoPage() {
  return (
    <>
      <PageHero
        eyebrow="Método"
        title="Un proceso claro para convertir diagnóstico en avance operativo."
        description="La mejora no se queda en una presentación. Definimos prioridades, instalamos hábitos, medimos progreso y acompañamos al equipo hasta que el cambio se incorpora a la gestión diaria."
      />
      <MethodSteps />
      <CtaSection title="El método se adapta al momento del negocio, no al revés." />
    </>
  );
}
