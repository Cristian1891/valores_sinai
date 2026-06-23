import type { RawTestimonialRow, Testimonial } from "../types/home";

export function mapRow(row: RawTestimonialRow): Testimonial {
  return {
    name: row.nombre || 'Visitante',
    location: row.localidad || 'Argentina',
    quote: row.resena,
    rating: Math.min(5, Math.max(1, Math.round(row.calificacion / 2))),
  };
}