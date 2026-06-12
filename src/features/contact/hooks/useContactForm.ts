// src/features/contact/hooks/useContactForm.ts
//
// Custom hook que encapsula la lógica del formulario de contacto.
// ─────────────────────────────────────────────────────────────────────────────
// QUÉ VIVE ACÁ:
//   - Instancia de react-hook-form con zodResolver
//   - Estado del ciclo de envío (SubmitState)
//   - onSubmit: construcción del payload + fetch a FormSubmit + toast
//   - handleResetError: limpia el estado de error para reintentar
//
// QUÉ NO VIVE ACÁ:
//   - JSX / renderizado → siempre en el componente
//   - Clases CSS → constants/contact.ts
//   - Constantes de datos → constants/contact.ts
//   - Schema de validación → utils/contactSchema.ts
//
// POR QUÉ UN CUSTOM HOOK Y NO useState INLINE:
//   ContactForm tenía 3 useState (submitState implícito en isSubmitting + estado
//   propio), lógica de fetch, manejo de errores y toasts mezclados con JSX.
//   Extraerlo permite:
//     1. Testear la lógica de envío sin montar el componente.
//     2. Que el componente sea puramente declarativo.
//     3. Reutilizar el hook si hay más puntos de entrada al mismo formulario.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { DESTINATION_MAP } from '../constants/contact'
import { getContactSchema } from '../utils/contactSchema'
import type { ContactFormData, SubmitState } from '../types/contact'

export interface UseContactFormReturn {
  // — react-hook-form
  register:     ReturnType<typeof useForm<ContactFormData>>['register']
  handleSubmit: ReturnType<typeof useForm<ContactFormData>>['handleSubmit']
  errors:       ReturnType<typeof useForm<ContactFormData>>['formState']['errors']
  isSubmitting: boolean
  messageValue: string
  // — estado de envío
  submitState:      SubmitState
  onSubmit:         ReturnType<typeof useForm<ContactFormData>>['handleSubmit'] extends (fn: infer F) => infer R ? R : never
  handleResetError: () => void
}

export function useContactForm() {
  const { t, i18n } = useTranslation('contact')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  // El schema se reconstruye solo cuando cambia el idioma (t cambia de referencia
  // al cambiar de locale). useMemo evita recrearlo en cada render.
  const schema = useMemo(() => getContactSchema(t), [t])

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      fullName:     '',
      email:        '',
      phone:        '',
      organization: '',
      queryType:    undefined,
      message:      '',
    },
  })

  const messageValue = watch('message') ?? ''

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    setSubmitState('loading')

    try {
      const destinationEmail = DESTINATION_MAP[data.queryType]

      // La fecha se formatea con el locale activo de i18n para consistencia
      // con el idioma seleccionado por el usuario.
      const sentAt = new Date().toLocaleString(i18n.language, {
        dateStyle: 'full',
        timeStyle: 'medium',
      })

      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(destinationEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            [t('email.fields.fullName')]:     data.fullName,
            [t('email.fields.email')]:        data.email,
            [t('email.fields.phone')]:        data.phone || t('email.fields.notProvided'),
            [t('email.fields.organization')]: data.organization || t('email.fields.notProvided'),
            [t('email.fields.queryType')]:    data.queryType,
            [t('email.fields.message')]:      data.message,
            [t('email.fields.sentAt')]:       sentAt,
            // Opciones de FormSubmit — estas claves son de la API, no se traducen
            _subject:  t('email.subject', {
              queryType: data.queryType,
              fullName:  data.fullName,
            }),
            _replyto:  data.email,
            _captcha:  'false',
            _template: 'table',
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`FormSubmit respondió con status ${response.status}`)
      }

      reset()
      setSubmitState('idle')
      toast.success(t('form.toastSuccess'))
    } catch (error) {
      console.error('[useContactForm] Error al enviar:', error)
      setSubmitState('error')
      toast.error(t('form.toastError'))
    }
  })

  const handleResetError = () => setSubmitState('idle')

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    messageValue,
    submitState,
    onSubmit,
    handleResetError,
  }
}