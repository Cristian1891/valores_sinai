// src/features/what-we-offer/constants/hero.ts
//
// PATRÓN FACTORY CON t():
//   Las constantes con texto no pueden llamar t() en el nivel de módulo
//   porque los hooks de React solo son válidos dentro del ciclo de render.
//   La solución es exportar una función que recibe t y devuelve el array.
//   El componente la llama en el cuerpo de render (no en un hook extra),
//   lo cual es correcto y no genera renders innecesarios.
//
// NOTA: Si en el futuro los claims se vuelven más complejos o se reutilizan
//   en múltiples features, este patrón escala bien hacia un custom hook
//   useHeroClaims() que encapsula tanto t como useMemo.

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