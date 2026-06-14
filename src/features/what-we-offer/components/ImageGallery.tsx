// src/features/what-we-offer/components/ImageGallery.tsx
//
// Datos (GALLERY_PHOTOS) → construidos desde i18n con getGalleryPhotos(t)
// Transformación SLIDES  → utils/gallery.ts
// Tipos (FotoItem)       → types/what-we-offer.ts
// Estado (lightboxIndex) → local: solo 1 useState, no amerita hook propio.
// Este componente solo renderiza + un useState simple.

import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import { getGalleryPhotos } from '../constants/gallery'
import { toSlides } from '../utils/gallery'

export const ImageGallery: React.FC = () => {
  const { t } = useTranslation('what-we-offer')
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)

  // Se reconstruyen al cambiar de idioma. toSlides es O(n) sobre ~14 items:
  // el costo es despreciable y evita la complejidad de un useMemo con t como dep.
  const photos = getGalleryPhotos(t)
  const slides = toSlides(photos)

  const abrirLightbox  = useCallback((index: number) => setLightboxIndex(index), [])
  const cerrarLightbox = useCallback(() => setLightboxIndex(-1), [])

  return (
    <section
      className="bg-dark px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="galeria-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="type-kicker mb-3 text-brand-accent">
            {t('gallery.kicker')}
          </p>
          <h2
            id="galeria-heading"
            className="type-h2 text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {t('gallery.title')}
          </h2>
          <p className="type-body mx-auto mt-4 max-w-xl text-white/70 sm:text-lg">
            {t('gallery.subtitle')}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/*
          Grilla:
          Mobile:  1 col, altura fija 220px por tile.
          Tablet:  2 cols.
          Desktop: 3 cols. Foto 0 ocupa 2×2 (lg:col-span-2 lg:row-span-2).
        */}
        <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => abrirLightbox(i)}
              aria-label={t('gallery.expandAriaLabel', { titulo: foto.titulo })}
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

              {/* Overlay — siempre visible en mobile, solo en hover en desktop */}
              <div
                className={[
                  'absolute inset-0 flex flex-col items-start justify-end',
                  'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
                  'p-4 opacity-100 transition-opacity duration-300',
                  'sm:opacity-0 sm:group-hover:opacity-100',
                ].join(' ')}
                aria-hidden="true"
              >
                <p className="type-label text-white drop-shadow">
                  {foto.titulo}
                </p>
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

        {/* CTA secundario */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => abrirLightbox(0)}
            className={[
              'type-label inline-flex items-center gap-2 rounded-full border border-white/20',
              'bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-colors duration-200',
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
            {t('gallery.viewAll')}
          </button>
        </div>

      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={cerrarLightbox}
        slides={slides}
        plugins={[Captions]}
        animation={{ swipe: 240 }}
        carousel={{ finite: false }}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.93)' } }}
        captions={{ showToggle: false, descriptionTextAlign: 'center' }}
      />
    </section>
  )
}