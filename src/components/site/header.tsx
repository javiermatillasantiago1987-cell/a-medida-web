"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { AmedidaLogo } from "@/components/brand/amedida-logo";
import { Button } from "@/components/ui/button";
import { headerCta, hospitalityNavigationItems, navigationItems } from "@/content/navigation";

const mobileMenuId = "mobile-navigation";

function HospitalityMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const submenuId = useId();
  const pathname = usePathname();
  const active = hospitalityNavigationItems.some((item) => item.href === pathname);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <li
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={submenuId}
        onClick={() => setOpen((current) => !current)}
        className={`flex min-h-11 items-center gap-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${mobile ? "w-full justify-between px-2 py-3 hover:bg-section" : "py-2"} ${active ? "text-primary" : "text-muted-foreground"}`}
      >
        Hostelería
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <ul
        id={submenuId}
        hidden={!open}
        className={mobile ? "mb-2 ml-2 border-l pl-3" : "absolute top-full left-0 w-72 rounded-lg border bg-background p-2 shadow-lg"}
      >
        {hospitalityNavigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-section hover:text-primary aria-[current=page]:bg-section aria-[current=page]:text-primary"
              onClick={() => { setOpen(false); onNavigate(); }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsMobileMenuOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileMenuOpen]);

  function renderItems(mobile = false) {
    return navigationItems.map((item) => item.href === "/hosteleria" ? (
      <HospitalityMenu key={item.href} mobile={mobile} onNavigate={closeMobileMenu} />
    ) : (
      <li key={item.href}>
        <Link
          className={`block rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary ${mobile ? "px-2 py-3 hover:bg-section" : "py-3"}`}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
          onClick={closeMobileMenu}
        >
          {item.label}
        </Link>
      </li>
    ));
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMobileMenuOpen) {
          closeMobileMenu();
          mobileTriggerRef.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link aria-label="A-Medida · Inicio" className="block" href="/" onClick={closeMobileMenu}>
          <AmedidaLogo variant="header" />
        </Link>
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">{renderItems()}</ul>
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm"><Link href={headerCta.href}>{headerCta.label}</Link></Button>
        </div>
        <Button
          ref={mobileTriggerRef}
          aria-controls={mobileMenuId}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          size="sm"
          type="button"
          variant="outline"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
        </Button>
      </div>
      <div
        hidden={!isMobileMenuOpen}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t bg-background shadow-sm lg:hidden"
        id={mobileMenuId}
      >
        {isMobileMenuOpen && (
          <nav aria-label="Navegación móvil" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            <ul className="grid gap-1">{renderItems(true)}</ul>
            <Button asChild className="mt-4" size="sm">
              <Link href={headerCta.href} onClick={closeMobileMenu}>{headerCta.label}</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
