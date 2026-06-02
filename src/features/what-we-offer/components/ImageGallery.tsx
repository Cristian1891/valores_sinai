// src/features/que-ofrecemos/components/GaleriaInstalaciones.tsx
//
// Galería fotográfica del predio — reemplaza la grilla de placeholders verdes
// de la imagen 3 con fotos reales cuando estén disponibles.
//
// UX: La galería muestra el ambiente del lugar, no los espacios en detalle
// (eso ya lo hace EspaciosDestacados). Aquí el objetivo es emoción, no información.
//
// Fondo: bg-dark → contrasta fuerte con EspaciosDestacados (bg-surface-cream)
// y con ParaQuienEs (bg-white) que le sigue.
//
// Sin lightbox por ahora — agregar react-photo-view o similar si el cliente
// necesita zoom en producción.

interface FotoProps {
  src: string;
  alt: string;
  /** Clase adicional para variar alturas y romper la grilla uniforme */
  className?: string;
}

// Fotos del predio — reemplazá src con las rutas reales.
// Los alt son descriptivos para accesibilidad y SEO.
const FOTOS: FotoProps[] = [
  {
    src: '/img/valores_sinai_exterior.png',
    alt: 'Vista panorámica del predio de Valores Sinaí desde el exterior',
    className: 'lg:col-span-2 lg:row-span-2',   // foto destacada — más grande
  },
  {
    src: '/img/area_verde.heic',
    alt: 'Área verde y espacios de reunión al aire libre',
  },
  {
    src: '/img/rec-pilar/recpilar_sinai_611296729_17872722597496347_5403781638977385714_n.jpg',
    alt: 'Estudio REC Pilar Sinaí — sala de grabación y streaming',
  },
  {
    src: '/img/mejores_fotos_salon/salon_gente.jpg',
    alt: 'Salón de eventos con capacidad para 400 personas',
  },
  {
    src: '/img/mejores_fotos_pileta/pileta_gente.webp',
    alt: 'Pileta del predio durante la temporada de verano',
  },
  {
    src: '/img/mejores_fotos_canchas/cancha_futbol_partido.jpg',
    alt: 'Canchas deportivas del predio de Valores Sinaí',
  },
  {
    src: '/img/mejores_fotos_quincho/quincho_interior_gente_1.jpg',
    alt: 'Quincho para encuentros y eventos al aire libre',
  },
  {
    src: '/img/mejores_fotos_posada/foto_posada_exterior_noche.jpg',
    alt: 'La Posada — alojamiento principal del predio',
  },
];

export const ImageGallery: React.FC = () => {
  return (
    <section
      className="bg-dark px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="galeria-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Galería
          </p>
          <h2
            id="galeria-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Conocé las instalaciones
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            Un espacio pensado para el encuentro, el descanso y el crecimiento.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/*
          Grilla con foto destacada (lg:col-span-2 lg:row-span-2).
          En mobile: columna única. En tablet: 2 columnas. En desktop: 3 columnas.
          La foto 0 ocupa 2x2 en desktop — rompe la uniformidad de la grilla del boceto.
        */}
        <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FOTOS.map((foto, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-dark-soft ${foto.className ?? ''}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay con alt text visible en hover — accesibilidad + UX */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-xs font-semibold text-white/90">
                  {foto.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};