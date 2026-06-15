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
//
// ─────────────────────────────────────────────────────────────────────────────
// FIX MULTIIDIOMA:
//
// El bug original era usar useMemo(() => getContactSchema(t), [t]) con
// zodResolver(schema). Zod internaliza los strings de error al construir el
// schema: una vez construido en español, los mensajes quedan en español aunque
// t() cambie. useMemo no ayuda porque Zod ya copió los strings.
//
// Solución: createContactResolver(t) es un Resolver<ContactFormData> que llama
// a getValidationMessages(t) en cada invocación del resolver — es decir, cada
// vez que RHF valida (submit, onChange, trigger). El t() que recibe siempre es
// el del idioma activo en ese momento.
//
// Para que RHF use el resolver actualizado cuando cambia el idioma, recreamos
// el resolver memoizado con i18n.language como dependencia. Como el resolver
// es solo una función (no un objeto de estado), esto es barato.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm, type UseFormHandleSubmit } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { DESTINATION_MAP } from '../constants/contact'
import { createContactResolver } from '../utils/contactSchema'
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

  // El resolver se recrea solo cuando cambia el idioma activo.
  // createContactResolver(t) devuelve una función que, al ser llamada por RHF,
  // llama a getValidationMessages(t) con el t() del closure — que en ese momento
  // ya refleja el idioma actual gracias a la dependencia en i18n.language.
  const resolver = useMemo(
    () => createContactResolver(t),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language], // t cambia con el idioma pero su referencia no es estable;
                     // i18n.language sí es un string primitivo estable que cambia
                     // exactamente cuando el idioma cambia. Es la dependencia correcta.
  )

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver,
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

  // ── Re-validar errores visibles al cambiar de idioma ─────────────────────
  //
  // Cuando el resolver cambia (nuevo idioma), los errores que ya están en
  // pantalla siguen mostrando el texto del idioma anterior porque RHF no
  // re-valida automáticamente al cambiar el resolver.
  //
  // Este efecto detecta qué campos tienen errores visibles y los re-valida,
  // produciendo mensajes en el idioma nuevo. Solo se ejecuta si hay errores
  // (Object.keys check evita work innecesario en el caso feliz).
  useEffect(() => {
    const fieldsWithErrors = Object.keys(errors) as Array<keyof ContactFormData>
    if (fieldsWithErrors.length > 0) {
      trigger(fieldsWithErrors)
    }
    // Solo depende del idioma activo, no de `errors` ni `trigger`
    // (ambos son estables o tienen identidad nueva en cada render de RHF,
    // lo que causaría un loop). El efecto de idioma es suficiente.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language])

  // ── Handlers con validación condicional por contenido ─────────────────────
  //
  // El patrón es: el usuario puede escribir lo que quiera (no filtramos nada).
  // Si tiene contenido, le damos feedback de formato en tiempo real.
  // Si borró todo o nunca escribió nada, silencio total — no interrumpir.

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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