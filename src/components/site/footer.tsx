import Link from "next/link";

import { AmedidaLogo } from "@/components/brand/amedida-logo";
import { navigationItems } from "@/content/navigation";
import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-dark bg-dark text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <AmedidaLogo size="large" />
          <p className="mt-5 max-w-md text-sm leading-6 text-dark-muted">
            {siteContent.footer.description}
          </p>
        </div>
        <nav aria-label="Navegación secundaria">
          <ul className="grid grid-cols-2 gap-3 text-sm text-primary-foreground">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors hover:text-dark-muted hover:underline"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-white/15 px-4 py-5 text-xs text-dark-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>{siteContent.footer.copyright}</p>
        <p>{siteContent.footer.locationLine}</p>
      </div>
    </footer>
  );
}
