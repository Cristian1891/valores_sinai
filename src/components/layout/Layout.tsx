// src/components/layout/Layout.tsx
import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '../errors/ErrorBoundary';
// import { Footer } from './Footer'; // Cuando lo tengas, lo sumás aquí

export const Layout = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar />
      
      {/* El <main> asegura que el contenido siempre ocupe el espacio necesario 
        y empuje al Footer hacia abajo si la pantalla es muy alta.
      */}
      <main className="grow pt-10">
        <ErrorBoundary>
          <Outlet /> 
        </ErrorBoundary>
      </main>

      <WhatsAppButton /> {/* Botón de WhatsApp siempre visible */}
      <Footer /> 

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};