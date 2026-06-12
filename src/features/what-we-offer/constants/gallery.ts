// src/features/what-we-offer/constants/gallery.ts
//
// PATRÓN FACTORY CON t():
//   Las rutas de imagen (src) y className son invariantes de idioma y se
//   mantienen hardcodeadas. Solo los campos de texto (titulo, descripcion, alt)
//   se resuelven via t().
//
// CRITERIO DE ORDEN (sin cambios):
//   0.    Foto panorámica destacada (lg:col-span-2 lg:row-span-2)
//   1–3.  Alojamiento
//   4–5.  Alimentación
//   6–9.  Deporte y recreación
//   10–12. Eventos y formación
//   13.   Espacios verdes

import type { TFunction } from 'i18next'
import type { FotoItem } from '../types/what-we-offer'

export function getGalleryPhotos(t: TFunction): FotoItem[] {
  return [
    {
      src:         '/img/valores_sinai_exterior.png',
      alt:         t('gallery.photos.exterior.alt'),
      titulo:      t('gallery.photos.exterior.titulo'),
      descripcion: t('gallery.photos.exterior.descripcion'),
      className:   'lg:col-span-2 lg:row-span-2',
    },
    {
      src:         '/img/mejores_fotos_posada/foto_posada_exterior.jpg',
      alt:         t('gallery.photos.posada.alt'),
      titulo:      t('gallery.photos.posada.titulo'),
      descripcion: t('gallery.photos.posada.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_casas_familiares/casas_predio_3.png',
      alt:         t('gallery.photos.casas.alt'),
      titulo:      t('gallery.photos.casas.titulo'),
      descripcion: t('gallery.photos.casas.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_dormitorios/habitaciones_3.jpg',
      alt:         t('gallery.photos.dormitorios.alt'),
      titulo:      t('gallery.photos.dormitorios.titulo'),
      descripcion: t('gallery.photos.dormitorios.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_comedor/foto_comedor_gente_5.webp',
      alt:         t('gallery.photos.comedor.alt'),
      titulo:      t('gallery.photos.comedor.titulo'),
      descripcion: t('gallery.photos.comedor.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_cafeteria/foto_cafe_interior.jpg',
      alt:         t('gallery.photos.cafeteria.alt'),
      titulo:      t('gallery.photos.cafeteria.titulo'),
      descripcion: t('gallery.photos.cafeteria.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_gym/valores_sinai_662821012_18128951692501123_6000503753729220263_n.jpg',
      alt:         t('gallery.photos.gimnasio.alt'),
      titulo:      t('gallery.photos.gimnasio.titulo'),
      descripcion: t('gallery.photos.gimnasio.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_pileta/pileta_gente.webp',
      alt:         t('gallery.photos.pileta.alt'),
      titulo:      t('gallery.photos.pileta.titulo'),
      descripcion: t('gallery.photos.pileta.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_canchas/cancha_futbol_partido.jpg',
      alt:         t('gallery.photos.canchas.alt'),
      titulo:      t('gallery.photos.canchas.titulo'),
      descripcion: t('gallery.photos.canchas.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_quincho/quincho_interior_gente_1.jpg',
      alt:         t('gallery.photos.quincho.alt'),
      titulo:      t('gallery.photos.quincho.titulo'),
      descripcion: t('gallery.photos.quincho.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_salon/salon_gente.jpg',
      alt:         t('gallery.photos.salon.alt'),
      titulo:      t('gallery.photos.salon.titulo'),
      descripcion: t('gallery.photos.salon.descripcion'),
    },
    {
      src:         '/img/mejores_fotos_salas_conferencias/sala_conferencia_1.jpg',
      alt:         t('gallery.photos.conferencias.alt'),
      titulo:      t('gallery.photos.conferencias.titulo'),
      descripcion: t('gallery.photos.conferencias.descripcion'),
    },
    {
      src:         '/img/rec-pilar/recpilar_sinai_611296729_17872722597496347_5403781638977385714_n.jpg',
      alt:         t('gallery.photos.rec.alt'),
      titulo:      t('gallery.photos.rec.titulo'),
      descripcion: t('gallery.photos.rec.descripcion'),
    },
    {
      src:         '/img/area_verde.heic',
      alt:         t('gallery.photos.verdes.alt'),
      titulo:      t('gallery.photos.verdes.titulo'),
      descripcion: t('gallery.photos.verdes.descripcion'),
    },
  ]
}