import type { PageContent, SectionIntro, SectorItem } from "@/content/types";

export const sectorsSection: {
  intro: SectionIntro;
  items: SectorItem[];
} = {
  intro: {
    eyebrow: "Sectores",
    title: "Hospitality con matices, no soluciones genéricas.",
  },
  items: [
    {
      title: "Restaurantes",
      description:
        "Servicio de sala, cocina, reservas, covers, carta, ticket medio y recurrencia. Ordenamos el día a día para que la experiencia y el margen avancen juntos.",
      icon: "store",
    },
    {
      title: "Hoteles",
      description:
        "Conectamos F&B, recepción, experiencia del huésped, reputación, ocupación y oportunidades de revenue para que los departamentos trabajen con una lectura común.",
      icon: "hotel",
    },
    {
      title: "Grupos de hostelería",
      description:
        "Ayudamos a escalar estándares, reporting y ritmo de gestión entre unidades sin convertir cada local en una copia sin criterio propio.",
      icon: "building",
    },
  ],
};

export const sectorsPageContent: PageContent = {
  slug: "sectores",
  seo: {
    title: "Sectores",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que necesitan mejorar operaciones, reporting, consistencia y crecimiento.",
  },
  hero: {
    eyebrow: "Sectores",
    title: "Restaurantes, hoteles y grupos con operaciones vivas.",
    description:
      "Cada formato tiene ritmos, márgenes, equipos y clientes distintos. A-Medida trabaja desde esa realidad para proponer cambios que tengan sentido en el servicio, en la gestión y en la cuenta de resultados.",
  },
  cta: {
    title: "Cuéntanos el tipo de negocio y el momento en el que está.",
    description:
      "Una primera conversación ayuda a entender formato, prioridades, restricciones y margen de mejora.",
    primaryCta: {
      label: "Contactar",
      href: "/contacto",
    },
  },
};
