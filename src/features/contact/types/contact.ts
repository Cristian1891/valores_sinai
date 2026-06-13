// src/features/contact/types/contact.ts

import type { LucideIcon } from 'lucide-react'

export const QUERY_TYPE_VALUES = [
  'Información general',
  'Retiros y campamentos',
  'Eventos y salones',
  'REC Pilar',
  'Administración',
  'Donaciones',
  'Consultas legales',
  'Otro',
] as const

export type QueryType = typeof QUERY_TYPE_VALUES[number]

export interface ContactFormData {
  fullName:      string
  email:         string
  phone:         string        // obligatorio — eliminado el ? para reflejar el schema
  organization?: string
  queryType:     QueryType
  message:       string
}

export type SubmitState = 'idle' | 'loading' | 'error'

export interface ContactMethod {
  key:             string
  labelKey:        string
  valueKey:        string
  descriptionKey?: string
  href:            string
  external?:       boolean
  icon:            LucideIcon
}