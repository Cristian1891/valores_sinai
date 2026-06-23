import type { TFunction } from 'i18next';
import type { FormData, FormErrors } from '../types/academy';

// ── Constantes ────────────────────────────────────────────────────────────────

const NOMBRE_REGEX       = /^[\p{L}\s'-]+$/u
const EMAIL_REGEX        = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
const TELEFONO_CHARS     = /^[0-9+\-() ]+$/
const TELEFONO_MIN       = 8
const TELEFONO_MAX       = 15


export function isNombreValido(nombre: string): boolean {
  const trimmed = nombre.trim();
  if (!trimmed || trimmed.length > 80) return false;
  if (!NOMBRE_REGEX.test(trimmed)) return false;

  const palabras = trimmed.split(/\s+/).filter((p) => p.length >= 2);
  return palabras.length >= 2;
}

export function isEmailValido(email: string): boolean {
  const trimmed = email.trim();
  return trimmed.length <= 254 && EMAIL_REGEX.test(trimmed);
}


export function isTelefonoValido(telefono: string): boolean {
  const trimmed = telefono.trim();
  if (!TELEFONO_CHARS.test(trimmed)) return false;

  const soloDigitos = trimmed.replace(/\D/g, '');
  return soloDigitos.length >= TELEFONO_MIN && soloDigitos.length <= TELEFONO_MAX;
}


export function validateForm(
  data: FormData,
  t: TFunction<'academy'>,
): FormErrors {
  const errors: FormErrors = {};

  if (!data.nombre.trim()) {
    errors.nombre = t('form.errors.nombreRequired');
  } else if (!isNombreValido(data.nombre)) {
    if (/\d/.test(data.nombre)) {
      errors.nombre = t('form.errors.nombreConNumeros');
    } else if (data.nombre.trim().split(/\s+/).filter((p) => p.length >= 2).length < 2) {
      errors.nombre = t('form.errors.nombreIncompleto');
    } else {
      errors.nombre = t('form.errors.nombreCaracteresInvalidos');
    }
  }

  if (!data.email.trim()) {
    errors.email = t('form.errors.emailRequired');
  } else if (!isEmailValido(data.email)) {
    errors.email = t('form.errors.emailInvalid');
  }

  if (!data.telefono.trim()) {
    errors.telefono = t('form.errors.telefonoRequired');
  } else if (!isTelefonoValido(data.telefono)) {
    const soloDigitos = data.telefono.replace(/\D/g, '');
    if (soloDigitos.length < TELEFONO_MIN) {
      errors.telefono = t('form.errors.telefonoMuyCorto', { min: TELEFONO_MIN });
    } else if (soloDigitos.length > TELEFONO_MAX) {
      errors.telefono = t('form.errors.telefonoMuyLargo', { max: TELEFONO_MAX });
    } else {
      errors.telefono = t('form.errors.telefonoCaracteresInvalidos');
    }
  }

  if (!data.area) {
    errors.area = t('form.errors.areaRequired');
  }

  if (!data.consentimiento) {
    errors.consentimiento = t('form.errors.consentimientoRequired');
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}