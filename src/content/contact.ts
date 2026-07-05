import type { CTA, PageContent } from "@/content/types";

export const contactPageContent: PageContent & {
  contact: {
    emailCta: CTA;
    phoneCta: CTA;
    reasonsTitle: string;
    reasons: string[];
    response: {
      title: string;
      description: string;
    };
  };
} = {
  slug: "contacto",
  seo: {
    title: "Contacto",
    description:
      "Contacta con A-Medida para hablar sobre operaciones, rentabilidad, experiencia de cliente o crecimiento hospitality.",
  },
  hero: {
    eyebrow: "Contacto",
    title: "Hablemos del momento actual del negocio.",
    description:
      "Cuéntanos qué está pasando, qué quieres ordenar y qué resultado debería cambiar. Responderemos con una primera lectura y próximos pasos razonables.",
  },
  contact: {
    emailCta: {
      label: "hola@a-medida.es",
      href: "mailto:hola@a-medida.es",
    },
    phoneCta: {
      label: "Solicitar llamada",
      href: "tel:+34000000000",
    },
    reasonsTitle: "Motivos habituales para conversar",
    reasons: [
      "Revisar la operación antes de abrir o escalar.",
      "Detectar por qué el negocio vende pero no convierte en margen.",
      "Ordenar reporting, procesos y responsabilidades.",
      "Acompañar a equipos directivos en una etapa de cambio.",
    ],
    response: {
      title: "Primera respuesta",
      description:
        "Revisamos el contexto y proponemos una conversación inicial de 30 minutos si vemos encaje y una oportunidad clara de aportar valor.",
    },
  },
};
