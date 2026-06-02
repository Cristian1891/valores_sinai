import { useTranslation } from "react-i18next";


// ── Avatar con iniciales — reutilizable ───────────────────────────────────────
interface InitialsAvatarProps {
  initials: string;
  size?: 'md' | 'lg';
  /** Clases extra de color de fondo/texto. Por defecto: brand-accent / dark */
  className?: string;
}
 
const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  initials,
  size = 'md',
  className = 'bg-brand-accent text-dark',
}) => {
  const sizeClass =
    size === 'lg'
      ? 'h-20 w-20 text-2xl sm:h-24 sm:w-24 sm:text-3xl'
      : 'h-14 w-14 text-base';
 
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold leading-none ring-4 ring-white/20 ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

export const PresidentMessage = () => {
  const { t } = useTranslation('about');
 
  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="president-heading"
    >
      <div className="mx-auto max-w-3xl">
 
        {/* Eyebrow */}
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          {t('president.kicker', 'Una palabra de nuestro presidente')}
        </p>
        <h2
          id="president-heading"
          className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {t('president.title', 'Mensaje de Hugo Alegre')}
        </h2>
 
        {/* Card del mensaje */}
        <div className="overflow-hidden rounded-3xl bg-dark ring-1 ring-white/10">
 
          {/* Encabezado de la card — identidad del presidente */}
          <div className="flex items-center gap-5 border-b border-white/10 px-8 py-6">
            {/* Avatar con iniciales HA — opción elegida porque el presidente no desea foto */}
            <InitialsAvatar
              initials="HA"
              size="lg"
              className="bg-brand-accent text-dark"
            />
            <div>
              <p className="text-lg font-bold text-white">
                {t('president.name', 'Hugo Alegre')}
              </p>
              <p className="text-sm text-white/60">
                {t('president.role', 'Presidente · Asociación Civil Valores Sinaí')}
              </p>
            </div>
          </div>
 
          {/* Cuerpo del mensaje */}
          <div className="relative px-8 py-10">
            {/* Comillas decorativas */}
            <span
              className="pointer-events-none absolute right-8 top-6 font-serif text-8xl leading-none text-brand-accent/10 select-none"
              aria-hidden="true"
            >
              "
            </span>
 
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              {t('president.messageLabel', 'Mensaje del Presidente')}
            </p>
 
            <p className="mt-4 text-base leading-8 text-white/80">
              {t('president.greeting', 'Querida comunidad:')}
            </p>
 
            <p className="mt-4 text-base leading-8 text-white/80">
              {t(
                'president.message1',
                'Valores Sinaí nació de un sueño que Dios puso en mi corazón: ser un puente para que más personas puedan conocer el amor de Jesús de manera real, práctica y cercana.',
              )}
            </p>
 
            <p className="mt-4 text-base leading-8 text-white/80">
              {t(
                'president.message2',
                'Cada proyecto, cada actividad y cada encuentro son posibles gracias al compromiso de un equipo apasionado y al apoyo de quienes confían en esta visión.',
              )}
            </p>
 
            <p className="mt-4 text-base leading-8 text-white/80">
              {t(
                'president.message3',
                'Te invito a sumarte a esta familia, a compartir tus dones y a ser parte de una historia donde Dios sigue obrando cada día.',
              )}
            </p>
 
            {/* Firma */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="h-px w-8 bg-brand-accent" aria-hidden="true" />
              <p className="font-serif text-sm italic text-white/60">
                {t('president.signature', 'Con gratitud y esperanza, Hugo Alegre')}
              </p>
            </div>
          </div>
        </div>
 
        {/* Versículo de cierre */}
        <p className="mt-10 text-center font-serif text-sm italic leading-7 text-white/50">
          {t(
            'president.closingVerse',
            '"Amar al prójimo como a ti mismo." — Nuestro versículo guía',
          )}
        </p>
 
      </div>
    </section>
  );
};
 
/*
──────────────────────────────────────────────────────────────
CLAVES i18n sugeridas → src/i18n/locales/es/about.json
──────────────────────────────────────────────────────────────
"team": {
  "kicker": "Las personas detrás de Sinaí",
  "title": "Nuestro equipo",
  "imageAlt": "Equipo de trabajo de Valores Sinaí reunido",
  "description1": "Somos un grupo de colaboradores y profesionales que compartimos una misma visión: construir una comunidad más solidaria, humana y unida.",
  "description2": "Cada integrante aporta su conocimiento y dedicación para hacer realidad nuestros proyectos, guiados por valores humanísticos y por el deseo genuino de ver vidas transformadas.",
  "valuesLabel": "Valores del equipo",
  "value1": "Compromiso",
  "value2": "Servicio",
  "value3": "Solidaridad",
  "value4": "Fe",
  "value5": "Excelencia"
},
"president": {
  "kicker": "Una palabra de nuestro presidente",
  "title": "Mensaje de Hugo Alegre",
  "name": "Hugo Alegre",
  "role": "Presidente · Asociación Civil Valores Sinaí",
  "messageLabel": "Mensaje del Presidente",
  "greeting": "Querida comunidad:",
  "message1": "Valores Sinaí nació de un sueño que Dios puso en mi corazón: ser un puente para que más personas puedan conocer el amor de Jesús de manera real, práctica y cercana.",
  "message2": "Cada proyecto, cada actividad y cada encuentro son posibles gracias al compromiso de un equipo apasionado y al apoyo de quienes confían en esta visión.",
  "message3": "Te invito a sumarte a esta familia, a compartir tus dones y a ser parte de una historia donde Dios sigue obrando cada día.",
  "signature": "Con gratitud y esperanza, Hugo Alegre",
  "closingVerse": "\"Amar al prójimo como a ti mismo.\" — Nuestro versículo guía"
}
──────────────────────────────────────────────────────────────
*/