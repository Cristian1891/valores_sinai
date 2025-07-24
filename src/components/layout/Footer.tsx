import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { t } = useTranslation();

  // Verificar si estamos en modo oscuro (compartido con Navbar)
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  // Detector de cambios de modo oscuro en el DOM
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`bg-[#3F3E3E] py-5 px-4`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img className="h-16 w-16" src="/img/logo_sinai.png" alt="Logo Valores Sinai" />
        </div>

        {/* Copyright */}
        <div className="text-center md:text-center mb-4 md:mb-0">
          <p className="text-paragraph text-[#FEC40D]">
            {t('footer.text')}
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-montserrat text-paragraph text-[#FEC40D] mb-2">
            {t('footer.social-text')}
          </p>
          <div className="flex space-x-4">
            {/* Logo de Instagram */}
            <a 
              href="https://www.instagram.com/valores_sinai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEC40D] hover:text-[#D28A2B] transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            {/* Logo de Facebook (estilo alternativo) */}
            <a 
              href="https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEC40D] hover:text-[#D28A2B] transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.877z" />
              </svg>
            </a>
            
            {/* Logo de X (anteriormente Twitter) */}
            <a 
              href="https://x.com/ValoresSinai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FEC40D] hover:text-[#D28A2B] transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

