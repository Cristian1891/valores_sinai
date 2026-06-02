export const LANGUAGES = ['es', 'en', 'pt'] as const;

// Si alguna vez necesitas el tipo exacto ('es' | 'en' | 'pt') en otro lado:
export type Language = typeof LANGUAGES[number];