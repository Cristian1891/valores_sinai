import type { TFunction } from 'i18next'
import type { ClaimItem } from '../types/what-we-offer'

export function getHeroClaims(t: TFunction): ClaimItem[] {
  return [
    {
      key: 'espacios',
      label: t('hero.claims.espacios.label'),
      text:  t('hero.claims.espacios.text'),
    },
    {
      key: 'crecimiento',
      label: t('hero.claims.crecimiento.label'),
      text:  t('hero.claims.crecimiento.text'),
    },
  ]
}