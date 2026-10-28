import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { SpecializationShowcase } from "@/components/sections/specialization-showcase";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata = {
  title: { absolute: siteContent.defaultSeo.title },
  description: siteContent.defaultSeo.description,
  alternates: { canonical: "/" },
};

const businessTensions = [
  { label: "Operación", detail: "Lo que ocurre cada día no siempre responde a un criterio compartido." },
  { label: "Equipo", detail: "Las responsabilidades y la formación no acompañan el ritmo del negocio." },
  { label: "Rentabilidad", detail: "Se vende, pero falta visibilidad para entender qué deja margen." },
  { label: "Experiencia", detail: "La promesa de marca se pierde entre procesos y puntos de contacto." },
] as const;

export default function Home() {
  return (
    <>
      <section className="corporate-hero relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">A-Medida / Consultoría de gestión integral</p>
            <h1 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance">El negocio mejora cuando todo encaja.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#49433b]">Acompañamos a empresas de hostelería y retail de moda para ordenar operaciones, desarrollar equipos y tomar mejores decisiones. Desde el diagnóstico hasta el seguimiento real.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="#especializaciones">Explorar especializaciones <ArrowDownRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/contacto">Hablemos del negocio</Link></Button>
            </div>
          </div>
          <div className="relative z-10 border-t border-foreground/30 pt-5 md:mb-3 md:border-l md:border-t-0 md:pl-7">
            <p className="text-xs font-semibold tracking-[0.17em] text-primary uppercase">Nuestro trabajo / 01—03</p>
            <p className="mt-5 max-w-sm text-2xl font-medium leading-snug">Leer con precisión.<br />Actuar con criterio.<br />Sostener la mejora.</p>
            <div className="mt-7 h-1 w-28 accent-rule" aria-hidden="true" />
          </div>
        </div>
        <span className="corporate-hero-orbit" aria-hidden="true" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-24" aria-labelledby="realidad-negocio">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">La realidad antes que la receta</p>
          <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl" id="realidad-negocio">Un negocio no se entiende por departamentos aislados.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Ventas, personas, espacio, procesos y números se afectan entre sí. Entramos donde esas relaciones se rompen y trabajamos con quienes pueden cambiarlas.</p>
        </div>
        <div className="grid gap-x-7 sm:grid-cols-2">
          {businessTensions.map((item, index) => <article className="border-t border-primary/30 py-6" key={item.label}>
            <p className="text-xs font-semibold text-primary">0{index + 1} / {item.label}</p>
            <p className="mt-4 text-xl leading-snug">{item.detail}</p>
          </article>)}
        </div>
      </section>

      <SpecializationShowcase />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Trabajemos desde el negocio real</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">Cuéntanos qué necesita cambiar. Empezamos por escucharlo.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Una primera conversación para entender el momento, las prioridades y dónde puede aportar valor A-Medida.</p>
        </div>
        <Button asChild size="lg"><Link href="/contacto">Contactar con A-Medida <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
      </section>
    </>
  );
}
