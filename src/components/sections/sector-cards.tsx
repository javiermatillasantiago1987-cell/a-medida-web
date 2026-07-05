import { sectors } from "@/lib/site-content";

export function SectorCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Sectores
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Hospitality con matices, no soluciones genéricas.
        </h2>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {sectors.map((sector) => {
          const Icon = sector.icon;

          return (
            <article className="rounded-lg border bg-card p-6" key={sector.title}>
              <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">{sector.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {sector.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
