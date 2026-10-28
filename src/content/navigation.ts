import type { CTA } from "@/content/types";

export const navigationItems = [
  { href: "/hosteleria", label: "Hostelería" },
  { href: "/contra-tendencia", label: "Contra-Tendencia" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/contacto", label: "Contacto" },
];

export const hospitalityNavigationItems = [
  { href: "/hosteleria", label: "Visión general" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/sectores", label: "Restaurantes, hoteles y grupos" },
  { href: "/clientes", label: "Clientes" },
];

export const headerCta: CTA = {
  label: "Hablar del proyecto",
  href: "/contacto",
};
