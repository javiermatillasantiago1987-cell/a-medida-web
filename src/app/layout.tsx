import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-medida.es"),
  title: {
    default: "A-Medida | Consultoría operativa para hospitality",
    template: "%s | A-Medida",
  },
  description:
    "Consultoría para restaurantes, hoteles y grupos de hostelería que quieren mejorar operaciones, rentabilidad, experiencia de cliente y crecimiento.",
  openGraph: {
    title: "A-Medida | Consultoría operativa para hospitality",
    description:
      "A-Medida ayuda a negocios de hospitality a ordenar operaciones, reporting, experiencia y crecimiento.",
    url: "https://a-medida.es",
    siteName: "A-Medida",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
