// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
/* import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json'; */

// ES
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esAboutUs from './locales/es/about-us.json';
import esContact from './locales/es/contact.json';
import esDonations from './locales/es/donations.json';

// EN
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';


// PT
import ptCommon from './locales/pt/common.json';
import ptHome from './locales/pt/home.json';


i18n
  .use(LanguageDetector)        // ← reemplaza tu función manual
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: esCommon, home: esHome, 'about-us': esAboutUs, 'contact': esContact, 'donations': esDonations },
      en: { common: enCommon, home: enHome},
      pt: { common: ptCommon, home: ptHome},
    },
    ns: ['common', 'home', 'about-us', 'contact', 'donations'],  // ← todos los namespaces
    defaultNS: 'common',                             // ← el que se usa si no especificás
    supportedLngs: ['es', 'en', 'pt'],  // ← lista explícita de idiomas válidos
    fallbackLng: 'es',
    load: 'languageOnly', 
    detection: {
      order: ['localStorage', 'navigator'],  // mismo orden que tenías
      caches: ['localStorage'],              // guarda automáticamente la elección
      lookupLocalStorage: 'app-language'     // mismo key que usabas
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: true }
  })

export default i18n