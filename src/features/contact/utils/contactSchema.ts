// src/features/contact/utils/contactSchema.ts
//
// ─── ARQUITECTURA DE VALIDACIÓN MULTIIDIOMA ───────────────────────────────────
//
// PROBLEMA QUE RESUELVE:
//   Zod internaliza los strings de error en el momento en que se construye
//   el schema (z.string().min(2, "mensaje")). Si se construye con t() en
//   español y el usuario cambia a inglés, los mensajes quedan en español
//   porque el objeto Zod ya los tiene hardcodeados internamente.
//
// SOLUCIÓN — dos exports separados:
//
//   1. CONTACT_SCHEMA_SHAPE   → schema Zod SIN mensajes. Solo define la shape
//      y las reglas estructurales (tipos, regex, refine predicates).
//      Es un singleton estático: se crea una vez y nunca cambia.
//
//   2. getValidationMessages() → función que recibe t() y devuelve un objeto
//      plano con todos los mensajes en el idioma activo.
//      Se llama en runtime, dentro del resolver, no durante construcción.
//
//   3. createContactResolver() → zodResolver personalizado que llama a
//      getValidationMessages(t) en cada validación, garantizando que los
//      mensajes siempre reflejen el idioma actual.
//
// Este patrón es el recomendado por la comunidad react-hook-form + zod para
// proyectos multiidioma. Ver:
//   https://github.com/react-hook-form/resolvers/issues/238
// ─────────────────────────────────────────────────────────────────────────────

import { z } from 'zod'
import type { TFunction } from 'i18next'
import type { Resolver } from 'react-hook-form'
import { QUERY_TYPE_VALUES } from '../types/contact'
import type { ContactFormData } from '../types/contact'

// ── Regexes (inmutables, no dependen del idioma) ──────────────────────────────

const PHONE_REGEX        = /^[+\d\s\-().]{7,20}$/
const HAS_LETTER_RE      = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/
const HAS_NON_PHONE_RE   = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/

// ── 1. Schema shape sin mensajes ──────────────────────────────────────────────
//
// z.string() sin argumentos de mensaje usa los defaults de Zod en inglés.
// Esto no importa porque este schema NUNCA se usa directamente para producir
// mensajes al usuario — solo para validar la shape y los predicados.
// Los mensajes vienen de getValidationMessages() en el resolver.

export const CONTACT_SCHEMA_SHAPE = z.object({
  fullName: z
    .string()
    .min(2)
    .max(80)
    .refine((val) => !val || HAS_LETTER_RE.test(val)),

  email: z
    .string()
    .email(),

  phone: z
    .string()
    .min(1)
    .refine((val) => !val || !HAS_NON_PHONE_RE.test(val))
    .refine((val) => !val || PHONE_REGEX.test(val)),

  organization: z
    .string()
    .max(100)
    .optional(),

  queryType: z.enum(QUERY_TYPE_VALUES),

  message: z
    .string()
    .min(10)
    .max(1000),
})

export type ContactSchema = typeof CONTACT_SCHEMA_SHAPE

// ── 2. Mensajes i18n resueltos en runtime ─────────────────────────────────────
//
// Esta función se llama con el t() activo en el momento de validar,
// no en el momento de construir el schema. Así los mensajes siempre
// reflejan el idioma que el usuario tiene seleccionado en ese instante.

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

export function getValidationMessages(t: TFunction): ValidationMessages {
  return {
    fullNameMin:             t('form.validation.fullNameMin'),
    fullNameMax:             t('form.validation.fullNameMax'),
    fullNameLettersRequired: t('form.validation.fullNameLettersRequired'),
    emailInvalid:            t('form.validation.emailInvalid'),
    phoneRequired:           t('form.validation.phoneRequired'),
    phoneOnlyNumbers:        t('form.validation.phoneOnlyNumbers'),
    phoneInvalid:            t('form.validation.phoneInvalid'),
    organizationMax:         t('form.validation.organizationMax'),
    queryTypeRequired:       t('form.validation.queryTypeRequired'),
    messageMin:              t('form.validation.messageMin'),
    messageMax:              t('form.validation.messageMax'),
  }
}

// ── 3. Resolver personalizado con mensajes reactivos al idioma ────────────────
//
// En lugar de zodResolver(schema), usamos un resolver manual que:
//   a) Valida la shape con CONTACT_SCHEMA_SHAPE.safeParse()
//   b) Si hay errores, los mapea a los mensajes del idioma actual via t()
//
// De esta forma, cada vez que el usuario dispara una validación (submit,
// onChange, onBlur), los mensajes se resuelven con el t() del idioma activo.

export function createContactResolver(t: TFunction): Resolver<ContactFormData> {
  return async (values) => {
    // Validamos la shape. Los mensajes de Zod aquí son irrelevantes
    // (los reemplazamos inmediatamente con los de i18n).
    const result = CONTACT_SCHEMA_SHAPE.safeParse(values)

    if (result.success) {
      return { values: result.data as ContactFormData, errors: {} }
    }

    // Resolvemos los mensajes en el idioma activo en este momento exacto.
    const msgs = getValidationMessages(t)

    // Mapeamos los errores de Zod a mensajes i18n.
    // Zod devuelve un array de issues con path y code.
    // Tomamos el primer issue por campo (consistent con el comportamiento
    // de zodResolver de @hookform/resolvers).
    const errors: Record<string, { type: string; message: string }> = {}

    for (const issue of result.error.issues) {
      const field = issue.path[0] as string
      if (errors[field]) continue // ya mapeamos el primer error de este campo

      errors[field] = {
        type:    issue.code,
        message: resolveMessage(field, issue, msgs),
      }
    }

    return { values: {}, errors }
  }
}

// ── Mapeo issue Zod → mensaje i18n ────────────────────────────────────────────
//
// Cada campo puede tener múltiples reglas (min, max, refine).
// Zod no tiene semántica de "qué refine falló" más allá del orden,
// por eso usamos el índice de refine (issue.validation no existe en refine;
// en cambio, para refine el code es 'custom').
// Para distinguir el primer refine del segundo en phone, miramos si el
// mensaje default de Zod incluye el predicado — pero como no tenemos el
// mensaje aquí, usamos el orden de los issues en el array de Zod:
// Zod reporta los refine en el orden en que se definieron.

function resolveMessage(
  field: string,
  issue: z.ZodIssue,
  msgs: ValidationMessages,
): string {
  switch (field) {
    case 'fullName':
      if (issue.code === 'too_small') return msgs.fullNameMin
      if (issue.code === 'too_big')   return msgs.fullNameMax
      if (issue.code === 'custom')    return msgs.fullNameLettersRequired
      break

    case 'email':
      return msgs.emailInvalid

    case 'phone':
      if (issue.code === 'too_small') return msgs.phoneRequired
      if (issue.code === 'custom') {
        // Zod reporta los refine en orden de definición y para en el primero
        // que falla (por campo). El primer refine valida "no letras" y el
        // segundo valida el regex de formato. Como tomamos solo el primer
        // issue por campo (continue arriba), distinguimos cuál falló
        // inspeccionando el input del propio issue: Zod adjunta el valor
        // original en issue.input cuando está disponible.
        const rawValue = (issue as z.ZodIssue & { input?: unknown }).input
        if (typeof rawValue === 'string' && HAS_NON_PHONE_RE.test(rawValue)) {
          return msgs.phoneOnlyNumbers
        }
        return msgs.phoneInvalid
      }
      break

    case 'organization':
      return msgs.organizationMax

    case 'queryType':
      return msgs.queryTypeRequired

    case 'message':
      if (issue.code === 'too_small') return msgs.messageMin
      if (issue.code === 'too_big')   return msgs.messageMax
      break
  }

  // Fallback: nunca debería llegar aquí si el schema está bien definido
  return issue.message
}