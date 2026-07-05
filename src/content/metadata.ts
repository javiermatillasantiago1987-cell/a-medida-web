import type { Metadata } from "next";

import { siteContent } from "@/content/site";
import type { PageContent } from "@/content/types";

type CreatePageMetadataOptions = {
  absoluteTitle?: boolean;
};

export function createPageMetadata(
  content: Pick<PageContent, "seo">,
  options: CreatePageMetadataOptions = {},
): Metadata {
  return {
    title: options.absoluteTitle
      ? {
          absolute: content.seo.title,
        }
      : content.seo.title,
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
