// src/features/donations/DonationsPage.tsx  ← VERSIÓN ACTUALIZADA
//
// Cambios respecto a la versión anterior:
//   - Detecta ?success=true en la URL y renderiza DonationSuccessPage
//   - Agrega DonationImpactSummary entre el selector y los paneles
//   - Importa useSearchParams de react-router

import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { DonationHero } from './components/DonationHero';
import { DonationCategorySelector } from './components/DonationCategorySelector';
import { AcademyDonationPanel } from './components/AcademyDonationPanel';
import { GeneralDonationPanel } from './components/GeneralDonationPanel';
import { BankTransferInfo } from './components/BankTransferInfo';
// import { DonationImpactSummary } from './components/DonationImpactSummary';
import { DonationSuccessPage } from './components/DonationSuccessPage';

export type DonationCategory = 'academy' | 'solidarity' | null;

export const DonationsPage = () => {
  const { t } = useTranslation('donations');
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<DonationCategory>(null);

  // Si Stripe/MP redirige con ?success=true → mostrar página de éxito
  const isSuccess = searchParams.get('success') === 'true';
  if (isSuccess) return <DonationSuccessPage />;

  return (
    <div className="min-h-screen bg-surface-cream dark:bg-dark">
      {/* Hero con versículo y propósito */}
      <DonationHero />
 
      {/* Resumen de impacto */}
      {/* <DonationImpactSummary /> */}

      {/* Selector de categoría */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
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

      {/* Panel según categoría seleccionada */}
      {selectedCategory === 'academy' && <AcademyDonationPanel />}
      {selectedCategory === 'solidarity' && <GeneralDonationPanel />}

      {/* Transferencia bancaria — siempre visible */}
      <BankTransferInfo />
    </div>
  );
};