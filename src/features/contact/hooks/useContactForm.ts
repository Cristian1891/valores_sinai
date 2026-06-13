// src/features/contact/hooks/useContactForm.ts
//
// Custom hook que encapsula la lógica del formulario de contacto.
// ─────────────────────────────────────────────────────────────────────────────
// ESTRATEGIA DE VALIDACIÓN (tres capas):
//
//   1. mode: 'onSubmit'
//      Los errores de campos vacíos nunca aparecen por hacer click-y-salir.
//      El usuario puede explorar el formulario libremente sin ser interrumpido.
//
//   2. reValidateMode: 'onChange'
//      Después del primer intento de envío fallido, todos los campos con error
//      revalidan en tiempo real mientras el usuario corrige.
//
//   3. trigger condicional en handleNameChange / handlePhoneChange
//      Para fullName y phone se dispara trigger() solo cuando value.length > 0.
//      Esto habilita feedback inmediato de formato (ej: "solo ingresaste números")
//      mientras el usuario escribe — sin mostrar nada si el campo está vacío.
//      El blur de un campo vacío sigue sin mostrar nada (cubierto por capa 1).
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useMemo, useState } from 'react'
import { useForm, type UseFormHandleSubmit } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { DESTINATION_MAP } from '../constants/contact'
import { getContactSchema } from '../utils/contactSchema'
import type { ContactFormData, SubmitState } from '../types/contact'

type ContactOnSubmit = ReturnType<UseFormHandleSubmit<ContactFormData>>

export interface UseContactFormReturn {
  register:          ReturnType<typeof useForm<ContactFormData>>['register']
  handleSubmit:      ReturnType<typeof useForm<ContactFormData>>['handleSubmit']
  errors:            ReturnType<typeof useForm<ContactFormData>>['formState']['errors']
  isSubmitting:      boolean
  messageValue:      string
  handleNameChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  submitState:       SubmitState
  onSubmit:          ContactOnSubmit
  handleResetError:  () => void
}

export function useContactForm(): UseContactFormReturn {
  const { t, i18n } = useTranslation('contact')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const schema = useMemo(() => getContactSchema(t), [t])

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode:           'onSubmit',
    reValidateMode: 'onChange',
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

  // ── Handlers con validación condicional por contenido ─────────────────────
  //
  // El patrón es: el usuario puede escribir lo que quiera (no filtramos nada).
  // Si tiene contenido, le damos feedback de formato en tiempo real.
  // Si borró todo o nunca escribió nada, silencio total — no interrumpir.

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // RHF necesita conocer el valor actualizado antes de que llamemos a trigger.
      // setValue con shouldValidate:false actualiza el store sin disparar validación
      // propia de RHF — nosotros controlamos cuándo validar.
      setValue('fullName', e.target.value, { shouldDirty: true, shouldValidate: false })
      if (e.target.value.length > 0) {
        trigger('fullName')
      }
    },
    [setValue, trigger],
  )

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue('phone', e.target.value, { shouldDirty: true, shouldValidate: false })
      if (e.target.value.length > 0) {
        trigger('phone')
      }
    },
    [setValue, trigger],
  )

  // ── Submit ────────────────────────────────────────────────────────────────

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    setSubmitState('loading')

    try {
      const destinationEmail = DESTINATION_MAP[data.queryType]

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
            [t('email.fields.phone')]:        data.phone,
            [t('email.fields.organization')]: data.organization || t('email.fields.notProvided'),
            [t('email.fields.queryType')]:    data.queryType,
            [t('email.fields.message')]:      data.message,
            [t('email.fields.sentAt')]:       sentAt,
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
    handleNameChange,
    handlePhoneChange,
    submitState,
    onSubmit,
    handleResetError,
  }
}