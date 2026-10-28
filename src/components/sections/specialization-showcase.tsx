import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { specializations } from "@/content/specializations";

export function SpecializationShowcase() {
  return (
    <section aria-labelledby="especializaciones" className="border-y bg-[#e9e4d9] py-18 md:py-24" id="especializaciones-seccion">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5 border-b border-foreground/20 pb-7">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Especializaciones / 02</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl" id="especializaciones">Un método. Dos mundos de negocio.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">Cada sector tiene sus propios códigos. La forma de trabajar parte de ellos.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="hospitality-editorial group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-sm border border-[#ae9d86] p-7 sm:p-9">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">01 / Hostelería</span>
              <span className="text-xs">A-Medida</span>
            </div>
            <div aria-hidden="true" className="hospitality-editorial-mark">H</div>
            <div className="relative z-10">
              <p className="mb-3 max-w-sm text-sm leading-6">{specializations.hosteleria.territory}</p>
              <h3 className="max-w-md text-4xl font-semibold leading-[1.02] sm:text-5xl">{specializations.hosteleria.name}</h3>
              <p className="mt-5 max-w-md text-sm leading-6">{specializations.hosteleria.description}</p>
              <Link className="mt-7 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold transition-[gap] group-hover:gap-4" href={specializations.hosteleria.path}>Descubrir Hostelería <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </article>
          <article className="retail-editorial group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-sm p-7 text-[#f8f3e6] sm:p-9">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">02 / Retail de moda</span>
              <span className="text-xs">A-Medida</span>
            </div>
            <div aria-hidden="true" className="retail-editorial-mark">C—T</div>
            <div className="relative z-10">
              <p className="mb-3 max-w-sm text-sm leading-6 text-[#cbd8c8]">{specializations.retail.territory}</p>
              <h3 className="retail-serif max-w-md text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.94]">Contra-<br />Tendencia</h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#dce7d8]">{specializations.retail.description}</p>
              <Link className="mt-7 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold transition-[gap] group-hover:gap-4" href={specializations.retail.path}>Descubrir Contra-Tendencia <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
