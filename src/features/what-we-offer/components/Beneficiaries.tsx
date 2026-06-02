// src/features/que-ofrecemos/components/ParaQuienEs.tsx
//
// Sección recomendada que no está en los bocetos pero que UX exige:
// califica al visitante mostrando para qué tipo de grupo o evento
// está disponible el predio.
//
// Fuente: PDF "Nuestra Historia" — menciona explícitamente iglesias,
// ministerios, campamentos, retiros, eventos de la asociación y familias.
//
// Fondo: bg-white → contrasta con GaleriaInstalaciones (bg-dark)
// y con CtaContacto (bg-dark-soft).

interface TipoGrupoProps {
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
}

const TIPOS: TipoGrupoProps[] = [
  {
    titulo: 'Iglesias y ministerios',
    descripcion: 'Retiros espirituales, campamentos, encuentros de adoración y actividades que fortalezcan la fe y el compañerismo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
  },
  {
    titulo: 'Familias',
    descripcion: 'Espacios de encuentro, recreación y descanso para familias que buscan compartir tiempo de calidad en un entorno seguro y natural.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>
    ),
  },
  {
    titulo: 'Grupos de jóvenes',
    descripcion: 'Campamentos, dinámicas deportivas, actividades creativas y encuentros que impulsan el crecimiento personal y espiritual.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    titulo: 'Bandas y artistas',
    descripcion: 'REC Pilar Sinaí ofrece un estudio de grabación, streaming y podcast profesional para músicos y creadores que quieren producir con excelencia.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" />
      </svg>
    ),
  },
  {
    titulo: 'Eventos y conferencias',
    descripcion: 'El salón principal con capacidad para 400 personas y la sala de conferencias están disponibles para eventos institucionales, charlas y encuentros masivos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    titulo: 'Voluntarios y colaboradores',
    descripcion: 'Quienes deseen sumarse a servir, aprender y crecer encontrarán en Valores Sinaí un espacio abierto para compartir sus dones y talentos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-dark">
        <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM1.5 12.75v6A2.25 2.25 0 003.75 21h7.5v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5z" />
      </svg>
    ),
  },
];

export const Beneficiaries: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="paraquien-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
            Puertas abiertas
          </p>
          <h2
            id="paraquien-heading"
            className="text-3xl font-bold tracking-tight text-dark sm:text-4xl"
          >
            ¿Para quién es este espacio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dark-soft">
            En Valores Sinaí no hay barreras ni distinciones. Todas las personas son bienvenidas,
            sin importar su historia, creencias o situación.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Grilla de tipos de grupo */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TIPOS.map((tipo) => (
            <div
              key={tipo.titulo}
              className="flex gap-4 rounded-2xl bg-surface-cream p-6 ring-1 ring-black/5"
            >
              {/* Ícono — SVG semántico, sin emoji */}
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent"
                aria-hidden="true"
              >
                {tipo.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-bold text-dark">{tipo.titulo}</h3>
                <p className="text-xs leading-6 text-dark-soft">{tipo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};