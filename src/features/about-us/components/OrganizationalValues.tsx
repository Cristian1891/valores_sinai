// src/features/about-us/components/OrganizationalValues.tsx
//
// Grilla de 14 cards con imagen de fondo, una por cada valor institucional.
// Comportamiento hover:
//   — La imagen hace zoom suave (scale 1.08)
//   — El overlay gradiente se reemplaza por un fondo oscuro sólido
//   — El nombre del valor sube levemente y aparece la descripción
//   — Una línea brand-accent se expande desde la izquierda en el borde inferior
//
// Las imágenes son placeholders de Unsplash.
// Reemplazalas por imágenes propias de la asociación.
// Búsquedas sugeridas en unsplash.com o pexels.com:
//   Amor            → "hands together community warm light"
//   Respeto         → "people listening conversation generations"
//   Honradez        → "handshake trust natural light"
//   Paz             → "serene landscape sunrise calm"
//   Honor           → "elder recognition community dignity"
//   Lealtad         → "friends walking together back"
//   Confianza       → "hand extended support help"
//   Integridad      → "person working focused concentration"
//   Compromiso      → "volunteers working together project"
//   Tolerancia      → "diverse people sitting conversation"
//   Responsabilidad → "person leading task careful"
//   Bondad          → "person giving food generosity smile"
//   Solidaridad     → "hands stacked teamwork unity"
//   Esfuerzo        → "person physical activity determination"

interface Valor {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const VALORES: Valor[] = [
  {
    id: 'amor',
    name: 'Amor',
    description:
      'Nuestro principio rector. Cada actividad nace del amor genuino hacia las personas y sus familias.',
    imageUrl:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
    imageAlt: 'Personas tomadas de la mano en señal de unión',
  },
  {
    id: 'respeto',
    name: 'Respeto',
    description:
      'Valoramos a cada persona como es, escuchando con atención y sin juzgar.',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    imageAlt: 'Personas de distintas generaciones conversando con atención',
  },
  {
    id: 'honradez',
    name: 'Honradez',
    description:
      'Actuamos con transparencia y coherencia en cada decisión y compromiso.',
    imageUrl:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    imageAlt: 'Apretón de manos firme entre dos personas',
  },
  {
    id: 'paz',
    name: 'Paz',
    description:
      'Promovemos ambientes de diálogo y armonía donde cada persona puede crecer.',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    imageAlt: 'Paisaje sereno al amanecer con cielo claro',
  },
  {
    id: 'honor',
    name: 'Honor',
    description:
      'Reconocemos la dignidad de cada persona y la integridad de nuestra misión.',
    imageUrl:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
    imageAlt: 'Persona mayor siendo reconocida con dignidad por su comunidad',
  },
  {
    id: 'lealtad',
    name: 'Lealtad',
    description:
      'Permanecemos junto a nuestra comunidad en los momentos difíciles y en los de celebración.',
    imageUrl:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    imageAlt: 'Grupo de personas caminando juntas',
  },
  {
    id: 'confianza',
    name: 'Confianza',
    description:
      'Construimos relaciones sólidas basadas en la palabra cumplida y el compromiso real.',
    imageUrl:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80',
    imageAlt: 'Mano extendida en señal de apoyo y confianza',
  },
  {
    id: 'integridad',
    name: 'Integridad',
    description:
      'Hacemos lo correcto incluso cuando nadie observa. Es el cimiento de todo lo que hacemos.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    imageAlt: 'Persona trabajando con concentración y determinación',
  },
  {
    id: 'compromiso',
    name: 'Compromiso',
    description:
      'Nos involucramos de lleno en cada proyecto, porque sabemos que el servicio verdadero cuesta.',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    imageAlt: 'Voluntarios trabajando juntos en un proyecto comunitario',
  },
  {
    id: 'tolerancia',
    name: 'Tolerancia',
    description:
      'Celebramos las diferencias como una riqueza y hacemos espacio para todas las historias.',
    imageUrl:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80',
    imageAlt: 'Personas de distintos orígenes sentadas juntas en conversación',
  },
  {
    id: 'responsabilidad',
    name: 'Responsabilidad',
    description:
      'Asumimos las consecuencias de nuestras acciones y cuidamos los recursos que nos son confiados.',
    imageUrl:
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80',
    imageAlt: 'Persona liderando una tarea con cuidado y atención',
  },
  {
    id: 'bondad',
    name: 'Bondad',
    description:
      'Elegimos la generosidad como forma de vida, sin esperar nada a cambio.',
    imageUrl:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    imageAlt: 'Persona entregando comida con generosidad y calidez',
  },
  {
    id: 'solidaridad',
    name: 'Solidaridad',
    description:
      'Nos ponemos del lado de quien más necesita, porque ninguna persona debería enfrentar sola sus desafíos.',
    imageUrl:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
    imageAlt: 'Muchas manos superpuestas en señal de unión y solidaridad',
  },
  {
    id: 'esfuerzo',
    name: 'Esfuerzo',
    description:
      'Damos lo mejor en cada tarea porque honrar a Dios y a nuestra comunidad merece lo máximo.',
    imageUrl:
      'https://images.unsplash.com/photo-1594882645126-14ac19a3b5b5?w=600&q=80',
    imageAlt: 'Persona en plena actividad con determinación y esfuerzo',
  },
];

export const OrganizationalValues = () => {
  return (
    <section
      className="bg-surface-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="valores-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Encabezado ── */}
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-amber">
            Lo que nos guía
          </p>
          <h2
            id="valores-heading"
            className="mt-2 font-serif text-4xl font-bold tracking-tight text-dark"
          >
            Nuestros valores
          </h2>
          <div
            className="mt-3 h-0.75 w-10 bg-brand-accent"
            aria-hidden="true"
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-dark-soft">
            Creemos que los valores no son aspiraciones abstractas: son decisiones
            que tomamos cada día en cada actividad, retiro y proyecto junto a
            nuestra comunidad.
            Estos catorce principios dan forma a quiénes somos y a cómo servimos. No son reglas impuestas, 
            sino el carácter que elegimos cultivar como asociación.
          </p>
        </div>

        {/* ── Grilla de cards ── */}
        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          role="list"
          aria-label="Valores de Valores Sinaí"
        >
          {VALORES.map((valor) => (
            <li
              key={valor.id}
              className="group relative aspect-3/4 overflow-hidden rounded-2xl bg-dark"
            >
              {/* Imagen de fondo */}
              <img
                src={valor.imageUrl}
                alt={valor.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.08]"
              />

              {/* Overlay gradiente — visible en reposo, desaparece en hover */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5 transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
              />

              {/* Overlay sólido — invisible en reposo, aparece en hover */}
              <div
                className="absolute inset-0 bg-black/68 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Línea brand-accent inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.75 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />

              {/* Contenido de texto */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <p className="font-serif text-base font-bold leading-snug text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:mb-2 sm:text-[17px]">
                  {valor.name}
                </p>
                <p className="max-h-0 overflow-hidden text-[11.5px] leading-[1.55] text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:max-h-28 group-hover:opacity-100 sm:text-xs">
                  {valor.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Stat cards ── */}
        {/* <div className="mt-10 grid max-w-sm grid-cols-2 gap-3">
          <div className="rounded-2xl bg-dark p-5">
            <span className="block font-serif text-[34px] font-bold leading-none text-brand-accent">
              {VALORES.length}
            </span>
            <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-surface-cream/60">
              Valores que nos definen
            </span>
          </div>
          <div className="rounded-2xl bg-dark p-5">
            <span className="block font-serif text-[34px] font-bold leading-none text-brand-accent">
              1
            </span>
            <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-surface-cream/60">
              Propósito que los une
            </span>
          </div>
        </div> */}

      </div>
    </section>
  );
};