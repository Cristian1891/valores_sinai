import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { DonationForm }    from './DonationForm';
import { ACADEMY_COURSES } from '../constants/donationConstants';
import { PAYMENT_LINKS as LINKS } from '../constants/paymentLinks';
import { AudioIcon }       from '../../academy/icons/AudioIcon';
import { MarketingIcon }   from '../../academy/icons/MarketingIcon';
import { PhotographyIcon } from '../../academy/icons/PhotographyIcon';
import { StreamingIcon }   from '../../academy/icons/StreamingIcon';
import { DirectionIcon, FilmIcon, IconInfo2, ProductionIcon, VideoIcon } from '../constants/icons';
import type { IconProps } from '../types/donations';



const COURSE_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  video:      VideoIcon,
  photo:      PhotographyIcon,
  audio:      AudioIcon,
  direction:  DirectionIcon,
  marketing:  MarketingIcon,
  streaming:  StreamingIcon,
  photo_cine: FilmIcon,
  production: ProductionIcon,
};


export const AcademyDonationPanel = () => {
  const { t } = useTranslation('donations');

  return (
    <section
      id="academy-panel"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="type-kicker text-brand-accent">
              {t('academy.kicker')}
            </p>
            <h2 className="mt-3 type-donate text-dark dark:text-white lg:text-3xl">
              {t('academy.title')}
            </h2>
            <p className="mt-4 type-body text-dark-soft dark:text-surface-cream sm:text-lg">
              {t('academy.desc')}
            </p>

            <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
              <p className="flex items-center gap-1.5 type-label text-brand-amber">
                <IconInfo2 />
                {t('academy.notice')}
              </p>
              <p className="mt-1 type-body-sm text-dark-soft dark:text-surface-cream">
                {t('academy.noticeText')}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 type-label text-dark dark:text-white">
                {t('academy.coursesTitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {ACADEMY_COURSES.map((course) => {
                  const Icon = COURSE_ICONS[course.id];
                  return (
                    <span
                      key={course.id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface-cream px-3 py-1.5 type-caption text-dark-soft dark:border-white/10 dark:bg-dark dark:text-surface-cream"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                      {t(course.nameKey)}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <DonationForm
              category="academy"
              accentColor="yellow"
              paymentLinks={{ mp: LINKS.academy.mp }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};