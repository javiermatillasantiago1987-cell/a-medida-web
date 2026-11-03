import type { PageContent } from "@/content/types";
import { specializations } from "@/content/specializations";

export const contraTendenciaPageContent: PageContent = {
  slug: "contra-tendencia",
  seo: {
    title: "Contra-Tendencia | Consultoría para retail de moda",
    description:
      "Contra-Tendencia, especialización de A-Medida para tiendas de moda: operaciones, personas, producto, visual merchandising, finanzas y comercio digital.",
  },
  hero: {
    eyebrow: "Una especialización de A-Medida",
    title: "La moda cambia. El criterio permanece.",
    description:
      "Consultoría y gestión integral para negocios de retail de moda. Entramos en la tienda, leemos sus números y acompañamos a los equipos para convertir las decisiones en una mejor forma de trabajar.",
    primaryCta: { label: "Hablemos de tu tienda", href: specializations.retail.contactPath },
  },
};

export const retailChallenges = [
  { number: "01", title: "Ventas sin lectura de margen", description: "El surtido se mueve, pero no está claro qué categorías sostienen el resultado ni dónde se inmoviliza stock." },
  { number: "02", title: "Equipos en constante relevo", description: "La rotación o la falta de formación hacen que cada turno ofrezca una experiencia distinta." },
  { number: "03", title: "Una tienda que no invita a entrar", description: "Escaparate, recorrido y producto no siempre trabajan juntos para contar la historia de la marca." },
  { number: "04", title: "Canales que no se hablan", description: "Tienda física, e-commerce y comunicación avanzan con procesos y datos separados." },
] as const;

export const retailServices = [
  { number: "01", title: "Operativas y formaciones", description: "Protocolos de atención, caja, reposición, devoluciones y formación comercial con revisión de su aplicación." },
  { number: "02", title: "Recursos humanos", description: "Selección, organización, desarrollo y seguimiento del equipo de tienda para reforzar la consistencia del servicio." },
  { number: "03", title: "Visual merchandising y escaparatismo", description: "Escaparates, recorridos y presentación del producto alineados con la identidad de marca y la experiencia de compra." },
  { number: "04", title: "Sector inmobiliario", description: "Búsqueda de ubicaciones y análisis de afluencia y viabilidad comercial antes de abrir un punto de venta." },
  { number: "05", title: "Control financiero", description: "Punto de equilibrio, rentabilidad por categoría, presupuestos y previsiones en coordinación con la gestoría." },
  { number: "06", title: "Producto y compras", description: "Análisis de surtido, rotación, márgenes y mix de producto para tomar mejores decisiones de inventario." },
  { number: "07", title: "Marketing y comunicación", description: "Identidad, campañas, redes y fidelización conectadas con los objetivos comerciales de la tienda." },
  { number: "08", title: "Digitalización y e-commerce", description: "Herramientas de venta online, CRM, análisis de datos y procesos digitales que acompañan la operación." },
  { number: "09", title: "Seguridad y normativa", description: "Revisión de procesos y formación sobre normativa de consumo, protección de datos y seguridad laboral." },
] as const;

export const retailMethod = [
  { number: "I", title: "Leemos", description: "Escuchamos a dirección y equipo; observamos tienda, producto, experiencia y números para localizar las fricciones." },
  { number: "II", title: "Implantamos", description: "Elegimos las áreas prioritarias y llevamos las decisiones a procesos, formación, espacio y herramientas." },
  { number: "III", title: "Seguimos", description: "Revisamos la aplicación, medimos lo que importa y ajustamos el trabajo con el negocio en marcha." },
] as const;
