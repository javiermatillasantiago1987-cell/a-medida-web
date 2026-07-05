import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { technologyPillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Tecnología, reporting y herramientas digitales aplicadas a operaciones hospitality con foco en adopción real.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnología"
        title="Herramientas digitales cuando aportan claridad y ahorran trabajo."
        description="La tecnología debe ordenar la operación, no añadir otra capa de ruido. A-Medida ayuda a definir indicadores, flujos y herramientas que los equipos puedan usar de verdad."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {technologyPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="rounded-lg border bg-card p-6" key={pillar.title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <CtaSection title="Antes de elegir herramientas, conviene saber qué decisión deben mejorar." />
    </>
  );
}
