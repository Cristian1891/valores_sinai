import type { Testimonial } from '../../types/home';
import { avatarColor, initials } from '../../utils/testimonials.utils';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-dark p-6 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/30 sm:p-7">
      <div>
        <span
          aria-hidden="true"
          className="block font-serif text-5xl leading-none text-brand-accent/60 select-none"
        >
          "
        </span>
        <p className="mt-1 type-body-sm text-white/80 sm:text-base">
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${avatarColor(testimonial.name)}`}
          aria-hidden="true"
        >
          {initials(testimonial.name)}
        </div>

        <div className="min-w-0">
          <p className="truncate type-label-sm text-white">
            {testimonial.name}
          </p>
          <p className="truncate type-caption text-white/50">
            {testimonial.location}
          </p>
        </div>

        <div
          className="ml-auto flex shrink-0 gap-0.5"
          role="img"
          aria-label={`${testimonial.rating} de 5 estrellas`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 text-brand-accent"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </article>
  );
}