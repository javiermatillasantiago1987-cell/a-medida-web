import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactPageContent } from "@/content/contact";
import { createPageMetadata } from "@/content/metadata";
import { specializations } from "@/content/specializations";

export const metadata = createPageMetadata(contactPageContent);

export default async function ContactoPage({ searchParams }: { searchParams: Promise<{ sector?: string }> }) {
  const { sector } = await searchParams;
  const sectorName = sector === "hosteleria" ? "Hostelería" : sector === "contra-tendencia" ? "Contra-Tendencia / retail de moda" : null;
  const address = "hola@somosamedida.es";
  const emailHref = `mailto:${address}?subject=${encodeURIComponent(sectorName ? `Consulta A-Medida | ${sectorName}` : "Consulta A-Medida")}&body=${encodeURIComponent(sectorName ? `Especialización: ${sectorName}\n\nCuéntanos sobre tu negocio:\n` : "Cuéntanos sobre tu negocio:\n")}`;
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:py-24">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {contactPageContent.hero.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          {contactPageContent.hero.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {contactPageContent.hero.description}
        </p>
        {sectorName ? <p className="mt-6 inline-block border-l-2 border-primary bg-section px-4 py-2 text-sm font-semibold">Consulta sobre {sectorName}</p> : <div className="mt-6 flex flex-wrap gap-2 text-sm"><span className="mr-2 text-muted-foreground">Tu especialización:</span><a className="underline underline-offset-4" href={specializations.hosteleria.contactPath}>Hostelería</a><span aria-hidden="true">·</span><a className="underline underline-offset-4" href={specializations.retail.contactPath}>Contra-Tendencia</a></div>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={emailHref}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              Escribir a {address}
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">Se abrirá tu aplicación de correo con el asunto de la especialización preparado.</p>
      </div>
      <div className="space-y-5">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {contactPageContent.contact.reasonsTitle}
          </h2>
          <ul className="mt-6 space-y-4">
            {contactPageContent.contact.reasons.map((reason) => (
              <li
                className="border-l border-primary/30 pl-4 text-sm leading-6 text-muted-foreground"
                key={reason}
              >
                {reason}
              </li>
            ))}
          </ul>
          <div className="gradient-panel mt-8 rounded-md border bg-section p-5">
            <p className="text-sm font-semibold">
              {contactPageContent.contact.response.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {contactPageContent.contact.response.description}
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-section p-6">
          <h2 className="text-xl font-semibold">
            {contactPageContent.contact.nextSteps.title}
          </h2>
          <div className="mt-5 grid gap-4">
            {contactPageContent.contact.nextSteps.items.map((step, index) => (
              <article className="grid gap-3 sm:grid-cols-[2.25rem_1fr]" key={step.title}>
                <p className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-primary-foreground accent-rule">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
