// src/features/que-ofrecemos/components/ParaQuienEs.tsx

import React from 'react';
import { Church, UsersRound, Zap, AudioLines, Ticket, HeartHandshake } from 'lucide-react';

interface TipoGrupoProps {
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
}

const TIPOS: TipoGrupoProps[] = [
  {
    titulo: 'Iglesias y ministerios',
    descripcion:
      'Retiros espirituales, campamentos, encuentros de adoración y actividades que fortalezcan la fe y el compañerismo.',
    icon: <Church className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    titulo: 'Familias',
    descripcion:
      'Espacios de encuentro, recreación y descanso para familias que buscan compartir tiempo de calidad en un entorno seguro y natural.',
    icon: <UsersRound className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    titulo: 'Grupos de jóvenes',
    descripcion:
      'Campamentos, dinámicas deportivas, actividades creativas y encuentros que impulsan el crecimiento personal y espiritual.',
    icon: <Zap className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    titulo: 'Bandas y artistas',
    descripcion:
      'REC Pilar Sinaí ofrece un estudio de grabación, streaming y podcast profesional para músicos y creadores que quieren producir con excelencia.',
    icon: <AudioLines className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    titulo: 'Eventos y conferencias',
    descripcion:
      'El salón principal con capacidad para 400 personas y la sala de conferencias están disponibles para eventos institucionales, charlas y encuentros masivos.',
    icon: <Ticket className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    titulo: 'Voluntarios y colaboradores',
    descripcion:
      'Quienes deseen sumarse a servir, aprender y crecer encontrarán en Valores Sinaí un espacio abierto para compartir sus dones y talentos.',
    icon: <HeartHandshake className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
  },
];

export const Beneficiaries: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="paraquien-heading"
    >
      <div className="mx-auto max-w-7xl">
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
            sin importar su situación, historia o creencia.
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TIPOS.map((tipo) => (
            <div
              key={tipo.titulo}
              className="flex gap-4 rounded-2xl bg-surface-cream p-6 ring-1 ring-black/5"
            >
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