import type { LangSelectorProps } from '../../../types/global';


export const LangSelector = ({
  variant, currentLang, languages, t,
  openDropdown, toggleDropdown, changeLang,
}: LangSelectorProps) => {
  const selected = currentLang.slice(0, 2);

  if (variant === 'desktop') {
    return (
      <div className="relative ml-1">
        <button
          type="button"
          data-dropdown-toggle
          onClick={() => toggleDropdown('lang')}
          className="inline-flex items-center gap-1 rounded px-2 py-2 type-label text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
          aria-haspopup="menu"
          aria-expanded={openDropdown === 'lang'}
          aria-label={t('navbar.language')}
        >
          <span className="type-caption uppercase">{selected}</span>
        </button>

        {openDropdown === 'lang' && (
          <div
            data-dropdown
            role="menu"
            className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-dark-soft shadow-2xl shadow-black/60 ring-1 ring-white/5"
          >
            {languages.map((lng) => {
              const isSelected = selected === lng;
              return (
                <button
                  key={lng}
                  type="button"
                  role="menuitem"
                  onClick={() => changeLang(lng)}
                  className={[
                    'w-full text-left px-4 py-2.5 type-label flex items-center justify-between',
                    'transition-colors duration-150 cursor-pointer',
                    isSelected
                      ? 'text-brand-accent bg-brand-accent/10'
                      : 'text-white/80 hover:bg-white/5 hover:text-brand-accent',
                  ].join(' ')}
                >
                  <span>{t(`navbar.languages.${lng}`)}</span>
                  {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="mb-2 type-kicker text-white/70">{t('navbar.language')}</p>
      <div className="flex flex-wrap gap-2">
        {languages.map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => changeLang(lng)}
            className={[
              'rounded-full px-3 py-2 type-label transition-colors',
              selected === lng
                ? 'bg-brand-accent text-dark'
                : 'bg-white/5 text-white hover:bg-white/10',
            ].join(' ')}
          >
            {t(`navbar.languages.${lng}`)}
          </button>
        ))}
      </div>
    </div>
  );
};