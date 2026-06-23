import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import { DonationHero }             from './components/DonationHero';
import { DonationCategorySelector } from './components/DonationCategorySelector';
import { AcademyDonationPanel }     from './components/AcademyDonationPanel';
import { GeneralDonationPanel }     from './components/GeneralDonationPanel';
import { BankTransferInfo }         from './components/BankTransferInfo';
import { DonationSuccessPage }      from './components/DonationSuccessPage';

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
            <p className="type-kicker uppercase text-brand-amber">
              {t('page.kicker')}
            </p>
            <h2 className="mt-3 type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
              {t('page.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl type-body text-dark-soft dark:text-gray-mid sm:text-lg">
              {t('page.subtitle')}
            </p>
          </div>

          <DonationCategorySelector
            selected={selectedCategory}
            onSelect={setSelectedCategory} value={'mercadopago'} onChange={function (): void {
              throw new Error('Function not implemented.');
            } }          />
        </div>
      </section>

      {selectedCategory === 'academy'    && <AcademyDonationPanel />}
      {selectedCategory === 'solidarity' && <GeneralDonationPanel />}

      <BankTransferInfo />
    </div>
  );
};