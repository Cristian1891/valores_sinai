import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import type { ContactMethod } from '../types/contact'
import type { QueryType } from '../types/contact'


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

export const BACKGROUND_WORDS = [
  'Amor',
  'Servicio',
  'Unidad',
  'Inclusión',
  'Creatividad',
  'Excelencia',
] as const


export const INPUT_CLASS = [
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3',
  'font-sans text-sm text-dark placeholder:text-gray-mid',
  'transition-colors duration-150',
  'hover:border-brand-amber/60',
  'focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
  'dark:border-white/10 dark:bg-dark dark:text-white dark:placeholder:text-gray-mid',
  'dark:hover:border-brand-amber/40 dark:focus:border-brand-accent',
].join(' ')