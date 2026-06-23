import type { LucideIcon } from "lucide-react";

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

export type ContactItem = {
  key: string;
  labelKey: string;
  valueKey: string;
  hrefKey: string;
  icon: LucideIcon;
  external: boolean;
};