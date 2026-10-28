import Link from "next/link";

import { AmedidaLogo } from "@/components/brand/amedida-logo";
import { contactPageContent } from "@/content/contact";
import { siteContent } from "@/content/site";

export function Footer() {
  const { emailCta } = contactPageContent.contact;

  return (
    <footer className="border-t border-dark bg-dark text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" aria-label="A-Medida · Inicio" className="inline-block">
            <AmedidaLogo variant="footer" className="w-44 sm:w-48" />
          </Link>
          <p className="mt-3 text-sm text-dark-muted">{siteContent.footer.locationLine}</p>
        </div>
        <address className="text-sm not-italic">
          <a className="inline-block py-2 underline transition-colors hover:text-dark-muted" href={emailCta.href}>
            {emailCta.label}
          </a>
        </address>
      </div>
      <div className="mx-auto w-full max-w-6xl border-t border-white/15 px-4 py-4 text-xs text-dark-muted sm:px-6">
        <p>{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}
