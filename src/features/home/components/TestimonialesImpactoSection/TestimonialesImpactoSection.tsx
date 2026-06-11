// src/features/home/components/TestimonialesImpactoSection/TestimonialesImpactoSection.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → testimonials.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json

import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTestimonials } from '../../hooks/useTestimonials';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialSkeleton } from './TestimonialSkeleton';

export const TestimonialesImpactoSection = () => {
  const { t } = useTranslation('home');
  const { testimonials, loading } = useTestimonials();

  return (
    <section className="bg-surface-warm px-4 py-16 dark:bg-dark-soft sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-10 max-w-2xl">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brand-amber">
            {t('testimonials.kicker')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Grid de testimonios o skeleton de carga */}
        {loading ? (
          <TestimonialSkeleton />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={`${testimonial.name}-${i}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}

        {/* CTA para dejar reseña */}
        <div className="mt-10 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBCzYgvGlnjlfbJRv8anlemhJcE7scxif_sh0ggfBvXuzHNA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-2.5 font-sans text-sm font-semibold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Star
              className="h-4 w-4 fill-brand-amber text-brand-amber"
              aria-hidden="true"
              strokeWidth={1.5}
            />
            {t('testimonials.reviewButton')}
          </a>
        </div>

      </div>
    </section>
  );
};