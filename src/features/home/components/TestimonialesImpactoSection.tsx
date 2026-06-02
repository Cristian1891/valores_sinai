// src/features/home/components/TestimonialesImpactoSection/TestimonialesImpactoSection.tsx
// Agrega las claves "testimonials.*" en i18n/locales/es/home.json (ver comentario al final)

const testimonials = [
  {
    name: "María González",
    location: "Pilar, Buenos Aires",
    quote:
      "El predio es hermoso, muy cuidado y con un ambiente de paz. Pasamos un día inolvidable en familia.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    location: "Derqui, Buenos Aires",
    quote:
      "Participar en las actividades de Valores Sinaí me hizo sentir parte de una gran familia. El espacio inspira unidad y servicio.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    location: "Del Viso, Buenos Aires",
    quote:
      "Las instalaciones son excelentes y cómodas. Se nota el compromiso de cada persona que forma parte del lugar.",
    rating: 5,
  },
];

/** Genera un color de fondo determinista a partir del nombre */
function avatarColor(name: string): string {
  const palette = [
    "bg-brand-blue/30 text-brand-blue",
    "bg-brand-accent/25 text-brand-amber",
    "bg-success/25 text-success",
    "bg-brand-amber/25 text-brand-amber",
  ];
  const index =
    name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    palette.length;
  return palette[index];
}

/** Extrae las iniciales (máximo 2 letras) */
function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export const TestimonialesImpactoSection = () => {
  return (
    <section className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado — mismo patrón que las otras secciones */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {/* t('testimonials.kicker') */}
            Voces de nuestra comunidad
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            {/* t('testimonials.title') */}
            Lo que dicen quienes nos eligen
          </h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col justify-between rounded-3xl bg-dark p-6 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/30 sm:p-7"
            >
              {/* Cita con comillas decorativas */}
              <div>
                {/* Comilla de apertura */}
                <span
                  aria-hidden="true"
                  className="block font-serif text-5xl leading-none text-brand-accent/60 select-none"
                >
                  "
                </span>

                <p className="mt-1 text-sm leading-7 text-white/80 sm:text-base">
                  {testimonial.quote}
                </p>
              </div>

              {/* Separador + Autor */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                {/* Avatar con iniciales */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${avatarColor(testimonial.name)}`}
                  aria-hidden="true"
                >
                  {initials(testimonial.name)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-xs text-white/50">
                    {testimonial.location}
                  </p>
                </div>

                {/* Estrellas — alineadas al extremo derecho */}
                <div
                  className="ml-auto flex shrink-0 gap-0.5"
                  role="img"
                  aria-label={`${testimonial.rating} de 5 estrellas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-brand-accent"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/*
──────────────────────────────────────────────────────────────
CLAVES SUGERIDAS PARA i18n/locales/es/home.json
──────────────────────────────────────────────────────────────
"testimonials": {
  "kicker": "Voces de nuestra comunidad",
  "title": "Lo que dicen quienes nos eligen"
}

Luego reemplazá los strings hardcodeados por:
  {t('testimonials.kicker')}
  {t('testimonials.title')}

Para los datos de cada testimonio también podés moverlos al JSON
si querés que sean traducibles/editables desde allí.
──────────────────────────────────────────────────────────────
*/