export const specializations = {
  hosteleria: {
    name: "A-Medida Hostelería",
    path: "/hosteleria",
    contactPath: "/contacto?sector=hosteleria",
    tagline: "La operación que se vive. El negocio que se dirige.",
    description:
      "Gestión, optimización y crecimiento de restaurantes, hoteles y grupos hosteleros.",
    territory: "Restaurantes / Hoteles / Grupos",
  },
  retail: {
    name: "Contra-Tendencia",
    path: "/contra-tendencia",
    contactPath: "/contacto?sector=contra-tendencia",
    tagline: "La moda cambia. El criterio permanece.",
    description:
      "Gestión, optimización y crecimiento de negocios de retail de moda.",
    territory: "Tiendas / Marcas / Retail de moda",
  },
} as const;

export type SpecializationKey = keyof typeof specializations;
