// src/features/academy/utils/form-validation.ts
//
// RESPONSABILIDAD ÚNICA:
//   Validación pura del formulario de registro de Academia.
//   Recibe los datos del formulario y la función `t` de i18next,
//   retorna un objeto de errores (vacío si todo es válido).
//
// DISEÑO:
//   • Cada función `is*` testea UNA sola regla → facilita unit tests.
//   • `validateForm` compone las reglas y devuelve todos los errores juntos
//     (no detiene en el primero) para que el usuario vea todos a la vez.
//   • Los mensajes salen de i18next → sin strings hardcodeados.
//     La lógica de QUÉ error mostrar sigue viviendo acá; el texto
//     de cada mensaje vive en los archivos JSON de traducción.
//
// POR QUÉ `t` COMO PARÁMETRO Y NO HOOK:
//   Esta función es una utilidad pura — mismos inputs → mismos outputs.
//   Pasar `t` como argumento mantiene la función testeable sin mocks
//   de React y desacoplada del árbol de componentes.
//   El hook useFormRegister es el único responsable de proveer `t`.

import type { TFunction } from 'i18next';
import type { FormData, FormErrors } from '../types/academy';

// ── Constantes ────────────────────────────────────────────────────────────────

const NOMBRE_REGEX       = /^[\p{L}\s'-]+$/u
const EMAIL_REGEX        = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
const TELEFONO_CHARS     = /^[0-9+\-() ]+$/
const TELEFONO_MIN       = 8
const TELEFONO_MAX       = 15

// ── Helpers de validación atómica ────────────────────────────────────────────

/**
 * Nombre completo:
 *   - Solo letras (incluyendo tildes, ñ, diéresis), espacios, apóstrofes y guiones.
 *   - Mínimo 2 palabras de al menos 2 caracteres cada una.
 *   - Máximo 80 caracteres totales.
 */
export function isNombreValido(nombre: string): boolean {
  const trimmed = nombre.trim();
  if (!trimmed || trimmed.length > 80) return false;
  if (!NOMBRE_REGEX.test(trimmed)) return false;

  const palabras = trimmed.split(/\s+/).filter((p) => p.length >= 2);
  return palabras.length >= 2;
}

/**
 * Email:
 *   - Formato RFC-5321 simplificado.
 *   - Máximo 254 caracteres (límite del estándar).
 *   - La validación definitiva ocurre en el servidor.
 */
export function isEmailValido(email: string): boolean {
  const trimmed = email.trim();
  return trimmed.length <= 254 && EMAIL_REGEX.test(trimmed);
}

/**
 * Teléfono argentino / internacional:
 *   - Acepta formatos comunes: +54 9 11 1234-5678, 011 1234-5678, 15-1234-5678.
 *   - Permite espacios, guiones y paréntesis como separadores visuales.
 *   - Mínimo 8 dígitos, máximo 15 (estándar E.164).
 */
export function isTelefonoValido(telefono: string): boolean {
  const trimmed = telefono.trim();
  if (!TELEFONO_CHARS.test(trimmed)) return false;

  const soloDigitos = trimmed.replace(/\D/g, '');
  return soloDigitos.length >= TELEFONO_MIN && soloDigitos.length <= TELEFONO_MAX;
}

// ── Validador principal ───────────────────────────────────────────────────────

/**
 * Valida todos los campos y devuelve un objeto con los errores.
 * Si el objeto resultante está vacío (`{}`), el formulario es válido.
 *
 * Los mensajes son específicos y accionables: describen QUÉ corregir,
 * no QUÉ hizo mal el usuario.
 */
export function validateForm(
  data: FormData,
  t: TFunction<'academy'>,
): FormErrors {
  const errors: FormErrors = {};

  // ── Nombre ──────────────────────────────────────────────────────────────
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

  // ── Email ────────────────────────────────────────────────────────────────
  if (!data.email.trim()) {
    errors.email = t('form.errors.emailRequired');
  } else if (!isEmailValido(data.email)) {
    errors.email = t('form.errors.emailInvalid');
  }

  // ── Teléfono ─────────────────────────────────────────────────────────────
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

  // ── Área ─────────────────────────────────────────────────────────────────
  if (!data.area) {
    errors.area = t('form.errors.areaRequired');
  }

  // ── Consentimiento ────────────────────────────────────────────────────────
  if (!data.consentimiento) {
    errors.consentimiento = t('form.errors.consentimientoRequired');
  }

  return errors;
}

// ── Utilidad ──────────────────────────────────────────────────────────────────

/**
 * Retorna `true` si el objeto de errores tiene al menos una clave.
 * Útil para saber si bloquear el submit después del primer intento.
 */
export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}