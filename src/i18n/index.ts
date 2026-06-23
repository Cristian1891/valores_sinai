import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

// ES
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esAboutUs from './locales/es/about-us.json';
import esDonations from './locales/es/donations.json';
import esAcademy from './locales/es/academy.json';
import esOffer from './locales/es/what-we-offer.json';
import esContact from './locales/es/contact.json';

// EN
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAboutUs from './locales/en/about-us.json';
import enAcademy from './locales/en/academy.json';
import enOffer from './locales/en/what-we-offer.json';
import enContact from './locales/en/contact.json';
import enDonations from './locales/en/donations.json';


// PT
import ptCommon from './locales/pt/common.json';
import ptHome from './locales/pt/home.json';
import ptAboutUs from './locales/pt/about-us.json';
import ptAcademy from './locales/pt/academy.json';
import ptOffer from './locales/pt/what-we-offer.json';
import ptContact from './locales/pt/contact.json';
import ptDonations from './locales/pt/donations.json';


i18n
  .use(LanguageDetector)     
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: esCommon, home: esHome, 'about-us': esAboutUs, 'academy': esAcademy, 'what-we-offer': esOffer, 'contact': esContact, 'donations': esDonations },
      en: { common: enCommon, home: enHome, 'about-us': enAboutUs, 'academy': enAcademy, 'what-we-offer': enOffer, 'contact': enContact, 'donations': enDonations},
      pt: { common: ptCommon, home: ptHome, 'about-us': ptAboutUs, 'academy': ptAcademy, 'what-we-offer': ptOffer, 'contact': ptContact, 'donations': ptDonations},
    },
    ns: ['common', 'home', 'about-us', 'academy', 'what-we-offer', 'contact', 'donations'],  
    defaultNS: 'common',                           
    supportedLngs: ['es', 'en', 'pt'], 
    fallbackLng: 'es',
    load: 'languageOnly', 
    detection: {
      order: ['localStorage', 'navigator'],  
      caches: ['localStorage'],             
      lookupLocalStorage: 'app-language'   
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: true }
  })

export default i18n