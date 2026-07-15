import type { ClientLogo, ClientLogoSection, PageContent } from "@/content/types";

export const clientLogos: ClientLogo[] = [
  {
    name: "Grupo Fiero",
    logo: "/clients/grupo-fiero.jpg",
    alt: "Logo de Grupo Fiero",
    featured: true,
    order: 1,
  },
  {
    name: "La Gaditana Taberna",
    logo: "/clients/la-gaditana-taberna.jpg",
    alt: "Logo de La Gaditana Taberna",
    featured: true,
    order: 2,
  },
  {
    name: "La Lonjería",
    logo: "/clients/la-lonjeria.jpg",
    alt: "Logo de La Lonjería",
    featured: true,
    order: 3,
  },
  {
    name: "Sagaretxe",
    logo: "/clients/sagaretxe.jpg",
    alt: "Logo de Restaurante Sagaretxe Catering",
    featured: true,
    order: 4,
  },
  {
    name: "PH",
    logo: "/clients/ph.jpg",
    alt: "Logo de PH",
    featured: false,
    order: 5,
  },
  {
    name: "Ondarreta",
    logo: "/clients/ondarreta.jpg",
    alt: "Logo de Ondarreta",
    featured: true,
    order: 6,
  },
  {
    name: "El Urogallo",
    logo: "/clients/el-urogallo.jpg",
    alt: "Logo de El Urogallo Restaurantes",
    featured: true,
    order: 7,
  },
  {
    name: "Falling Leaves",
    logo: "/clients/falling-leaves.jpg",
    alt: "Logo de Falling Leaves",
    featured: false,
    order: 8,
  },
  {
    name: "El Café de La Ópera",
    logo: "/clients/el-cafe-de-la-opera.jpg",
    alt: "Logo de El Café de La Ópera",
    featured: false,
    order: 9,
  },
  {
    name: "A'Barra Restaurante",
    logo: "/clients/abarra-restaurante.jpg",
    alt: "Logo de A'Barra Restaurante",
    featured: true,
    order: 10,
  },
  {
    name: "Cucurucho",
    logo: "/clients/cucurucho.jpg",
    alt: "Logo de Cucurucho",
    featured: false,
    order: 11,
  },
  {
    name: "Roostiq",
    logo: "/clients/roostiq.jpg",
    alt: "Logo de Roostiq Organic Mood",
    featured: true,
    order: 12,
  },
  {
    name: "Frívolos",
    logo: "/clients/frivolos.jpg",
    alt: "Logo de Frívolos",
    featured: false,
    order: 13,
  },
];

export const featuredClientLogos = clientLogos
  .filter((client) => client.featured)
  .sort((current, next) => current.order - next.order);

export const homepageClientSection: ClientLogoSection = {
  intro: {
    eyebrow: "Clientes",
    title: "Empresas que ya han confiado en A-Medida",
    description:
      "Hemos trabajado con restaurantes, hoteles, grupos hosteleros y empresas vinculadas al sector, acompañando proyectos de operación, crecimiento, comercialización y mejora del negocio.",
  },
  items: featuredClientLogos,
  cta: {
    label: "Ver todos los clientes",
    href: "/clientes",
  },
};

export const allClientsSection: ClientLogoSection = {
  intro: {
    eyebrow: "Clientes",
    title: "Clientes y proyectos",
    description:
      "Una vista completa de las marcas registradas hasta ahora para la presencia corporativa de A-Medida.",
  },
  items: [...clientLogos].sort((current, next) => current.order - next.order),
};

export const clientsPageContent: PageContent = {
  slug: "clientes",
  seo: {
    title: "Clientes",
    description:
      "Restaurantes, hoteles, grupos hosteleros y empresas vinculadas al sector que han confiado en A-Medida.",
  },
  hero: {
    eyebrow: "Clientes",
    title: "Marcas y proyectos que han trabajado con A-Medida.",
    description:
      "Una selección de empresas del sector hospitality y negocios vinculados a restauración, operación, crecimiento y mejora comercial.",
  },
};
