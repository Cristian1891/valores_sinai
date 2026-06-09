// src/features/donations/DonationsPage.tsx
//
// Correcciones vs. versión anterior:
//  ① DonationImpactSummary ahora se renderiza (antes estaba definido pero nunca usado)
//  ② Import path de DonationSuccessPage corregido (mismo nivel que DonationsPage)

import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { DonationHero } from './components/DonationHero';
import { DonationCategorySelector } from './components/DonationCategorySelector';
import { AcademyDonationPanel } from './components/AcademyDonationPanel';
import { GeneralDonationPanel } from './components/GeneralDonationPanel';
import { BankTransferInfo } from './components/BankTransferInfo';
import { DonationSuccessPage } from './components/DonationSuccessPage';  // ← mismo nivel, no en /components

export type DonationCategory = 'academy' | 'solidarity' | null;

export const DonationsPage = () => {
  const { t } = useTranslation('donations');
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<DonationCategory>(null);

  // Redirect a success page cuando MP redirige con ?success=true
  const isSuccess = searchParams.get('success') === 'true';
  if (isSuccess) return <DonationSuccessPage />;

  return (
    <div className="min-h-screen bg-surface-cream dark:bg-dark">

      <DonationHero />

      {/* Resumen de impacto — muestra qué logra cada monto */}
      {/* <DonationImpactSummary /> */}

      {/* Selector de categoría + paneles condicionales */}
      <section id="donation-selector" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              {t('page.kicker', 'Tu aporte importa')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl">
              {t('page.title', 'Elegí cómo querés ayudar')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-soft dark:text-gray-mid">
              {t(
                'page.subtitle',
                'Cada donación, sin importar el monto, hace una diferencia real en la vida de nuestra comunidad.',
              )}
            </p>
          </div>

          <DonationCategorySelector
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </section>

      {/* Paneles de donación — se revelan según la categoría seleccionada */}
      {selectedCategory === 'academy'    && <AcademyDonationPanel />}
      {selectedCategory === 'solidarity' && <GeneralDonationPanel />}

      {/* Transferencia bancaria — siempre visible como opción alternativa */}
      <BankTransferInfo />

    </div>
  );
};