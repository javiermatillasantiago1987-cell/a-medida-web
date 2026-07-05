import { CtaSection } from "@/components/sections/cta-section";
import { MethodSteps } from "@/components/sections/method-steps";
import { PageHero } from "@/components/sections/page-hero";
import { createPageMetadata } from "@/content/metadata";
import { methodPageContent, methodSection } from "@/content/method";

export const metadata = createPageMetadata(methodPageContent);

export default function MetodoPage() {
  return (
    <>
      <PageHero {...methodPageContent.hero} />
      <MethodSteps {...methodSection} />
      {methodPageContent.cta ? <CtaSection content={methodPageContent.cta} /> : null}
    </>
  );
}
