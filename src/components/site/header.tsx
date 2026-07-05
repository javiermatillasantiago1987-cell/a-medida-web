"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { headerCta, navigationItems } from "@/content/navigation";
import { siteContent } from "@/content/site";

const mobileMenuId = "mobile-navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          className="flex items-center gap-3 text-base font-semibold tracking-[0.12em] text-primary uppercase"
          href="/"
          onClick={closeMobileMenu}
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
          {siteContent.name}
        </Link>
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href={headerCta.href}>{headerCta.label}</Link>
          </Button>
        </div>
        <Button
          aria-controls={mobileMenuId}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          size="sm"
          type="button"
          variant="outline"
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" className="h-4 w-4" />
          ) : (
            <Menu aria-hidden="true" className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div
        className={
          isMobileMenuOpen
            ? "border-t bg-background/95 shadow-sm md:hidden"
            : "hidden border-t bg-background/95 shadow-sm md:hidden"
        }
        id={mobileMenuId}
      >
        <nav
          aria-label="Navegación móvil"
          className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6"
        >
          <ul className="grid gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-section hover:text-primary"
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {headerCta ? (
            <Button asChild className="mt-4 w-full" size="sm">
              <Link href={headerCta.href} onClick={closeMobileMenu}>
                {headerCta.label}
              </Link>
            </Button>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
