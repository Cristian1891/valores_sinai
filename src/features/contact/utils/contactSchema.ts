import { z } from 'zod'
import type { TFunction } from 'i18next'
import type { Resolver } from 'react-hook-form'
import { QUERY_TYPE_VALUES } from '../types/contact'
import type { ContactFormData, ValidationMessages } from '../types/contact'


const PHONE_REGEX        = /^[+\d\s\-().]{7,20}$/
const HAS_LETTER_RE      = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/
const HAS_NON_PHONE_RE   = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ]/


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


export function createContactResolver(t: TFunction): Resolver<ContactFormData> {
  return async (values) => {

    const result = CONTACT_SCHEMA_SHAPE.safeParse(values)

    if (result.success) {
      return { values: result.data as ContactFormData, errors: {} }
    }

    const msgs = getValidationMessages(t)

    const errors: Record<string, { type: string; message: string }> = {}

    for (const issue of result.error.issues) {
      const field = issue.path[0] as string
      if (errors[field]) continue 

      errors[field] = {
        type:    issue.code,
        message: resolveMessage(field, issue, msgs),
      }
    }

    return { values: {}, errors }
  }
}



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

  return issue.message
}