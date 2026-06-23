import type { EspacioCardProps } from "../types/what-we-offer";

export const EspacioCard: React.FC<EspacioCardProps> = ({
  nombre,
  descripcion,
  imagen,
  alt,
  tag,
  objectPosition = 'center',
}) => (
  <article className="group overflow-hidden rounded-2xl bg-white dark:bg-dark shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
    <div className="relative h-48 overflow-hidden sm:h-52">
      <img
        src={imagen}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition }}
      />
      {tag && (
        <span className="type-caption absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 font-bold text-dark">
          {tag}
        </span>
      )}
    </div>
    <div className="p-5">
      <h3 className="type-h4 mb-1.5 font-bold text-base text-dark dark:text-white sm:text-lg">{nombre}</h3>
      <p className="type-body-sm text-dark-soft dark:text-surface-cream">{descripcion}</p>
    </div>
  </article>
)