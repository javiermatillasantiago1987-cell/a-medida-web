import { ClientLogoSection } from "@/components/sections/client-logo-section";
import { PageHero } from "@/components/sections/page-hero";
import {
  allClientsSection,
  clientsPageContent,
} from "@/content/clients";
import { createPageMetadata } from "@/content/metadata";

export const metadata = createPageMetadata(clientsPageContent);

export default function ClientesPage() {
  return (
    <>
      <PageHero {...clientsPageContent.hero} />
      <ClientLogoSection content={allClientsSection} />
    </>
  );
}
