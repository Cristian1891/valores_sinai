// src/features/about-us/components/NuestrosValores.tsx
//
// Sección 3 de "Quiénes Somos": los 6 valores institucionales de Valores Sinaí.
// Separado de HistoriaMisionVision — una idea por sección es la regla de oro en UX.
// Fondo: bg-surface-cream — contrasta con HistoriaMisionVision (bg-white) y Team (bg-white).
//
// ¿Qué valores se usan?
// Se usan los 6 valores del PDF oficial "Nuestra Historia", que tienen título Y descripción
// propia: Amor al prójimo, Inclusión, Servicio, Unidad, Creatividad, Excelencia.
// La imagen de nube de palabras (Lealtad, Bondad, Honor, Respeto, etc.) refleja valores
// del logo/identidad visual de la asociación pero no tienen descripción institucional,
// por lo que no se incorporan como tarjetas — quedarían sin contexto.
// Si en el futuro la asociación redacta descripciones para esos valores adicionales,
// se pueden agregar fácilmente al array `valores`.

export const OrganizationalValues = () => {
  const valores = [
    {
      title: 'Amor al prójimo',
      text: 'Nuestro principio rector, basado en el mandato de Jesús de amar a otros como a nosotros mismos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
    },
    {
      title: 'Inclusión',
      text: 'Abrimos nuestras puertas y corazones a toda persona, sin importar su trasfondo, creencias o situación.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
    },
    {
      title: 'Servicio',
      text: 'El amor se demuestra en acciones concretas. Trabajamos para servir a la comunidad en sus diferentes necesidades.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM1.5 12.75v6A2.25 2.25 0 003.75 21h7.5v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5z" />
        </svg>
      ),
    },
    {
      title: 'Unidad',
      text: 'Fomentamos la colaboración entre iglesias, ministerios, organizaciones y personas, buscando la unidad en la diversidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Creatividad',
      text: 'Valoramos el arte, la innovación y la tecnología como herramientas para comunicar el mensaje de esperanza y fe.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
        </svg>
      ),
    },
    {
      title: 'Excelencia',
      text: 'Nos esforzamos en dar lo mejor en cada proyecto, actividad y servicio, honrando a Dios a través de nuestro compromiso.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dark">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="bg-surface-cream px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="valores-heading"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Encabezado ── */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
            Lo que nos guía
          </p>
          <h2
            id="valores-heading"
            className="text-3xl font-bold tracking-tight text-dark sm:text-4xl"
          >
            Nuestros valores
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* ── Grilla de 6 valores ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((valor) => (
            <div
              key={valor.title}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              {/* Ícono */}
              <div
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent"
                aria-hidden="true"
              >
                {valor.icon}
              </div>
              {/* Texto */}
              <div>
                <p className="text-sm font-bold text-dark">{valor.title}</p>
                <p className="mt-1 text-xs leading-5 text-dark-soft">{valor.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/*
──────────────────────────────────────────────────────────────
NOTA: valores de la nube de palabras (imagen 3)
──────────────────────────────────────────────────────────────
La nube incluye: Tolerancia, Responsabilidad, Confianza,
Esfuerzo, Respeto, Lealtad, Compromiso, Amor, Solidaridad,
Paz, Honor, Honradez, Bondad, Integridad.

Estos forman parte de la identidad visual/logo de la asociación
pero no tienen descripción institucional propia en el material
oficial. Se recomienda pedirle al cliente que redacte una frase
para cada uno si desea incorporarlos como tarjetas adicionales.
──────────────────────────────────────────────────────────────

Secuencia de fondos:
  HeroAbout            → bg-dark
  HistoriaMisionVision → bg-white
  NuestrosValores      → bg-surface-cream  ← este componente
  Team                 → bg-white 
  PresidentMessage     → bg-dark-soft
──────────────────────────────────────────────────────────────
*/