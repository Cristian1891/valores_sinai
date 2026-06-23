import type { LucideIcon } from 'lucide-react'
import type { CONTACT_SCHEMA_SHAPE } from '../utils/contactSchema'
import type { UseFormHandleSubmit } from 'react-hook-form'

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
  phone:         string      
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


export type ContactSchema = typeof CONTACT_SCHEMA_SHAPE

export interface ValidationMessages {
  fullNameMin:              string
  fullNameMax:              string
  fullNameLettersRequired:  string
  emailInvalid:             string
  phoneRequired:            string
  phoneOnlyNumbers:         string
  phoneInvalid:             string
  organizationMax:          string
  queryTypeRequired:        string
  messageMin:               string
  messageMax:               string
}

export type ContactOnSubmit = ReturnType<UseFormHandleSubmit<ContactFormData>>

export interface FieldProps {
  id:        string
  label:     string
  required?: boolean
  error?:    string
  children:  React.ReactNode
}
