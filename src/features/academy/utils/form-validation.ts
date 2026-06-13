// src/features/academia/utils/form-validation.ts
//
// Validaciones del formulario de registro — lógica pura, sin dependencias de UI.
// ─────────────────────────────────────────────────────────────────────────────
// DISEÑO:
//   • Cada función `is*` testea UNA sola regla → facilita unit tests.
//   • `validateForm` compone las reglas y devuelve todos los errores juntos
//     (no detiene en el primero) para que el usuario vea todos a la vez.
//   • Los mensajes están en español rioplatense, tono directo y sin culpa.
//     Principio UX: el error describe QUÉ corregir, no QUÉ hizo mal el usuario.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormData, FormErrors } from '../types/academy'

// ── Helpers de validación atómica ────────────────────────────────────────────

/**
 * Nombre completo:
 *   - Solo letras (incluyendo tildes, ñ, diéresis) y espacios.
 *   - Mínimo 2 palabras (nombre + apellido).
 *   - Mínimo 3 caracteres por palabra (evita iniciales sueltas).
 *   - Máximo 80 caracteres totales.
 */
const NOMBRE_REGEX = /^[\p{L}\s'-]+$/u

export function isNombreValido(nombre: string): boolean {
  const trimmed = nombre.trim()
  if (!trimmed || trimmed.length > 80) return false
  if (!NOMBRE_REGEX.test(trimmed)) return false

  const palabras = trimmed.split(/\s+/).filter((p) => p.length >= 2)
  return palabras.length >= 2
}

/**
 * Email:
 *   - Formato RFC-5321 simplificado.
 *   - Se valida con la regex más robusta razonablemente usable en frontend;
 *     la validación definitiva ocurre en el servidor.
 *   - Máximo 254 caracteres (límite del estándar).
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/

export function isEmailValido(email: string): boolean {
  const trimmed = email.trim()
  return trimmed.length <= 254 && EMAIL_REGEX.test(trimmed)
}

/**
 * Teléfono argentino / internacional:
 *   - Acepta formatos comunes: +54 9 11 1234-5678, 011 1234-5678, 15-1234-5678.
 *   - Permite espacios, guiones y paréntesis como separadores visuales.
 *   - Mínimo 8 dígitos, máximo 15 (estándar E.164).
 *   - No acepta letras ni caracteres especiales salvo +, -, (, ), espacio.
 */
const TELEFONO_VALIDOS_CHARS = /^[0-9+\-() ]+$/
const TELEFONO_MIN_DIGITS    = 8
const TELEFONO_MAX_DIGITS    = 15

export function isTelefonoValido(telefono: string): boolean {
  const trimmed = telefono.trim()
  if (!TELEFONO_VALIDOS_CHARS.test(trimmed)) return false

  const soloDigitos = trimmed.replace(/\D/g, '')
  return soloDigitos.length >= TELEFONO_MIN_DIGITS && soloDigitos.length <= TELEFONO_MAX_DIGITS
}

// ── Validador principal ───────────────────────────────────────────────────────

/**
 * Valida todos los campos del formulario y devuelve un objeto con los errores.
 * Si el objeto resultante está vacío (`{}`), el formulario es válido.
 *
 * Mensajes de error: específicos, accionables, en tono rioplatense.
 * No empezar con "Error:" — el contexto visual ya indica que es un error.
 */
export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  // Nombre completo
  if (!data.nombre.trim()) {
    errors.nombre = 'Ingresá tu nombre y apellido.'
  } else if (!isNombreValido(data.nombre)) {
    if (/\d/.test(data.nombre)) {
      errors.nombre = 'El nombre no puede contener números.'
    } else if (data.nombre.trim().split(/\s+/).filter((p) => p.length >= 2).length < 2) {
      errors.nombre = 'Ingresá tu nombre y apellido completos.'
    } else {
      errors.nombre = 'Solo se permiten letras y espacios.'
    }
  }

  // Email
  if (!data.email.trim()) {
    errors.email = 'Ingresá tu email.'
  } else if (!isEmailValido(data.email)) {
    errors.email = 'El email no parece válido. Revisá que tenga @ y un dominio.'
  }

  // Teléfono
  if (!data.telefono.trim()) {
    errors.telefono = 'Ingresá tu número de teléfono.'
  } else if (!isTelefonoValido(data.telefono)) {
    const soloDigitos = data.telefono.replace(/\D/g, '')
    if (soloDigitos.length < TELEFONO_MIN_DIGITS) {
      errors.telefono = `El número es muy corto. Mínimo ${TELEFONO_MIN_DIGITS} dígitos.`
    } else if (soloDigitos.length > TELEFONO_MAX_DIGITS) {
      errors.telefono = `El número es muy largo. Máximo ${TELEFONO_MAX_DIGITS} dígitos.`
    } else {
      errors.telefono = 'Solo se permiten números, espacios, guiones y paréntesis.'
    }
  }

  // Área de interés
  if (!data.area) {
    errors.area = 'Elegí un área para que podamos orientarte mejor.'
  }

  // Consentimiento
  if (!data.consentimiento) {
    errors.consentimiento = 'Necesitamos tu consentimiento para enviarte información.'
  }

  return errors
}

/**
 * Retorna `true` si el formulario tiene errores.
 * Útil para deshabilitar el botón de envío después del primer intento.
 */
export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0
}