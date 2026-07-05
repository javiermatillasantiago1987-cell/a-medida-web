import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { siteContent } from "@/content/site";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

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
    <html className={ubuntu.variable} lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
