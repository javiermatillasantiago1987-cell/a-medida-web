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
        "Negocios independientes y grupos que necesitan mejorar sala, cocina, márgenes, reservas, turnos y recurrencia.",
      icon: "store",
    },
    {
      title: "Hoteles",
      description:
        "Equipos hoteleros que buscan conectar operación, revenue, restauración, reputación y experiencia del huésped.",
      icon: "hotel",
    },
    {
      title: "Grupos de hostelería",
      description:
        "Organizaciones con varias unidades que necesitan método, reporting común y escalabilidad sin perder identidad.",
      icon: "building",
    },
  ],
};

export const sectorsPageContent: PageContent = {
  slug: "sectores",
  seo: {
    title: "Sectores",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que necesitan mejorar operaciones y crecimiento.",
  },
  hero: {
    eyebrow: "Sectores",
    title: "Restaurantes, hoteles y grupos con operaciones vivas.",
    description:
      "Cada formato tiene ritmos, márgenes, equipos y clientes distintos. A-Medida trabaja desde esa realidad para proponer cambios que tengan sentido en el día a día.",
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
