import { defaultPageCta } from "@/content/site";
import type { PageContent } from "@/content/types";

export const homePageContent: PageContent & {
  sections: {
    proofPoints: {
      title: string;
      items: string[];
    };
  };
} = {
  slug: "",
  seo: {
    title: "A-Medida | Consultoría operativa para hospitality",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que quieren mejorar operaciones, rentabilidad, experiencia de cliente y crecimiento.",
  },
  hero: {
    eyebrow: "Consultoría hospitality",
    title: "Operaciones más claras, negocios más rentables.",
    description:
      "A-Medida ayuda a restaurantes, hoteles y grupos de hostelería a mejorar operaciones, rentabilidad, experiencia de cliente y crecimiento con método, datos y acompañamiento.",
    primaryCta: {
      label: "Empezar conversación",
      href: "/contacto",
    },
  },
  sections: {
    proofPoints: {
      title: "Consultoría pegada al servicio real.",
      items: [
        "Consultoría pegada a la operación diaria.",
        "Lenguaje claro para dirección y equipos.",
        "Decisiones conectadas con rentabilidad, servicio y crecimiento.",
        "Métodos preparados para escalar sin convertir el negocio en una plantilla genérica.",
      ],
    },
  },
  cta: defaultPageCta,
};
