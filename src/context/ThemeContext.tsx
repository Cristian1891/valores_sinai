import { createContext, useState, useEffect} from 'react';
import type { ReactNode } from 'react';
import type { ThemeContextType } from '../types/global';

// Extendemos la interfaz para soportar la carga global
//Hola mundo
// Tenemos que exportar el Contexto para que el hook lo pueda importar
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      // return window.matchMedia('(prefers-color-scheme: dark)').matches;
      return false;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};