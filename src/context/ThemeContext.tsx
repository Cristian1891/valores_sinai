// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   // Intenta obtener el tema del localStorage o usa la preferencia del sistema
//   const getInitialTheme = (): Theme => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       const storedPrefs = window.localStorage.getItem('color-theme');
//       if (typeof storedPrefs === 'string') {
//         return storedPrefs as Theme;
//       }

//       const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
//       if (userMedia.matches) {
//         return 'dark';
//       }
//     }

//     return 'light'; // tema por defecto
//   };

//   const [theme, setTheme] = useState<Theme>(getInitialTheme);

//   const rawSetTheme = (theme: Theme) => {
//     const root = window.document.documentElement;
//     const isDark = theme === 'dark';

//     root.classList.remove(isDark ? 'light' : 'dark');
//     root.classList.add(theme);

//     localStorage.setItem('color-theme', theme);
//   };

//   useEffect(() => {
//     rawSetTheme(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };