// src/features/que-ofrecemos/components/EspaciosDestacados.tsx
//
// Reemplaza la grilla de íconos de la imagen 2.
// Cada espacio es protagonista: foto real + nombre + descripción breve.
// Sin íconos emoji — las fotos hacen ese trabajo.
//
// ¿Por qué NO agrupar bajo "Alimentación"?
// Agrupar el Quincho bajo "Alimentación" reduce un espacio social/recreativo
// a una categoría funcional. El Quincho tiene identidad propia como espacio
// de encuentro. Esta sección muestra cada espacio con su nombre directo.
//
// Fondo: bg-surface-cream → contrasta con HeroOfrece (bg-white) y
// GaleriaInstalaciones (bg-dark).

interface EspacioCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  tag?: string;
}

const EspacioCard: React.FC<EspacioCardProps> = ({
  nombre, descripcion, imagen, alt, tag,
}) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
    {/* Imagen */}
    <div className="relative h-48 overflow-hidden sm:h-52">
      <img
        src={imagen}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {tag && (
        <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-dark">
          {tag}
        </span>
      )}
    </div>
    {/* Texto */}
    <div className="p-5">
      <h3 className="mb-1.5 text-base font-bold text-dark">{nombre}</h3>
      <p className="text-sm leading-6 text-dark-soft">{descripcion}</p>
    </div>
  </article>
);

// ── Datos de los espacios ────────────────────────────────────────────────────
// Rutas de imagen: reemplazá con las fotos reales del predio.
// Las descripciones vienen del PDF oficial — sin inventar nada.
// Orden: de mayor a menor capacidad/relevancia para el visitante.

const ESPACIOS: EspacioCardProps[] = [
  // Alojamiento
  {
    nombre: 'La Posada',
    descripcion: 'Alojamiento principal del predio, pensado para recibir a grupos en retiros, campamentos y actividades de varios días.',
    imagen: '/img/mejores_fotos_posada/foto_posada_exterior.jpg',
    alt: 'Vista de La Posada, alojamiento principal de Valores Sinaí',
    tag: 'Alojamiento',
  },
  {
    nombre: 'Dormitorios',
    descripcion: 'Dormitorios grupales para campamentos y retiros, cómodos y funcionales para distintos tipos de grupos.',
    imagen: '/img/mejores_fotos_dormitorios/habitaciones_3.jpg',
    alt: 'Dormitorios grupales del predio de Valores Sinaí',
    tag: 'Alojamiento',
  },
  {
    nombre: '16 casas familiares',
    descripcion: 'Unidades independientes para familias o grupos pequeños que buscan privacidad y comodidad durante su estadía.',
    imagen: '/img/mejores_fotos_casas_familiares/casas_predio.jpg',
    alt: 'Casas familiares del predio de Valores Sinaí',
    tag: 'Alojamiento',
  },
  // Gastronomía y reunión
  {
    nombre: 'Comedor',
    descripcion: 'Espacio de alimentación con capacidad para grandes grupos, ideal para campamentos, retiros y eventos comunitarios.',
    imagen: '/img/mejores_fotos_comedor/foto_comedor_gente_7.jpg',
    alt: 'Comedor del predio de Valores Sinaí',
    tag: 'Gastronomía',
  },
  {
    nombre: 'Cafetería',
    descripcion: 'Espacio de descanso y encuentro informal, disponible para grupos y visitantes durante el día.',
    imagen: '/img/mejores_fotos_cafeteria/foto_cafe_interior.jpg',
    alt: 'Cafetería del predio de Valores Sinaí',
    tag: 'Gastronomía',
  },
  {
    nombre: 'Quincho',
    descripcion: 'Espacio al aire libre techado, ideal para asados, reuniones sociales y celebraciones en un entorno natural.',
    imagen: '/img/mejores_fotos_quincho/quincho_interior_gente_3.jpg',
    alt: 'Quincho del predio de Valores Sinaí',
    tag: 'Encuentro',
  },
  // Recreación y deporte
  {
    nombre: 'Gimnasio',
    descripcion: 'Instalación deportiva cubierta para actividades físicas, torneos y dinámicas grupales.',
    imagen: '/img/mejores_fotos_gym/valores_sinai_476968496_17863322796340943_8558766273241420023_n.jpg',
    alt: 'Gimnasio del predio de Valores Sinaí',
    tag: 'Deporte',
  },
  {
    nombre: 'Pileta',
    descripcion: 'Piscina disponible para grupos durante la temporada de verano, con espacios de recreación alrededor.',
    imagen: '/img/mejores_fotos_pileta/pileta_gente_2.jpg',
    alt: 'Pileta del predio de Valores Sinaí',
    tag: 'Deporte',
  },
  {
    nombre: 'Canchas',
    descripcion: 'Canchas de fútbol, vóley y otros deportes, disponibles para grupos de todas las edades.',
    imagen: '/img/mejores_fotos_canchas/partido_voley_2.webp',
    alt: 'Canchas deportivas del predio de Valores Sinaí',
    tag: 'Deporte',
  },
  {
    nombre: 'Área de paintball',
    descripcion: 'Espacio equipado para actividades de teambuilding, dinámicas grupales y recreación para jóvenes y adultos.',
    imagen: '/img/area_paintball_2.png',
    alt: 'Área de paintball de Valores Sinaí',
    tag: 'Deporte',
  },
  // Eventos y trabajo
  {
    nombre: 'Salón para 400 personas',
    descripcion: 'El espacio de mayor capacidad del predio, equipado para conferencias, cultos, eventos musicales y encuentros masivos.',
    imagen: '/img/mejores_fotos_salon/salon_gente_4.webp',
    alt: 'Salón de eventos para 400 personas de Valores Sinaí',
    tag: 'Eventos',
  },
  {
    nombre: 'Sala de conferencias',
    descripcion: 'Sala equipada para reuniones, seminarios y capacitaciones de grupos medianos.',
    imagen: '/img/mejores_fotos_salas_conferencias/sala_conferencia_gente_1.heic',
    alt: 'Sala de conferencias de Valores Sinaí',
    tag: 'Eventos',
  },
  {
    nombre: 'REC Pilar Sinaí',
    descripcion: 'Edificio multimedial que funciona como estudio de grabación, streaming, podcast y producción de videos. Espacio creativo para bandas y artistas.',
    imagen: '/img/mejores_fotos_rec_pilar/estudio_grabacion_1.jpg',
    alt: 'Estudio REC Pilar Sinaí',
    tag: 'Multimedia',
  },
  {
    nombre: 'Taller para oficios',
    descripcion: 'Espacio de formación práctica para el desarrollo de habilidades y oficios, orientado a la capacitación comunitaria.',
    imagen: '/img/taller_oficios.png',
    alt: 'Taller para oficios de Valores Sinaí',
    tag: 'Formación',
  },
];

export const FeaturedSpaces: React.FC = () => {
  return (
    <section
      className="bg-surface-cream px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="espacios-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
            Más de 9.000 m² construidos
          </p>
          <h2
            id="espacios-heading"
            className="text-3xl font-bold tracking-tight text-dark sm:text-4xl"
          >
            Nuestras instalaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-soft">
            Más de dos hectáreas y media en Pres. Derqui, Buenos Aires,
            con espacios diseñados para el encuentro, la formación y el crecimiento.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Grilla de espacios — 3 columnas en desktop */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ESPACIOS.map((espacio) => (
            <EspacioCard key={espacio.nombre} {...espacio} />
          ))}
        </div>

      </div>
    </section>
  );
};