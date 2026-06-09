export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeCard {
  title: string;
  description: string;
  to: string;
  cta: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface RawTestimonialRow {
  nombre: string;
  localidad: string;
  resena: string;
  calificacion: number;
}

export interface UseTestimonialsResult {
  testimonials: Testimonial[];
  loading: boolean;
}