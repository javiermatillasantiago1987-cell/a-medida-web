import type { CTA, PageContent } from "@/content/types";

export const contactPageContent: PageContent & {
  contact: {
    emailCta: CTA;
    secondaryCta?: CTA;
    reasonsTitle: string;
    reasons: string[];
    response: {
      title: string;
      description: string;
    };
    nextSteps: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
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
    secondaryCta: {
      label: "Enviar contexto por email",
      href: "mailto:hola@a-medida.es?subject=Contexto%20del%20proyecto",
    },
    reasonsTitle: "Motivos habituales para conversar",
    reasons: [
      "Revisar la operación antes de abrir, ordenar o escalar.",
      "Entender por qué el negocio vende pero no convierte en margen suficiente.",
      "Alinear reporting, procesos y responsabilidades entre áreas o unidades.",
      "Acompañar a equipos directivos en una etapa de cambio operativo.",
    ],
    response: {
      title: "Primera respuesta",
      description:
        "Revisamos el contexto y proponemos una conversación inicial si vemos encaje y una oportunidad clara de aportar valor.",
    },
    nextSteps: {
      title: "Qué ocurre después",
      items: [
        {
          title: "Conversación inicial",
          description:
            "Entendemos formato, momento del negocio, equipo, principales tensiones y objetivos de dirección.",
        },
        {
          title: "Lectura de prioridades",
          description:
            "Identificamos fricciones operativas, áreas de margen y puntos donde falta seguimiento o criterio común.",
        },
        {
          title: "Plan enfocado",
          description:
            "Proponemos una forma de trabajo concreta, con alcance, prioridades y próximos pasos asumibles.",
        },
      ],
    },
  },
};
