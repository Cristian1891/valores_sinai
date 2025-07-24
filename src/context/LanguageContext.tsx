// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import i18n from '../i18n'; // Asegúrate de que la ruta sea correcta para importar tu configuración existente

// type Language = 'es' | 'en' | 'pt';

// interface LanguageContextType {
//   language: Language;
//   changeLanguage: (lang: Language) => void;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// interface LanguageProviderProps {
//   children: ReactNode;
// }

// export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
//   // Determina el idioma inicial basado en localStorage o navegador
//   const getInitialLanguage = (): Language => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       const storedLang = window.localStorage.getItem('app-language');
//       if (storedLang === 'es' || storedLang === 'en' || storedLang === 'pt') {
//         return storedLang;
//       }
//     }
    
//     // Detectar el idioma del navegador
//     const browserLang = navigator.language.split('-')[0];
//     if (browserLang === 'es' || browserLang === 'en' || browserLang === 'pt') {
//       return browserLang as Language;
//     }
    
//     return 'es'; // Idioma por defecto (el mismo que en tu configuración i18n)
//   };

//   const [language, setLanguage] = useState<Language>(getInitialLanguage);

//   useEffect(() => {
//     // Inicializar i18n con el idioma determinado
//     i18n.changeLanguage(language);
//     localStorage.setItem('app-language', language);
//     document.documentElement.lang = language;
//   }, [language]);

//   const changeLanguage = (lang: Language) => {
//     setLanguage(lang);
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = (): LanguageContextType => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };