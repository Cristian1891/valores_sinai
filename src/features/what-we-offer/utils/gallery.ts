// src/features/what-we-offer/utils/gallery.ts
//
// Transformaciones de datos para la galería de imágenes.
// ─────────────────────────────────────────────────────────────────────────────
// POR QUÉ UN UTIL Y NO INLINE EN EL COMPONENTE:
//   El mapeo de FotoItem → LightboxSlide es una transformación de datos pura,
//   sin efectos secundarios. Viviría en el componente como una constante
//   derivada, pero extraerla permite:
//     1. Testarla en aislamiento con un simple array de input/output.
//     2. Reutilizarla si en el futuro hay otras galerías en el proyecto.
//     3. Mantener el componente enfocado solo en renderizado.
// ─────────────────────────────────────────────────────────────────────────────

import type { FotoItem, LightboxSlide } from '../types/what-we-offer'

/**
 * Convierte un array de `FotoItem` al formato de slides que espera
 * `yet-another-react-lightbox`.
 *
 * Se llama una sola vez fuera del componente (a nivel de módulo) para
 * evitar recrear el array en cada render — equivalente a useMemo con
 * dependencias vacías, pero sin el overhead del hook.
 */
export function toSlides(photos: FotoItem[]): LightboxSlide[] {
  return photos.map(({ src, titulo, descripcion }) => ({
    src,
    title: titulo,
    description: descripcion,
  }))
}