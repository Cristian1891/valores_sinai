// src/features/contact/types/contact.ts
//
// Tipos centralizados de la feature "Contacto".
// ─────────────────────────────────────────────────────────────────────────────
// REGLA: Cualquier interfaz usada en ≥ 2 archivos de esta feature vive acá.
//        Tipos locales de un único componente pueden quedarse inline.
// ─────────────────────────────────────────────────────────────────────────────

import type { LucideIcon } from 'lucide-react'

// ── Formulario ────────────────────────────────────────────────────────────────

/**
 * Valores de tipo de consulta como constante de string literal.
 * Se definen acá (no en constants/) porque son parte del tipo de dato,
 * no solo una configuración de UI — el schema Zod los referencia directamente.
 */
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
  fullName:     string
  email:        string
  phone?:       string
  organization?: string
  queryType:    QueryType
  message:      string
}

/**
 * Estados del ciclo de envío del formulario.
 * 'idle'    → estado inicial / después de un reset exitoso.
 * 'loading' → petición en curso (deshabilita el botón).
 * 'error'   → la petición falló (muestra el banner de error).
 */
export type SubmitState = 'idle' | 'loading' | 'error'

// ── ContactMethods ────────────────────────────────────────────────────────────

export interface ContactMethod {
  /** Clave estable para React key y lógica interna */
  key:             string
  /** Clave i18n para el label (ej: "EMAIL") */
  labelKey:        string
  /** Clave i18n para el valor visible (ej: "valoressinai@gmail.com") */
  valueKey:        string
  /** Clave i18n opcional para descripción secundaria */
  descriptionKey?: string
  href:            string
  external?:       boolean
  icon:            LucideIcon
}