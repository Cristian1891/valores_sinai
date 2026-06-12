// src/features/contact/utils/contactSchema.ts

import { z } from 'zod'
import type { TFunction } from 'i18next'
import { QUERY_TYPE_VALUES } from '../types/contact'

const PHONE_REGEX = /^[+\d\s\-().]{7,20}$/

export function getContactSchema(t: TFunction) {
  return z.object({
    fullName: z
      .string()
      .min(2,  t('form.validation.fullNameMin'))
      .max(80, t('form.validation.fullNameMax')),

    email: z
      .string()
      .email(t('form.validation.emailInvalid')),

    phone: z
      .string()
      .optional()
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