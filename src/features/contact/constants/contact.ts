// src/features/contact/constants/contact.ts
//
// Constantes de la feature Contacto.
// ─────────────────────────────────────────────────────────────────────────────
// SEPARACIÓN DE RESPONSABILIDADES:
//   DESTINATION_MAP  → mapeo queryType → email de destino para FormSubmit
//   CONTACT_METHODS  → datos de los métodos de contacto (ContactMethods)
//   BACKGROUND_WORDS → palabras del patrón tipográfico del hero (ContactHero)
//   INPUT_CLASS      → clase base de todos los inputs del formulario
//
// Las claves i18n de CONTACT_METHODS viven acá porque son datos de
// configuración, no texto inline — el componente solo llama t(method.labelKey).
// ─────────────────────────────────────────────────────────────────────────────

import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import type { ContactMethod } from '../types/contact'
import type { QueryType } from '../types/contact'

// ── Mapeo tipo de consulta → email institucional ──────────────────────────────
// Si en el futuro esto viene de una API o CMS, este objeto actúa como fallback.

export const DESTINATION_MAP: Record<QueryType, string> = {
  'Información general':   'valoressinai@gmail.com',
  'Retiros y campamentos': 'valoressinai@gmail.com',
  'Eventos y salones':     'valoressinai@gmail.com',
  'REC Pilar':             'info@recpilar.com',
  'Administración':        'estudioalegrevaldez@yahoo.com.ar',
  'Donaciones':            'cp.erika.contreras@gmail.com',
  'Consultas legales':     'Dra.danielaaramberri@gmail.com',
  'Otro':                  'valoressinai@gmail.com',
}

// ── Métodos de contacto rápido ────────────────────────────────────────────────

export const CONTACT_METHODS: ContactMethod[] = [
  {
    key:      'email',
    labelKey: 'methods.email.label',
    valueKey: 'methods.email.value',
    href:     'mailto:valoressinai@gmail.com',
    icon:     Mail,
  },
  {
    key:      'phone',
    labelKey: 'methods.phone.label',
    valueKey: 'methods.phone.value',
    href:     'tel:+5491160122363',
    icon:     Phone,
  },
  {
    key:            'whatsapp',
    labelKey:       'methods.whatsapp.label',
    valueKey:       'methods.whatsapp.value',
    descriptionKey: 'methods.whatsapp.description',
    href:           'https://wa.me/5491160122363',
    external:       true,
    icon:           MessageCircle,
  },
  {
    key:            'location',
    labelKey:       'methods.location.label',
    valueKey:       'methods.location.value',
    descriptionKey: 'methods.location.description',
    href:           'https://maps.app.goo.gl/KYuG84yqx3tkrJ6W6',
    external:       true,
    icon:           MapPin,
  },
]

// ── Patrón tipográfico del hero ───────────────────────────────────────────────
// Palabras institucionales que forman la textura visual de fondo.
// Si el idioma varía en el futuro, esto puede convertirse en getBackgroundWords(t).

export const BACKGROUND_WORDS = [
  'Amor',
  'Servicio',
  'Unidad',
  'Inclusión',
  'Creatividad',
  'Excelencia',
] as const

// ── Clases base de inputs ─────────────────────────────────────────────────────
// Centralizado para garantizar coherencia visual entre todos los campos.
// Si en el futuro se usa un design system externo, este es el único lugar a cambiar.

export const INPUT_CLASS = [
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3',
  'font-sans text-sm text-dark placeholder:text-gray-mid',
  'transition-colors duration-150',
  'hover:border-brand-amber/60',
  'focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
  'dark:border-white/10 dark:bg-dark dark:text-white dark:placeholder:text-gray-mid',
  'dark:hover:border-brand-amber/40 dark:focus:border-brand-accent',
].join(' ')