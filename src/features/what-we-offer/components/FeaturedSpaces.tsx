// src/features/que-ofrecemos/components/EspaciosDestacados.tsx
import React from 'react';

interface EspacioCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  tag?: string;
  /**
   * Punto focal del recorte de imagen. Acepta cualquier valor válido de
   * CSS object-position (p.ej. "right center", "75% 40%", "top").
   * Por defecto: "center" (comportamiento estándar de object-cover).
   *
   * Útil cuando el sujeto principal de la foto no está centrado y el
   * recorte automático lo cortaría. Evita editar la imagen original.
   */
  objectPosition?: string;
}

const EspacioCard: React.FC<EspacioCardProps> = ({
  nombre, descripcion, imagen, alt, tag,
  objectPosition = 'center',
}) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
    <div className="relative h-48 overflow-hidden sm:h-52">
      <img
        src={imagen}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition }}
      />
      {tag && (
        <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-dark">
          {tag}
        </span>
      )}
    </div>
    <div className="p-5">
      <h3 className="mb-1.5 text-base font-bold text-dark">{nombre}</h3>
      <p className="text-sm leading-6 text-dark-soft">{descripcion}</p>
    </div>
  </article>
);

// ─── Datos ────────────────────────────────────────────────────────────────────

const ESPACIOS: EspacioCardProps[] = [
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
    imagen: '/img/mejores_fotos_salas_conferencias/sala_conferencia_2.jpeg',
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

// ─── Servicios del predio ─────────────────────────────────────────────────────
// Separados semánticamente de los espacios físicos porque son servicios
// disponibles para quienes visitan o usan el predio, no espacios en sí mismos.

const SERVICIOS: EspacioCardProps[] = [
  {
    nombre: 'Desfibrilador externo automático (DEA)',
    descripcion:
      'El predio cuenta con DEA disponible y personal capacitado en primeros auxilios: RCP, obstrucción de vía aérea, uso del desfibrilador y tratamiento de lesiones, reafirmando nuestro compromiso con el bienestar y la seguridad de toda la comunidad.',
    imagen: '/img/fotos_desfibrilador/DEA.jpg',
    alt: 'Desfibrilador externo automático disponible en el predio de Valores Sinaí',
    tag: 'Seguridad',
    // Punto focal medido sobre la imagen original:
    //   X ≈ 75% → DEA en el tercio derecho, pasada la escultura de madera
    //   Y ≈ 25% → cartel + caja en el cuarto superior de la foto
    // Con object-cover el navegador recorta alrededor de este punto,
    // dejando el desfibrilador al centro del card sin editar el archivo.
    objectPosition: '75% 25%',
  },
  {
    nombre: 'Estudio Jurídico — Dra. Daniela Aramberri',
    descripcion:
      'Estudio jurídico ubicado dentro del predio, abierto a toda la comunidad. Podés acercarte durante tu visita o contactar directamente a la Dra. Aramberri para consultas y servicios legales.',
    imagen: '/img/fotos_estudio_juridico/estudio_juridico.jpg',
    alt: 'Estudio jurídico de la Dra. Daniela Aramberri en el predio de Valores Sinaí',
    tag: 'Servicios',
  },
];

// ─── Componente principal ─────────────────────────────────────────────────────

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
            Predio Valores Sinaí
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-soft">
            Más de dos hectáreas y media en Pres. Derqui, Buenos Aires,
            con espacios diseñados para el encuentro, la formación y el crecimiento.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Grilla principal de espacios físicos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ESPACIOS.map((espacio) => (
            <EspacioCard key={espacio.nombre} {...espacio} />
          ))}
        </div>

        {/* ── Servicios del predio ──────────────────────────────────────────── */}
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-dark/10" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-amber">
              Servicios disponibles en el predio
            </p>
            <div className="h-px flex-1 bg-dark/10" aria-hidden="true" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICIOS.map((servicio) => (
              <EspacioCard key={servicio.nombre} {...servicio} />
            ))}
          </div>

          {/* Contacto para el estudio jurídico */}
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-dark-soft">
              Consultas legales y jurídicas
            </p>
            <a
              href="mailto:Dra.danielaaramberri@gmail.com"
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-bold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Contactar estudio jurídico
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};