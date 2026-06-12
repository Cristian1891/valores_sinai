// src/features/what-we-offer/constants/beneficiaries.tsx
//
// EXTENSIÓN .tsx — obligatorio porque contiene JSX (los íconos Lucide).
//
// PATRÓN FACTORY CON t():
//   Misma razón que hero.ts — t() no puede llamarse en el nivel de módulo.
//   getBeneficiaryGroups(t) se llama en el cuerpo del componente Beneficiaries,
//   garantizando que siempre refleja el idioma activo.

import { Church, UsersRound, Zap, AudioLines, Ticket, HeartHandshake } from 'lucide-react'
import type { TFunction } from 'i18next'
import type { TipoGrupoItem } from '../types/what-we-offer'

export function getBeneficiaryGroups(t: TFunction): TipoGrupoItem[] {
  return [
    {
      titulo:      t('beneficiaries.groups.churches.title'),
      descripcion: t('beneficiaries.groups.churches.description'),
      icon: <Church className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
    {
      titulo:      t('beneficiaries.groups.families.title'),
      descripcion: t('beneficiaries.groups.families.description'),
      icon: <UsersRound className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
    {
      titulo:      t('beneficiaries.groups.youth.title'),
      descripcion: t('beneficiaries.groups.youth.description'),
      icon: <Zap className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
    {
      titulo:      t('beneficiaries.groups.artists.title'),
      descripcion: t('beneficiaries.groups.artists.description'),
      icon: <AudioLines className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
    {
      titulo:      t('beneficiaries.groups.events.title'),
      descripcion: t('beneficiaries.groups.events.description'),
      icon: <Ticket className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
    {
      titulo:      t('beneficiaries.groups.volunteers.title'),
      descripcion: t('beneficiaries.groups.volunteers.description'),
      icon: <HeartHandshake className="h-6 w-6 text-dark" strokeWidth={1.8} aria-hidden="true" />,
    },
  ]
}