import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    default: siteContent.defaultSeo.title,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.defaultSeo.description,
  openGraph: {
    title: siteContent.defaultSeo.title,
    description: siteContent.openGraphDescription,
    url: siteContent.url,
    siteName: siteContent.name,
    locale: siteContent.locale,
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
