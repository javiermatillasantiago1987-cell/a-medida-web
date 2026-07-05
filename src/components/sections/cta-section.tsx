import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "Hablemos de dónde está el negocio y qué debería cambiar primero.",
  description = "Una primera conversación sirve para entender contexto, prioridades y si A-Medida puede aportar valor de forma concreta.",
}: CtaSectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/80">
            {description}
          </p>
        </div>
        <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-primary-foreground hover:bg-white hover:text-primary">
          <Link href="/contacto">
            Contactar
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
