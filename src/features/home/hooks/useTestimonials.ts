import { useState, useEffect } from 'react';
import type { RawTestimonialRow, Testimonial, UseTestimonialsResult } from '../types/home';
import { FALLBACK_TESTIMONIALS } from '../constants/fallbackTestimonials';
import { mapRow } from '../utils/mapTestimonialRow';

const API_URL = import.meta.env.VITE_TESTIMONIALS_API ?? '';

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