// src/features/home/components/TestimonialesImpactoSection/TestimonialesImpactoSection.tsx
import { useTestimonials } from '../../hooks/useTestimonials';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialSkeleton } from './TestimonialSkeleton';

export const TestimonialesImpactoSection = () => {
  const { testimonials, loading } = useTestimonials();

  return (
    <section className="bg-surface-warm dark:bg-dark-soft px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            Voces de nuestra comunidad
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl">
            Lo que dicen quienes nos eligen
          </h2>
        </div>

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

        <div className="mt-10 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBCzYgvGlnjlfbJRv8anlemhJcE7scxif_sh0ggfBvXuzHNA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark dark:text-white"
          >
            ⭐ Dejá tu reseña
          </a>
        </div>

      </div>
    </section>
  );
};