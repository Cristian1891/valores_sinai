import { useState } from "react";

export const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Simulamos imágenes (en la implementación real, estas vendrían de tu backend)
  const images = [
    { id: 1, title: "Vista panorámica del predio", category: "general" },
    { id: 2, title: "Área de juegos infantiles", category: "recreacion" },
    { id: 3, title: "Cancha de fútbol", category: "deportes" },
    { id: 4, title: "Zona de fogón", category: "actividades" },
    { id: 5, title: "Espacios verdes naturales", category: "naturaleza" },
    { id: 6, title: "Área de paintball", category: "aventura" },
    { id: 7, title: "Jardines y senderos", category: "naturaleza" },
    { id: 8, title: "Zona de descanso", category: "relajacion" }
  ];
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section md:text-4xl font-bold text-[#3F3E3E] dark:text-white mb-6">
            Galería de Espacios Verdes
          </h2>
          <p className="text-paragraph text-gray-600 dark:text-gray-300">
            Explora nuestros hermosos espacios naturales a través de estas imágenes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative aspect-square bg-gradient-to-br from-[#8FBF73] to-[#70615A] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-8 h-8 mx-auto mb-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal de imagen ampliada */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-[#FEC40D] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video bg-gradient-to-br from-[#8FBF73] to-[#70615A] rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">{images[selectedImage].title}</h3>
                    <p className="text-sm opacity-80">Imagen {selectedImage + 1} de {images.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
