// src/features/academia/constants/areas-form.ts

export const FORM_DESTINATION_EMAIL = 'cristianovejero1891@gmail.com';

export const FORM_AREAS: string[] = [
  'produccion-audiovisual',
  'audio-sonido',
  'fotografia-digital',
  'marketing-digital',
  'streaming-medios',
  'gestion-cultural',
  'no-seguro',
];

// Mapa usado exclusivamente para el envío del email (notificación al admin)
export const FORM_AREA_LABEL_MAP: Record<string, string> = {
  'produccion-audiovisual': 'Producción Audiovisual',
  'audio-sonido':           'Audio y Sonido',
  'fotografia-digital':     'Fotografía Digital',
  'marketing-digital':      'Marketing Digital',
  'streaming-medios':       'Streaming y Medios',
  'gestion-cultural':       'Gestión Cultural',
  'no-seguro':              'Todavía no estoy seguro/a',
};

export const FORM_INITIAL_STATE = {
  nombre: '',
  email: '',
  telefono: '',
  area: '',
  consentimiento: false,
} as const;