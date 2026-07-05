import Link from "next/link";

import { navItems } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t bg-[#22201d] text-[#f7f4ed]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-base font-semibold tracking-[0.12em] uppercase">A-Medida</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#d7c9ae]">
            Consultoría operativa para restaurantes, hoteles y grupos de hostelería
            que necesitan mejorar con criterio, método y seguimiento.
          </p>
        </div>
        <nav aria-label="Navegación secundaria">
          <ul className="grid grid-cols-2 gap-3 text-sm text-[#f7f4ed]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-white/15 px-4 py-5 text-xs text-[#d7c9ae] sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 A-Medida. Todos los derechos reservados.</p>
        <p>Madrid · Hospitality · Operaciones · Crecimiento</p>
      </div>
    </footer>
  );
}
