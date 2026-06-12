// src/features/donate/DonationsPage.tsx

import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import { DonationHero }             from './components/DonationHero';
import { DonationCategorySelector } from './components/DonationCategorySelector';
import { AcademyDonationPanel }     from './components/AcademyDonationPanel';
import { GeneralDonationPanel }     from './components/GeneralDonationPanel';
import { BankTransferInfo }         from './components/BankTransferInfo';
import { DonationSuccessPage }      from './components/DonationSuccessPage';

// DonationCategory vive en types/ — se re-exporta desde aquí para
// que los componentes hijos puedan importarlo desde un único punto.
export type { DonationCategory } from './types/donations';

export const DonationsPage = () => {
  const { t } = useTranslation('donations');
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<import('./types/donations').DonationCategory>(null);

  if (searchParams.get('success') === 'true') {
    return <DonationSuccessPage />;
  }

  return (
    <div className="min-h-screen bg-surface-cream dark:bg-dark">
      <DonationHero />

      <section id="donation-selector" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              {t('page.kicker')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl">
              {t('page.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-soft dark:text-gray-mid">
              {t('page.subtitle')}
            </p>
          </div>

          <DonationCategorySelector
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </section>

      {selectedCategory === 'academy'    && <AcademyDonationPanel />}
      {selectedCategory === 'solidarity' && <GeneralDonationPanel />}

      <BankTransferInfo />
    </div>
  );
};