import { CtaSection } from "@/components/sections/cta-section";
import { MethodSteps } from "@/components/sections/method-steps";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCards } from "@/components/sections/sector-cards";
import { ServiceCards } from "@/components/sections/service-cards";
import { proofPoints } from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Consultoría hospitality"
        title="Operaciones más claras, negocios más rentables."
        description="A-Medida ayuda a restaurantes, hoteles y grupos de hostelería a mejorar operaciones, rentabilidad, experiencia de cliente y crecimiento con método, datos y acompañamiento."
        ctaLabel="Empezar conversación"
        ctaHref="/contacto"
      />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-2xl font-semibold">Consultoría pegada al servicio real.</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {proofPoints.map((point) => (
            <p className="border-l pl-4 text-sm leading-6 text-muted-foreground" key={point}>
              {point}
            </p>
          ))}
        </div>
      </section>
      <ServiceCards />
      <MethodSteps />
      <SectorCards />
      <CtaSection />
    </>
  );
}
