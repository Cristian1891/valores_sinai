// src/features/que-ofrecemos/components/GaleriaInstalaciones.tsx
//
// v3 — Galería completa: todos los espacios del predio representados.
//
// Cambios respecto a v2:
//  Se agregaron 6 fotos para completar la cobertura de instalaciones:
//  dormitorios, cafetería, sala de conferencias (nuevas en esta versión)
//  + gimnasio, casas familiares y comedor (que en v2 ya estaban pero ahora
//  se reordenan dentro de un criterio editorial claro).
//
//  Criterio de orden del array FOTOS:
//   0.    Foto panorámica destacada (lg:col-span-2 lg:row-span-2)
//   1–3.  Alojamiento — lo primero que busca quien organiza un retiro
//   4–5.  Alimentación — logística clave para grupos
//   6–9.  Deporte y recreación
//   10–12. Eventos y formación
//   13.   Espacios verdes
//
// Cambios respecto a v1 (mantener como referencia histórica):
//  1. Lightbox con yet-another-react-lightbox + plugin Captions.
//  2. Overlay siempre visible en mobile (no solo en hover).
//  3. <button> en lugar de <div> para accesibilidad.
//  4. Botón "Ver todas las fotos" como entry point secundario.
//
// Dependencias a instalar:
//   npm install yet-another-react-lightbox
//
// Fondo: bg-dark → contrasta fuerte con EspaciosDestacados (bg-surface-cream)
// y con ParaQuienEs (bg-white) que le sigue.

import { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

// ── Tipos ────────────────────────────────────────────────────────────────────

interface FotoProps {
  src: string;
  alt: string;
  /** Título visible en el lightbox */
  titulo: string;
  /** Descripción visible en el lightbox */
  descripcion: string;
  /** Clase adicional para variar alturas y romper la grilla uniforme */
  className?: string;
}

// ── Datos de las fotos ───────────────────────────────────────────────────────
// Orden: foto destacada primero (lg:col-span-2 lg:row-span-2), luego por
// relevancia para el visitante que evalúa contratar el predio.
//
// Criterio de orden dentro de cada bloque:
//   1. Alojamiento y convivencia (lo primero que busca quien organiza un retiro)
//   2. Alimentación (logística clave para grupos)
//   3. Deporte y recreación
//   4. Eventos y multimedia
//   5. Espacios verdes (ambiente general)
//
// Rutas de imagen: extraídas de EspaciosDestacados.tsx para garantizar
// consistencia. Reemplazá con las mejores fotos disponibles de cada espacio.

const FOTOS: FotoProps[] = [

  // ── Foto destacada — ocupa 2×2 en desktop ───────────────────────────────
  {
    src: '/img/valores_sinai_exterior.png',
    alt: 'Vista panorámica del predio de Valores Sinaí desde el exterior',
    titulo: 'Valores Sinaí',
    descripcion: 'Vista panorámica del predio de Valores Sinaí desde el exterior.',
    className: 'lg:col-span-2 lg:row-span-2',
  },

  // ── Alojamiento ─────────────────────────────────────────────────────────
  {
    src: '/img/mejores_fotos_posada/foto_posada_exterior.jpg',
    alt: 'La Posada — alojamiento principal del predio de Valores Sinaí',
    titulo: 'La Posada',
    descripcion: 'Alojamiento principal del predio, pensado para recibir a grupos en retiros, campamentos y actividades de varios días.',
  },
  {
    src: '/img/mejores_fotos_casas_familiares/casas_predio_3.png',
    alt: 'Casas familiares del predio de Valores Sinaí',
    titulo: '16 casas familiares',
    descripcion: 'Unidades independientes para familias o grupos pequeños que buscan privacidad y comodidad durante su estadía.',
  },
  {
    src: '/img/mejores_fotos_dormitorios/habitaciones_3.jpg',
    alt: 'Dormitorios grupales del predio de Valores Sinaí',
    titulo: 'Dormitorios',
    descripcion: 'Dormitorios grupales para campamentos y retiros, cómodos y funcionales para distintos tipos de grupos.',
  },

  // ── Alimentación ─────────────────────────────────────────────────────────
  {
    src: '/img/mejores_fotos_comedor/foto_comedor_gente_5.webp',
    alt: 'Comedor del predio con grupos reunidos alrededor de las mesas',
    titulo: 'Comedor',
    descripcion: 'Espacio de alimentación con capacidad para grandes grupos, ideal para campamentos, retiros y eventos comunitarios.',
  },
  {
    src: '/img/mejores_fotos_cafeteria/foto_cafe_interior.jpg',
    alt: 'Cafetería del predio de Valores Sinaí',
    titulo: 'Cafetería',
    descripcion: 'Espacio de descanso y encuentro informal, disponible para grupos y visitantes durante el día.',
  },

  // ── Deporte y recreación ─────────────────────────────────────────────────
  {
    src: '/img/mejores_fotos_gym/valores_sinai_662821012_18128951692501123_6000503753729220263_n.jpg',
    alt: 'Gimnasio cubierto del predio de Valores Sinaí',
    titulo: 'Gimnasio',
    descripcion: 'Instalación deportiva cubierta para actividades físicas, torneos y dinámicas grupales.',
  },
  {
    src: '/img/mejores_fotos_pileta/pileta_gente.webp',
    alt: 'Pileta del predio durante la temporada de verano',
    titulo: 'Pileta',
    descripcion: 'Piscina disponible para grupos durante la temporada de verano, con espacios de recreación alrededor.',
  },
  {
    src: '/img/mejores_fotos_canchas/cancha_futbol_partido.jpg',
    alt: 'Canchas deportivas del predio de Valores Sinaí',
    titulo: 'Canchas',
    descripcion: 'Canchas de fútbol, vóley y otros deportes, disponibles para grupos de todas las edades.',
  },
  {
    src: '/img/mejores_fotos_quincho/quincho_interior_gente_1.jpg',
    alt: 'Quincho para encuentros y eventos al aire libre',
    titulo: 'Quincho',
    descripcion: 'Espacio al aire libre techado, ideal para asados, reuniones sociales y celebraciones en un entorno natural.',
  },

  // ── Eventos y formación ──────────────────────────────────────────────────
  {
    src: '/img/mejores_fotos_salon/salon_gente.jpg',
    alt: 'Salón de eventos con capacidad para 400 personas',
    titulo: 'Salón para 400 personas',
    descripcion: 'El espacio de mayor capacidad del predio, equipado para conferencias, cultos, eventos musicales y encuentros masivos.',
  },
  {
    src: '/img/mejores_fotos_salas_conferencias/sala_conferencia_1.jpg',
    alt: 'Sala de conferencias del predio de Valores Sinaí',
    titulo: 'Sala de conferencias',
    descripcion: 'Sala equipada para reuniones, seminarios y capacitaciones de grupos medianos.',
  },
  {
    src: '/img/rec-pilar/recpilar_sinai_611296729_17872722597496347_5403781638977385714_n.jpg',
    alt: 'Estudio REC Pilar Sinaí — sala de grabación y streaming',
    titulo: 'REC Pilar Sinaí',
    descripcion: 'Edificio multimedial con estudio de grabación, streaming, podcast y producción de videos — fe, creatividad y excelencia al servicio del evangelio.',
  },

  // ── Espacios verdes ──────────────────────────────────────────────────────
  {
    src: '/img/area_verde.heic',
    alt: 'Área verde y espacios de reunión al aire libre del predio',
    titulo: 'Espacios verdes',
    descripcion: 'Áreas de esparcimiento y reunión al aire libre, en un entorno natural pensado para el descanso y la comunidad.',
  },
];

// Formato que espera yet-another-react-lightbox
const SLIDES = FOTOS.map(({ src, titulo, descripcion }) => ({
  src,
  title: titulo,
  description: descripcion,
}));

// ── Componente ───────────────────────────────────────────────────────────────

export const ImageGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const abrirLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const cerrarLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  return (
    <section
      className="bg-dark px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="galeria-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Encabezado ──────────────────────────────────────────────────── */}
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
          ── Grilla ──────────────────────────────────────────────────────────
          Mobile:  1 columna, altura fija 220px por tile.
          Tablet:  2 columnas.
          Desktop: 3 columnas. Foto 0 ocupa 2×2 (lg:col-span-2 lg:row-span-2).
        */}
        <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FOTOS.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => abrirLightbox(i)}
              aria-label={`Ampliar imagen: ${foto.titulo}`}
              className={[
                'group relative overflow-hidden rounded-2xl bg-dark-soft',
                'cursor-pointer focus-visible:outline focus-visible:outline-2',
                'focus-visible:outline-offset-2 focus-visible:outline-brand-accent',
                foto.className ?? '',
              ].join(' ')}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/*
                Overlay con nombre del espacio.
                Siempre visible (no solo en hover) en mobile — opacity-100 en sm:opacity-0.
                En desktop aparece solo al hover.
                El ícono de lupa refuerza que la imagen es clickeable.
              */}
              <div
                className={[
                  'absolute inset-0 flex flex-col items-start justify-end',
                  'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
                  'p-4 opacity-100 transition-opacity duration-300',
                  'sm:opacity-0 sm:group-hover:opacity-100',
                ].join(' ')}
                aria-hidden="true"
              >
                <p className="text-sm font-bold text-white drop-shadow">
                  {foto.titulo}
                </p>
                {/* Ícono de lupa — señal visual de que la imagen es expandible */}
                <span className="absolute right-3 top-3 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/*
          ── CTA secundario ──────────────────────────────────────────────────
          Entry point para usuarios que no descubren el click en las imágenes.
          Abre el lightbox desde la primera foto.
        */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => abrirLightbox(0)}
            className={[
              'inline-flex items-center gap-2 rounded-full border border-white/20',
              'bg-white/10 px-6 py-3 text-sm font-semibold text-white',
              'backdrop-blur-sm transition-colors duration-200',
              'hover:bg-white/20 focus-visible:outline focus-visible:outline-2',
              'focus-visible:outline-offset-2 focus-visible:outline-brand-accent',
            ].join(' ')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-3 3v-.031Zm7.25-5.56a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
                clipRule="evenodd"
              />
            </svg>
            Ver todas las fotos
          </button>
        </div>
      </div>

      {/*
        ── Lightbox ────────────────────────────────────────────────────────────
        yet-another-react-lightbox v3.
        - Plugin Captions: muestra titulo + descripcion debajo de cada imagen.
        - open: lightboxIndex >= 0 controla la visibilidad.
        - index: foto inicial al abrir.
        - on.close: cierra limpiamente.
        - styles: fondo más oscuro para que las fotos respiren.
        - carousel.finite: false → navegación circular.
        - animation.swipe: 240ms → responde bien al swipe en mobile.
      */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={cerrarLightbox}
        slides={SLIDES}
        plugins={[Captions]}
        animation={{ swipe: 240 }}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.93)' },
        }}
        captions={{
          showToggle: false,
          descriptionTextAlign: 'center',
        }}
      />
    </section>
  );
};