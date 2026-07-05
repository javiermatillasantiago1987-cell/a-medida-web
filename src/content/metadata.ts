import type { Metadata } from "next";

import { siteContent } from "@/content/site";
import type { PageContent } from "@/content/types";

export function createPageMetadata(content: Pick<PageContent, "seo">): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      siteName: siteContent.name,
      locale: siteContent.locale,
      type: "website",
    },
  };
}
