import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactReasons } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con A-Medida para hablar sobre operaciones, rentabilidad, experiencia de cliente o crecimiento hospitality.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:py-24">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Contacto
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          Hablemos del momento actual del negocio.
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Cuéntanos qué está pasando, qué quieres ordenar y qué resultado debería
          cambiar. Responderemos con una primera lectura y próximos pasos razonables.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="mailto:hola@a-medida.es">
              <Mail aria-hidden="true" className="h-4 w-4" />
              hola@a-medida.es
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+34000000000">
              <Phone aria-hidden="true" className="h-4 w-4" />
              Solicitar llamada
            </a>
          </Button>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Motivos habituales para conversar</h2>
        <ul className="mt-6 space-y-4">
          {contactReasons.map((reason) => (
            <li className="border-l pl-4 text-sm leading-6 text-muted-foreground" key={reason}>
              {reason}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-md bg-[#f4efe6] p-5">
          <p className="text-sm font-semibold">Primera respuesta</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Revisamos el contexto y proponemos una conversación inicial de 30 minutos
            si vemos encaje y una oportunidad clara de aportar valor.
          </p>
        </div>
      </div>
    </section>
  );
}
