import type { ServiceEcosystemSection as ServiceEcosystemSectionContent } from "@/content/types";

type ServiceEcosystemSectionProps = {
  content: ServiceEcosystemSectionContent;
};

export function ServiceEcosystemSection({
  content,
}: ServiceEcosystemSectionProps) {
  return (
    <section className="gradient-soft border-y">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          {content.intro.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {content.intro.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            {content.intro.title}
          </h2>
          {content.intro.description ? (
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {content.intro.description}
            </p>
          ) : null}
          {content.note ? (
            <p className="mt-6 border-l-2 border-primary/40 pl-4 text-sm leading-6 text-foreground">
              {content.note}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4">
          {content.groups.map((group, index) => (
            <article
              className="relative overflow-hidden rounded-lg border bg-background/90 p-5 shadow-sm"
              key={group.title}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 accent-rule"
              />
              <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-soft text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
