import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

// Definición de tipos
interface SubMenu {
  key: string;
  url: string;
}

interface MenuItem {
  key: string;
  url?: string;
  submenu?: SubMenu[];
}

export const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Lista de elementos del menú con sus submenús
  const menuItems: MenuItem[] = [
    { key: "home", url: "/" },
    {
      key: "nuestraIdentidad",
      submenu: [
        { key: "quienesSomos", url: "/identidad/quienes-somos" },
        { key: "vision", url: "/identidad/nuestra-vision" },
        { key: "valores", url: "/identidad/nuestros-valores" }
      ]
    },
    {
      key: "proyectos",
      submenu: [
        { key: "programas", url: "/proyectos/programas" },
        { key: "convenios", url: "/proyectos/convenios" }
      ]
    },
    {
      key: "espacios",
      submenu: [
        { key: "areasVerdes", url: "/espacios/areas-verdes" },
        { key: "quincho", url: "/espacios/quincho" },
        { key: "pileta", url: "/espacios/pileta-vestuarios" },
        { key: "gym", url: "/espacios/gym" },
        { key: "cafe", url: "/espacios/cafe" },
        { key: "salonEventos", url: "/espacios/salon-eventos" },
        { key: "salonConferencia", url: "/espacios/salon-conferencia" },
        { key: "posada", url: "/espacios/posada" },
        { key: "comedor", url: "/espacios/comedor-cocina" },
        { key: "estudio", url: "/espacios/estudio" }
      ]
    },
    { key: "aliados", url: "/aliados" },
    { key: "contacto", url: "/contacto" }
  ];

  // Detectar scroll para aplicar estilos al navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manejo del toggle de modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Si usas la variante dark por clase
    document.documentElement.classList.toggle('dark');
  };

  // Manejo del toggle del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (openDropdown) {
      setOpenDropdown(null);
    }
  };

  // Manejo de los dropdowns
  const toggleDropdown = (key: string) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };
  
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setOpenDropdown(null);
  };

  // Función para manejar navegación con buttons
  const handleNavigation = (url: string) => {
    navigate(url);
    setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto
    setOpenDropdown(null); // Cerrar dropdowns
  };

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => { 
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-toggle')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#74AADB] dark:bg-[var(--color-dark)] shadow-md z-50 ${darkMode ? 'dark' : ''} ${scrolled ? 'shadow-lg' : ''} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-25 w-25" src="/img/logo_sinai.png" alt="Logo" />
            </Link>
          </div>

          {/* Menú de navegación para desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        toggleDropdown(item.key);
                        if (item.url) handleNavigation(item.url);
                      }}
                      className="dropdown-toggle flex items-center px-2 py-2 font-bold text-button text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
                      role="link"
                    >
                      {t(`navbar.${item.key}`)}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === item.key ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {openDropdown === item.key && (
                      <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-[#DBEAFE] dark:bg-gray-700 rounded-md shadow-lg z-50 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.key}
                            onClick={() => handleNavigation(subItem.url)}
                            className="w-full text-left block px-4 py-2 font-montserrat font-normal text-paragraph text-gray-700 dark:text-white  hover:bg-blue-300 dark:hover:bg-gray-600 cursor-pointer"
                          >
                            {t(`navbar.${subItem.key}`)}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => item.url && handleNavigation(item.url)}
                    className="px-3 py-2 font-montserrat font-bold text-button text-white hover:text-[#FEC40D] cursor-pointer"
                  >
                    {t(`navbar.${item.key}`)}
                  </button>
                )}
              </div>
            ))}

            {/* Botón de Donar */}
            <Link
              to="/donar"
              className="px-4 py-2 bg-[#FEC40D] rounded-md font-montserrat font-bold text-button text-gray-800 hover:bg-[#D28A2B] transition-colors cursor-pointer"
            >
              {t('navbar.donar')}
            </Link>

            {/* Selector de idioma (ejemplo) */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('idioma')}
                className="dropdown-toggle flex items-center px-3 py-2 font-montserrat font-bold text-button text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
              >
                {t('navbar.idioma')}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openDropdown === 'idioma' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openDropdown === 'idioma' && (
                <div className="dropdown-menu absolute right-0 mt-2 w-32 bg-[#DBEAFE] dark:bg-gray-700 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => changeLang('es')}
                    className="w-full text-left block px-4 py-2 font-montserrat text-paragraph text-gray-700 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    {t('navbar.espanol')}
                  </button>
                  <button
                    onClick={() => changeLang('en')}
                    className="w-full text-left block px-4 py-2 font-montserrat text-paragraph text-gray-700 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    {t('navbar.ingles')}
                  </button>
                  <button
                    onClick={() => changeLang('pt')}
                    className="w-full text-left block px-4 py-2 font-montserrat text-paragraph text-gray-700 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    {t('navbar.portugues')}
                  </button>
                </div>
              )}
            </div>

            {/* Toggle para modo oscuro */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:text-[#FEC40D] focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="h-6 w-6 text-white hover:text-[#FEC40D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-black hover:text-[#FEC40D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Botón de menú para móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#74AADB] dark:bg-gray-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.key} className="py-1">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        toggleDropdown(item.key);
                        if (item.url) handleNavigation(item.url);
                      }}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md font-montserrat font-bold text-button text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
                    >
                      {t(`navbar.${item.key}`)}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === item.key ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {openDropdown === item.key && (
                      <div className="pl-4 py-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.key}
                            onClick={() => handleNavigation(subItem.url)}
                            className="w-full text-left block px-3 py-2 rounded-md font-montserrat text-paragraph text-white hover:bg-blue-700 cursor-pointer"
                          >
                            {t(`navbar.${subItem.key}`)}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => item.url && handleNavigation(item.url)}
                    className="w-full text-left block px-3 py-2 rounded-md font-montserrat font-bold text-button text-white hover:text-[#FEC40D] cursor-pointer"
                  >
                    {t(`navbar.${item.key}`)}
                  </button>
                )}
              </div>
            ))}

            {/* Botón de donar para móvil */}
            <div className="py-2 px-3">
              <Link
                to="/donar"
                className="w-full block text-center px-4 py-2 bg-[#FEC40D] rounded-md font-montserrat font-bold text-button text-gray-800 hover:bg-[#D28A2B] transition-colors cursor-pointer"
              >
                {t('navbar.donar')}
              </Link>
            </div>

            {/* Selector de idioma para móvil */}
            <div className="py-1">
              <button
                onClick={() => toggleDropdown('idioma-mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md font-montserrat font-bold text-button text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
              >
                {t('navbar.idioma')}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openDropdown === 'idioma-mobile' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openDropdown === 'idioma-mobile' && (
                <div className="pl-4 py-1 space-y-1">
                  <button
                    onClick={() => changeLang('es')}
                    className="w-full text-left block px-3 py-2 rounded-md font-montserrat text-paragraph text-white hover:bg-blue-700 cursor-pointer"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => changeLang('en')}
                    className="w-full text-left block px-3 py-2 rounded-md font-montserrat text-paragraph text-white hover:bg-blue-700 cursor-pointer"
                  >
                    Ingles
                  </button>
                  <button
                    onClick={() => changeLang('pt')}
                    className="w-full text-left block px-3 py-2 rounded-md font-montserrat text-paragraph text-white hover:bg-blue-700 cursor-pointer"
                  >
                    Portugues
                  </button>
                </div>
              )}
            </div>

            {/* Toggle para modo oscuro en móvil */}
            <div className="py-2 px-3 flex items-center">
              <button
                onClick={toggleDarkMode}
                className="flex items-center px-3 py-2 rounded-md font-montserrat font-bold text-button text-white hover:text-[#FEC40D] focus:outline-none cursor-pointer"
              >
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                <span className="ml-2">
                  {darkMode ? (
                    <svg
                      className="h-5 w-5 text-white hover:text-[#FEC40D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-black hover:text-[#FEC40D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};