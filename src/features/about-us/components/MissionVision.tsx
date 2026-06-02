// src/features/about-us/components/HistoriaMisionVision.tsx
//
// Sección 2 de "Quiénes Somos": Historia, Misión y Visión.
// Separado de NuestrosValores para respetar el principio de una idea por sección.
// Fondo: bg-white — contrasta con HeroAbout (bg-dark) y NuestrosValores (bg-surface-cream).
//
// La frase institucional "Las acciones de hoy..." se ubica aquí como cierre natural
// de la narrativa de historia y propósito.

export const MissionVision: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="historia-heading"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Encabezado ── */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
            Nuestra historia
          </p>
          <h2
            id="historia-heading"
            className="text-3xl font-bold tracking-tight text-dark sm:text-4xl"
          >
            Un sueño que se convirtió en misión
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* ── Historia — un párrafo, lo esencial ── */}
        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-8 text-dark-soft sm:text-lg">
          Valores Sinaí nació con un propósito claro: predicar el evangelio de Jesús y extender
          Su amor a todos, utilizando como herramientas la cultura, la educación, el deporte y
          lo espiritual. Soñamos con ser un espacio abierto y transformador, donde cada persona
          pueda experimentar la gracia, la misericordia y el amor de Dios — no solo en palabras,
          sino a través de acciones concretas.
        </p>

        {/* ── Misión y Visión — dos columnas ── */}
        <div className="mb-14 grid gap-6 sm:grid-cols-2">

          {/* Misión */}
          <div className="rounded-3xl bg-surface-cream p-8 ring-1 ring-black/5">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Misión
            </h3>
            <p className="mt-2 text-sm leading-7 text-dark-soft">
              Predicar el evangelio de Jesús a través de la cultura, la educación, el deporte,
              la espiritualidad y los medios de comunicación, generando espacios de encuentro y
              servicio para que cada persona pueda experimentar el amor, la gracia y la
              misericordia de Dios de manera tangible.
            </p>
          </div>

          {/* Visión */}
          <div className="rounded-3xl bg-surface-cream p-8 ring-1 ring-black/5">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Visión
            </h3>
            <p className="mt-2 text-sm leading-7 text-dark-soft">
              Ser un referente en la comunidad donde el mensaje transformador de Jesús se
              transmita a todas las personas sin distinción, utilizando todos los recursos
              disponibles — desde los encuentros presenciales en nuestro predio hasta las
              más modernas plataformas tecnológicas.
            </p>
          </div>
        </div>

        {/* ── Frase institucional corregida — cierre natural de la narrativa ──
            Corrección gramatical aplicada:
            · "Las acciones que tengamos hoy" → "Las acciones de hoy"
              (el subjuntivo "tengamos" era incorrecto; la preposición "de" es precisa)
            · "serán el resultado del mañana" → "serán el testimonio del mañana"
              (las acciones son la causa, no el resultado; "testimonio" es más fiel
               al espíritu cristiano del mensaje)
            · Segunda oración: se mantiene con mínimos ajustes de fluidez.
        ── */}
        <figure className="relative overflow-hidden rounded-3xl bg-dark px-8 py-12 text-center sm:px-14">
          <span
            className="pointer-events-none absolute -top-4 left-6 select-none font-serif text-[8rem] leading-none text-brand-accent/10"
            aria-hidden="true"
          >
            "
          </span>
          <blockquote>
            <p className="relative font-serif text-xl font-semibold italic leading-9 text-white sm:text-2xl">
              "Las acciones de hoy serán el testimonio del mañana. Lo que hagamos en nuestro
              día a día podrá ser luz y transformación para bendecir a otros."
            </p>
          </blockquote>
          <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Valores Sinaí
          </figcaption>
        </figure>

      </div>
    </section>
  );
};

/*
──────────────────────────────────────────────────────────────
Secuencia de fondos en AboutUs.tsx:
  HeroAbout            → bg-dark
  HistoriaMisionVision → bg-white         ← este componente
  NuestrosValores      → bg-surface-cream
  Team                 → bg-white  (o el que siga)
──────────────────────────────────────────────────────────────
*/