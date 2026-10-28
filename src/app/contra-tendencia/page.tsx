import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contraTendenciaPageContent, retailChallenges, retailMethod, retailServices } from "@/content/contra-tendencia";
import { createPageMetadata } from "@/content/metadata";
import { specializations } from "@/content/specializations";

export const metadata = createPageMetadata(contraTendenciaPageContent);

export default function ContraTendenciaPage() {
  return (
    <div className="retail-page">
      <section className="retail-hero relative overflow-hidden px-4 pb-16 pt-12 text-[#f9f4e9] sm:px-6 md:pb-24 md:pt-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase text-[#d3dfcc]"><span className="inline-block h-px w-10 bg-[#d3dfcc]" /> Una especialización de A-Medida</div>
          <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="mb-4 text-sm tracking-[0.12em] uppercase text-[#d3dfcc]">Consultoría para retail de moda</p>
              <h1 className="retail-serif text-[clamp(4rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.055em]">Contra-<br /><span className="italic">Tendencia.</span></h1>
            </div>
            <div className="max-w-md border-t border-[#c3d2be]/50 pt-6 md:mb-2">
              <p className="retail-serif text-3xl leading-[1.1]">La moda cambia.<br />El criterio permanece.</p>
              <p className="mt-5 text-base leading-7 text-[#dce5d6]">{contraTendenciaPageContent.hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="inline-flex items-center gap-2 border-b border-[#e7eee0] pb-1 text-sm font-semibold" href={specializations.retail.contactPath}>Hablemos de tu tienda <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link className="inline-flex items-center gap-2 border-b border-[#d3dfcc]/50 pb-1 text-sm text-[#d3dfcc]" href="#realidad-retail">Explorar <ArrowDown className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-17 flex items-center justify-between border-t border-[#c3d2be]/40 pt-4 text-xs tracking-[0.12em] uppercase text-[#c3d2be] md:mt-24"><span>Asesoramos / Implantamos / Seguimos</span><span>01 — 09</span></div>
        </div>
        <span aria-hidden="true" className="retail-hero-ring" />
      </section>

      <section className="retail-paper px-4 py-17 sm:px-6 md:py-24" id="realidad-retail" aria-labelledby="retail-problemas">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="retail-kicker">01 / Punto de partida</p>
            <h2 className="retail-serif mt-5 max-w-md text-4xl leading-[1.05] sm:text-5xl" id="retail-problemas">Lo que pasa en la tienda se ve antes en los detalles.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#3b5144]">Una persiana que abre cada día es también un sistema de personas, producto, espacio, números y decisiones. Lo leemos entero.</p>
          </div>
          <div className="divide-y divide-[#174936]/25 border-t border-[#174936]/25">
            {retailChallenges.map((challenge) => <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]" key={challenge.number}>
              <span className="text-xs font-semibold text-[#32624a]">{challenge.number}</span>
              <div><h3 className="retail-serif text-2xl leading-tight">{challenge.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#3b5144]">{challenge.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="retail-method px-4 py-17 text-[#f9f4e9] sm:px-6 md:py-23" aria-labelledby="retail-metodo">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div><p className="retail-kicker text-[#b7ceba]">02 / Método</p><h2 className="retail-serif mt-5 max-w-2xl text-4xl leading-[1.05] sm:text-5xl" id="retail-metodo">De la lectura a la tienda que funciona mejor.</h2></div>
            <p className="max-w-xs text-sm leading-6 text-[#d4e0d1]">Trabajamos con la operación en marcha, no desde un diagnóstico que se queda en papel.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {retailMethod.map((step) => <article className="border-t border-[#b7ceba]/60 pt-5" key={step.number}>
              <p className="retail-serif text-5xl italic text-[#c8dac4]">{step.number}</p><h3 className="mt-5 text-xl font-semibold">{step.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#d4e0d1]">{step.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="retail-paper px-4 py-17 sm:px-6 md:py-24" id="servicios-retail" aria-labelledby="retail-servicios">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 border-b border-[#174936]/30 pb-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div><p className="retail-kicker">03 / Áreas de trabajo</p><h2 className="retail-serif mt-5 text-4xl leading-[1.05] sm:text-5xl" id="retail-servicios">Nueve áreas.<br /><em>Un negocio.</em></h2></div>
            <p className="max-w-md text-base leading-7 text-[#3b5144]">Elegimos el alcance según el momento de cada empresa. No todas las tiendas necesitan activar todos los servicios a la vez.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {retailServices.map((service) => <article className="retail-service border-b border-[#174936]/25 py-7 pr-5 md:pr-8" key={service.number}>
              <span className="text-xs font-semibold text-[#32624a]">{service.number} / 09</span>
              <h3 className="retail-serif mt-5 text-[1.65rem] leading-[1.08]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#3b5144]">{service.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e3e9dd] px-4 py-16 sm:px-6 md:py-22" aria-labelledby="retail-resultados">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div><p className="retail-kicker">04 / Hacia dónde trabajamos</p><h2 className="retail-serif mt-5 max-w-md text-4xl leading-[1.08] sm:text-5xl" id="retail-resultados">Decisiones mejores. Una experiencia más sólida.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Mayor claridad sobre márgenes y surtido", "Equipos formados y procesos consistentes", "Tienda física y digital más conectadas", "Una marca reconocible en cada punto de contacto"].map((result) => <p className="border-l border-[#174936] bg-[#f8f5ed]/70 p-5 text-sm leading-6" key={result}>{result}</p>)}
            <p className="sm:col-span-2 text-xs leading-5 text-[#526454]">Objetivos de trabajo, sujetos a diagnóstico y alcance; no son resultados garantizados.</p>
          </div>
        </div>
      </section>

      <section className="retail-contact px-4 py-16 text-[#f9f4e9] sm:px-6 md:py-22" aria-labelledby="retail-contacto">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="retail-kicker text-[#c8dac4]">05 / Hablemos</p><h2 className="retail-serif mt-5 max-w-2xl text-4xl leading-[1.04] sm:text-6xl" id="retail-contacto">Cuéntanos qué está pasando en tu tienda.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#d4e0d1]">Una conversación para entender el contexto y decidir por dónde empezar.</p></div>
          <Button asChild className="border border-[#f9f4e9]/40 bg-[#f9f4e9] text-[#174936] hover:bg-[#e2eadf]" size="lg"><Link href={specializations.retail.contactPath}>Contactar sobre retail <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
