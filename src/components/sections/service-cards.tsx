import { services } from "@/lib/site-content";

export function ServiceCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Servicios
        </p>
        <h2 className="mt-3 text-3xl font-semibold">Palancas para mejorar con foco.</h2>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              className="rounded-lg border bg-card p-6 shadow-sm"
              key={service.title}
            >
              <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
