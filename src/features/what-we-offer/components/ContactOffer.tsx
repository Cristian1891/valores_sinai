// src/features/que-ofrecemos/components/CtaContactoOfrece.tsx
//
// Cierre de la página "¿Qué Ofrecemos?" — el único CTA de conversión.
// Principio UX: toda página de catálogo necesita un cierre que invite a actuar.
// El visitante que llegó hasta acá ya vio todos los espacios → está listo.
//
// Fondo: bg-dark-soft → contrasta con ParaQuienEs (bg-white).
// El CTA apunta a /contacto — no tiene lógica de formulario propia.

import { Link } from 'react-router';

export const ContactOffer: React.FC = () => {
  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-ofrece-heading"
    >
      <div className="mx-auto max-w-3xl text-center">

        {/* Kicker */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          Reservas y consultas
        </p>

        {/* Headline */}
        <h2
          id="cta-ofrece-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          ¿Querés usar nuestros espacios?
        </h2>

        {/* Bajada */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
          Contactanos para consultar disponibilidad, armar un presupuesto o conocer más
          sobre cómo podés reservar el predio para tu iglesia, ministerio, grupo o evento.
        </p>

        {/* Datos de contacto rápido — reduce fricción antes del formulario */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href="mailto:valoressinai@gmail.com"
            className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-amber transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            valoressinai@gmail.com
          </a>
          <span className="hidden text-white/30 sm:block" aria-hidden="true">·</span>
          <a
            href="https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-amber transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
            </svg>
            Av. Juan Domingo Perón 3251, Pres. Derqui
          </a>
        </div>

        {/* CTA principal */}
        <div className="mt-10">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Envianos tu consulta
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

/*
──────────────────────────────────────────────────────────────
INTEGRACIÓN en QueOfrecemos.tsx (feature page)
──────────────────────────────────────────────────────────────
import { HeroOfrece }          from './components/HeroOfrece';
import { EspaciosDestacados }  from './components/EspaciosDestacados';
import { GaleriaInstalaciones } from './components/GaleriaInstalaciones';
import { ParaQuienEs }         from './components/ParaQuienEs';
import { CtaContactoOfrece }   from './components/CtaContactoOfrece';

export const QueOfrecemos: React.FC = () => (
  <>
    <HeroOfrece />
    <EspaciosDestacados />
    <GaleriaInstalaciones />
    <ParaQuienEs />
    <CtaContactoOfrece />
  </>
);

──────────────────────────────────────────────────────────────
Secuencia de fondos:
  HeroOfrece           → bg-white
  EspaciosDestacados   → bg-surface-cream
  GaleriaInstalaciones → bg-dark
  ParaQuienEs          → bg-white
  CtaContactoOfrece    → bg-dark-soft
──────────────────────────────────────────────────────────────
*/