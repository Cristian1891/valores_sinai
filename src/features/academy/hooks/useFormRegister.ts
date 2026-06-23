import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FORM_DESTINATION_EMAIL,
  FORM_INITIAL_STATE,
  FORM_AREA_LABEL_MAP,
} from '../constants/areas-form';
import type { FormData, FormErrors, SubmitState, UseFormRegisterReturn } from '../types/academy';
import { hasErrors, validateForm } from '../utils/form-validation';


export function useFormRegister(): UseFormRegisterReturn {
  const { t, i18n } = useTranslation('academy');

  const [formData,    setFormData]    = useState<FormData>({ ...FORM_INITIAL_STATE });
  const [errors,      setErrors]      = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const hasSubmittedOnce = useRef(false);

  const setField = useCallback(
    <K extends keyof FormData>(field: K) =>
      (val: FormData[K]) => {
        setFormData((prev) => {
          const next = { ...prev, [field]: val };

          if (hasSubmittedOnce.current) {
            setErrors(validateForm(next, t));
          }

          return next;
        });
      },
    [t],
  );

  const handleBlur = useCallback(
    (field: keyof FormData) => () => {
      if (!hasSubmittedOnce.current) return;

      setErrors((prev) => {
        const allErrors = validateForm(formData, t);
        const next = { ...prev };

        if (allErrors[field]) {
          next[field] = allErrors[field];
        } else {
          delete next[field];
        }

        return next;
      });
    },
    [formData, t],
  );

  useEffect(() => {
    if (!hasSubmittedOnce.current) return;
    setErrors(validateForm(formData, t));
  }, [i18n.language]);

  const handleSubmit = useCallback(async () => {
    hasSubmittedOnce.current = true;

    const newErrors = validateForm(formData, t);
    setErrors(newErrors);

    if (hasErrors(newErrors)) {
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setSubmitState('loading');

    const areaLabel = FORM_AREA_LABEL_MAP[formData.area] ?? formData.area;

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(FORM_DESTINATION_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Nombre completo':    formData.nombre,
            'Correo electrónico': formData.email,
            'Teléfono':           formData.telefono,
            'Área de interés':    areaLabel,
            'Fecha de envío': new Date().toLocaleString('es-AR', {
              dateStyle: 'full',
              timeStyle: 'medium',
            }),
            _subject:  `[Academia Sinaí] Nueva consulta de interés — ${formData.nombre}`,
            _replyto:  formData.email,
            _captcha:  'false',
            _template: 'table',
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`FormSubmit respondió con status ${response.status}`);
      }

      setSubmitState('success');
    } catch (err) {
      console.error('[useFormRegister] Error al enviar:', err);
      setSubmitState('error');
    }
  }, [formData, t]);

  const handleRetry = useCallback(() => {
    setSubmitState('idle');
  }, []);


  return {
    formData,
    errors,
    submitState,
    setField,
    handleBlur,
    handleSubmit,
    handleRetry,
  };
}