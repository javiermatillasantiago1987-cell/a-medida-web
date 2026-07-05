import type { PageCTA, SEOContent } from "@/content/types";

export const siteContent = {
  name: "A-Medida",
  url: "https://a-medida.es",
  locale: "es_ES",
  defaultSeo: {
    title: "A-Medida | Consultoría operativa para hospitality",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que quieren mejorar operaciones, rentabilidad, experiencia de cliente y crecimiento.",
  } satisfies SEOContent,
  openGraphDescription:
    "A-Medida ayuda a negocios de hospitality a ordenar operaciones, reporting, experiencia y crecimiento.",
  footer: {
    description:
      "Consultoría operativa para restaurantes, hoteles y grupos de hostelería que necesitan mejorar con criterio, método y seguimiento.",
    copyright: "© 2026 A-Medida. Todos los derechos reservados.",
    locationLine: "Madrid · Hospitality · Operaciones · Crecimiento",
  },
};

export const defaultPageCta: PageCTA = {
  title: "Hablemos de dónde está el negocio y qué debería cambiar primero.",
  description:
    "Una primera conversación sirve para entender contexto, prioridades y si A-Medida puede aportar valor de forma concreta.",
  primaryCta: {
    label: "Contactar",
    href: "/contacto",
  },
};
