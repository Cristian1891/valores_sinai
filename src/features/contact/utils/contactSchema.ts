// src/features/contact/utils/contactSchema.ts

import { z } from 'zod'
import type { TFunction } from 'i18next'
import { QUERY_TYPE_VALUES } from '../types/contact'

const PHONE_REGEX = /^[+\d\s\-().]{7,20}$/

// Regex para detectar si el valor contiene AL MENOS UNA letra.
// Se usa para la validación de fullName (debe tener al menos una letra, no solo números)
// y para phone (no debe contener letras).
const HAS_LETTER_RE   = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/
const HAS_NON_PHONE_RE = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/

export function getContactSchema(t: TFunction) {
  return z.object({
    fullName: z
      .string()
      .min(2,  t('form.validation.fullNameMin'))
      .max(80, t('form.validation.fullNameMax'))
      // Rechaza valores que no contengan ninguna letra (ej: solo números)
      .refine(
        (val) => !val || HAS_LETTER_RE.test(val),
        t('form.validation.fullNameLettersRequired'),
      ),

    email: z
      .string()
      .email(t('form.validation.emailInvalid')),

    phone: z
      .string()
      .min(1, t('form.validation.phoneRequired'))
      // Rechaza valores que contengan letras
      .refine(
        (val) => !val || !HAS_NON_PHONE_RE.test(val),
        t('form.validation.phoneOnlyNumbers'),
      )
      // Valida el formato general del número
      .refine(
        (val) => !val || PHONE_REGEX.test(val),
        t('form.validation.phoneInvalid'),
      ),

    organization: z
      .string()
      .max(100, t('form.validation.organizationMax'))
      .optional(),

    queryType: z.enum(QUERY_TYPE_VALUES, {
      message: t('form.validation.queryTypeRequired'),
    }),

    message: z
      .string()
      .min(10,   t('form.validation.messageMin'))
      .max(1000, t('form.validation.messageMax')),
  })
}

export type ContactSchema = ReturnType<typeof getContactSchema>