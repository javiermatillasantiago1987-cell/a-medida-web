import type { MethodStep, PageContent, SectionIntro } from "@/content/types";

export const methodSection: {
  intro: SectionIntro;
  items: MethodStep[];
} = {
  intro: {
    eyebrow: "Método",
    title: "De la lectura del negocio a una forma de trabajar mejor.",
  },
  items: [
    {
      title: "Diagnóstico operativo",
      description:
        "Leemos el negocio desde dentro: números, equipo, flujos, herramientas, puntos de venta y experiencia del cliente.",
    },
    {
      title: "Plan de actuación",
      description:
        "Priorizamos las palancas con más impacto y las convertimos en un plan claro, medible y asumible por la operación.",
    },
    {
      title: "Implementación acompañada",
      description:
        "Trabajamos con dirección y equipos para instalar hábitos, procesos, cuadros de mando y herramientas que se usen.",
    },
    {
      title: "Seguimiento y mejora",
      description:
        "Revisamos resultados, corregimos desviaciones y dejamos una forma de trabajo más visible, repetible y rentable.",
    },
  ],
};

export const methodPageContent: PageContent = {
  slug: "metodo",
  seo: {
    title: "Método",
    description:
      "Método de trabajo de A-Medida: diagnóstico, plan de actuación, implementación acompañada y seguimiento.",
  },
  hero: {
    eyebrow: "Método",
    title: "Un proceso claro para convertir diagnóstico en avance operativo.",
    description:
      "La mejora no se queda en una presentación. Definimos prioridades, instalamos hábitos, medimos progreso y acompañamos al equipo hasta que el cambio se incorpora a la gestión diaria.",
  },
  cta: {
    title: "El método se adapta al momento del negocio, no al revés.",
    description:
      "Cada proyecto parte de una lectura operativa concreta y se ajusta a la capacidad real de dirección y equipos.",
    primaryCta: {
      label: "Contactar",
      href: "/contacto",
    },
  },
};
