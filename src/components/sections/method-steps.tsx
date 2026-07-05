import { methodSteps } from "@/lib/site-content";

export function MethodSteps() {
  return (
    <section className="bg-[#f4efe6]">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Método
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            De la lectura del negocio a una forma de trabajar mejor.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {methodSteps.map((step, index) => (
            <article className="border-l pl-5" key={step.title}>
              <p className="text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
