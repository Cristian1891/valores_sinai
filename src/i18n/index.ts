// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

// Determina el idioma inicial desde localStorage o navegador
const getInitialLanguage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedLang = window.localStorage.getItem('app-language');
    if (storedLang === 'es' || storedLang === 'en' || storedLang === 'pt') {
      return storedLang;
    }
  }
  
  // Detectar el idioma del navegador si está disponible
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' || browserLang === 'en' || browserLang === 'pt') {
      return browserLang;
    }
  }
  
  return 'es'; // Idioma por defecto
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true
    }
  });

export default i18n;