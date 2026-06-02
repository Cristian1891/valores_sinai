// src/features/que-ofrecemos/components/HeroOfrece.tsx
//
// Hero de "¿Qué Ofrecemos?".
// Layout: texto a la izquierda + video del predio a la derecha (boceto imagen 1).
// El video reemplaza el placeholder verde — transmite escala y atmósfera
// que ninguna foto estática logra en el mismo espacio.
//
// Fondo: bg-white → contrasta con EspaciosDestacados (bg-surface-cream).

export const HeroOffer: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="ofrece-hero-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado centrado */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
            Nuestros espacios
          </p>
          <h1
            id="ofrece-hero-heading"
            className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl"
          >
            Un lugar diseñado para vos
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Layout dos columnas: texto izquierda / video derecha */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Columna texto */}
          <div className="flex flex-col gap-8">

            {/* Bloque 1 */}
            <div className="rounded-2xl bg-surface-cream p-7 ring-1 ring-black/5">
              <h2 className="mb-3 text-lg font-bold text-dark">
                Espacios para todos
              </h2>
              <p className="text-sm leading-7 text-dark-soft">
                Descubrí las instalaciones de Valores Sinaí, diseñadas para alojamiento,
                alimentación, recreación, eventos y encuentros comunitarios. Un lugar donde
                niños, jóvenes y familias crecen en educación, cultura, deporte y espiritualidad.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="rounded-2xl bg-surface-cream p-7 ring-1 ring-black/5">
              <h2 className="mb-3 text-lg font-bold text-dark">
                Tu lugar de crecimiento
              </h2>
              <p className="text-sm leading-7 text-dark-soft">
                En Valores Sinaí promovemos el desarrollo personal y comunitario con
                responsabilidad social. Creamos espacios que fomentan la transformación de
                vidas a través del amor al prójimo, la solidaridad y la paz.
              </p>
            </div>

          </div>

          {/* Columna video */}
          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-[2rem] bg-dark shadow-xl ring-1 ring-black/5">
              {/*
                Reemplazá src con la ruta real del video del predio.
                poster: imagen que se muestra antes de reproducir — importante para
                percepción de velocidad de carga.
                preload="none": no descarga el video hasta que el usuario interactúa.
                muted + playsInline: permite autoplay sin sonido en mobile si lo necesitás
                (actualmente está sin autoplay para no interrumpir la navegación).
              */}
              <video
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                controls
                preload="none"
                poster="/img/video-poster-predio.jpg"
                aria-label="Video de las instalaciones de Valores Sinaí"
              >
                <source src="/img/Video_predio.mp4" type="video/mp4" />
                <source src="/img/Video_predio.webm" type="video/webm" />
                Tu navegador no soporta la reproducción de video.
              </video>

              {/* Banda de marca */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent"
                aria-hidden="true"
              />
            </div>

            {/* Caption del video */}
            <p className="mt-3 text-center text-xs text-dark-soft/60">
              Vista general de nuestras instalaciones · Pres. Derqui, Buenos Aires
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};