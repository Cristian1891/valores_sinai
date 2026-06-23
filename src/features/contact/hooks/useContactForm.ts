import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { DESTINATION_MAP } from '../constants/contact'
import { createContactResolver } from '../utils/contactSchema'
import type { ContactFormData, ContactOnSubmit, SubmitState } from '../types/contact'


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


  const resolver = useMemo(
    () => createContactResolver(t),
    [i18n.language], 
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


  useEffect(() => {
    const fieldsWithErrors = Object.keys(errors) as Array<keyof ContactFormData>
    if (fieldsWithErrors.length > 0) {
      trigger(fieldsWithErrors)
    }
  }, [i18n.language])


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