// src/features/home/components/TestimonialesImpactoSection/TestimonialesImpactoSection.tsx

import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTestimonials } from '../../hooks/useTestimonials';
import { TestimonialCard } from './TestimonialCard';
import { SectionLoader } from '../../../../components/ui/SectionLoader';

export const TestimonialesImpactoSection = () => {
  const { t } = useTranslation('home');
  const { testimonials, loading } = useTestimonials();

  return (
    <section className="bg-surface-warm px-4 py-16 dark:bg-dark-soft sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 max-w-2xl">
          <p className="type-kicker text-brand-amber">
            {t('testimonials.kicker')}
          </p>
          <h2 className="mt-3 type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('testimonials.title')}
          </h2>
        </div>

        {loading ? (
          /*
           * SectionLoader reemplaza al TestimonialSkeleton cuando se prefiere
           * una experiencia de carga con identidad visual de marca.
           *
           * minHeight="420px": aproxima la altura de 3 cards de testimoniales
           * en mobile (1 columna) para evitar layout shift cuando llegan los datos.
           * En sm/lg las cards son más compactas en grid — 420px es un buen
           * promedio que funciona en todos los breakpoints sin sobredimensionar.
           *
           * Si preferís el skeleton (más fiel a la estructura final),
           * podés usar <TestimonialSkeleton /> en lugar de <SectionLoader />.
           * Ambos son válidos — la elección es de criterio de diseño:
           *   Skeleton → más contexto de qué va a aparecer.
           *   SectionLoader → más identidad de marca, más simple visualmente.
           */
          <SectionLoader
            minHeight="420px"
            label={t('testimonials.loading')}
          />
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

        <div className="mt-10 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBCzYgvGlnjlfbJRv8anlemhJcE7scxif_sh0ggfBvXuzHNA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-2.5 type-label text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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