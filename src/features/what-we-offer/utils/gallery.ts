import type { FotoItem, LightboxSlide } from '../types/what-we-offer'

export function toSlides(photos: FotoItem[]): LightboxSlide[] {
  return photos.map(({ src, titulo, descripcion }) => ({
    src,
    title: titulo,
    description: descripcion,
  }))
}