// src/features/home/hooks/useTestimonials.ts
import { useState, useEffect } from 'react';
import type { RawTestimonialRow, Testimonial, UseTestimonialsResult } from '../types/home';
import { FALLBACK_TESTIMONIALS } from '../constants/fallbackTestimonials';

// export interface Testimonial {
//   name: string;
//   location: string;
//   quote: string;
//   rating: number;
// }

// const FALLBACK_TESTIMONIALS: Testimonial[] = [
//   {
//     name: 'María González',
//     location: 'Pilar, Buenos Aires',
//     quote:
//       'El predio es hermoso, muy cuidado y con un ambiente de paz. Pasamos un día inolvidable en familia.',
//     rating: 5,
//   },
//   {
//     name: 'Carlos Rodríguez',
//     location: 'Derqui, Buenos Aires',
//     quote:
//       'Participar en las actividades de Valores Sinaí me hizo sentir parte de una gran familia. El espacio inspira unidad y servicio.',
//     rating: 5,
//   },
//   {
//     name: 'Ana Martínez',
//     location: 'Del Viso, Buenos Aires',
//     quote:
//       'Las instalaciones son excelentes y cómodas. Se nota el compromiso de cada persona que forma parte del lugar.',
//     rating: 5,
//   },
// ];

const API_URL = import.meta.env.VITE_TESTIMONIALS_API ?? '';

// interface RawTestimonialRow {
//   nombre: string;
//   localidad: string;
//   resena: string;
//   calificacion: number;
// }

function mapRow(row: RawTestimonialRow): Testimonial {
  return {
    name: row.nombre || 'Visitante',
    location: row.localidad || 'Argentina',
    quote: row.resena,
    // El form es 1-10, convertimos a 1-5
    rating: Math.min(5, Math.max(1, Math.round(row.calificacion / 2))),
  };
}

// interface UseTestimonialsResult {
//   testimonials: Testimonial[];
//   loading: boolean;
// }

export function useTestimonials(): UseTestimonialsResult {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_URL) {
      setLoading(false);
      return;
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data: { testimonials?: RawTestimonialRow[] }) => {
        if (!data.testimonials?.length) return;

        const mapped = data.testimonials
          .map(mapRow)
          .filter((t) => t.rating >= 4);

        if (mapped.length > 0) setTestimonials(mapped);
      })
      .catch((e) => console.error('[useTestimonials]', e))
      .finally(() => setLoading(false));
  }, []);

  return { testimonials, loading };
}