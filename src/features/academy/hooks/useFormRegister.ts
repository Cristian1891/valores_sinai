// src/features/academy/hooks/useFormRegister.ts
//
// Hook personalizado — lógica del formulario de registro de Academia.
// ─────────────────────────────────────────────────────────────────────────────
// RESPONSABILIDAD ÚNICA:
//   Este hook es el único lugar donde viven el estado, las validaciones
//   y el submit del formulario. FormRegister.tsx solo consume lo que
//   este hook expone y se dedica exclusivamente a renderizar.
//
// PATRÓN:
//   Se sigue el patrón "stateful hook + dumb component":
//   el hook contiene TODO el comportamiento; el componente contiene
//   TODO el markup. La separación es total y sin fugas en ninguna dirección.
//
// POR QUÉ UN HOOK Y NO UN STORE (Zustand / Context):
//   El estado del formulario es efímero y local a una sola pantalla.
//   Un store global sería over-engineering. El hook es la capa correcta
//   para estado complejo local — reusable, testeable, sin acoplamiento.
//
// CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
//   - Se incorpora `useTranslation` para obtener `t`.
//   - `t` se pasa a `validateForm` en cada llamada (setField, handleBlur,
//     handleSubmit). Esto garantiza que si el idioma cambia mid-session
//     los mensajes de error se actualicen correctamente.
//   - `t` se agrega a las deps de los `useCallback` que llaman a validateForm.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FORM_DESTINATION_EMAIL,
  FORM_INITIAL_STATE,
  FORM_AREA_LABEL_MAP,
} from '../constants/areas-form';
import type { FormData, FormErrors, SubmitState } from '../types/academy';
import { hasErrors, validateForm } from '../utils/form-validation';

// ── Tipos del hook ────────────────────────────────────────────────────────────

export interface UseFormRegisterReturn {
  // Estado
  formData:    FormData;
  errors:      FormErrors;
  submitState: SubmitState;

  // Handlers de campo
  setField:   <K extends keyof FormData>(field: K) => (val: FormData[K]) => void;
  handleBlur: (field: keyof FormData) => () => void;

  // Acciones
  handleSubmit: () => Promise<void>;
  handleRetry:  () => void;
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useFormRegister(): UseFormRegisterReturn {
  const { t } = useTranslation('academy');

  const [formData,    setFormData]    = useState<FormData>({ ...FORM_INITIAL_STATE });
  const [errors,      setErrors]      = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const hasSubmittedOnce = useRef(false);

  // ── Setters ──────────────────────────────────────────────────────────────

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

  // ── Submit ────────────────────────────────────────────────────────────────

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

    // Obtenemos la etiqueta legible desde el mapa estático (español),
    // sin depender de i18next en el hook.
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

  // ── Retry ─────────────────────────────────────────────────────────────────

  const handleRetry = useCallback(() => {
    setSubmitState('idle');
  }, []);

  // ── Return ────────────────────────────────────────────────────────────────

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