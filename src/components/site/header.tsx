import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.12em] text-primary uppercase"
        >
          A-Medida
        </Link>
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contacto">Hablar del proyecto</Link>
          </Button>
        </div>
        <Button
          aria-label="Abrir navegación"
          className="md:hidden"
          size="sm"
          variant="outline"
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
