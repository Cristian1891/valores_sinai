import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Para una implementación real, necesitarías usar la API de Instagram
  // Aquí estamos mostrando datos de ejemplo para la demostración
  useEffect(() => {
    // Simulación de fetching de datos
    const fetchPosts = async () => {
      try {
        // En un caso real, aquí harías la llamada a la API
        // const response = await fetch('tu-endpoint-de-instagram');
        // const data = await response.json();
        
        // Datos de ejemplo para mostrar
        const mockData: InstagramPost[] = [
          {
            id: '1',
            media_url: '/api/placeholder/400/400',
            caption: 'Celebrando juntos los valores que nos unen. #ValoresSinaí #Comunidad',
            permalink: 'https://www.instagram.com/p/ejemplo1/',
            timestamp: '2024-04-15T14:30:00Z'
          },
          {
            id: '2',
            media_url: '/api/placeholder/400/400',
            caption: 'Compartiendo momentos especiales en nuestra comunidad. #FamiliaSinaí',
            permalink: 'https://www.instagram.com/p/ejemplo2/',
            timestamp: '2024-04-10T09:15:00Z'
          },
          {
            id: '3',
            media_url: '/api/placeholder/400/400',
            caption: 'Construyendo un futuro mejor juntos. #ProyectosSinaí #Compromiso',
            permalink: 'https://www.instagram.com/p/ejemplo3/',
            timestamp: '2024-04-05T16:45:00Z'
          }
        ];
        
        setPosts(mockData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('No pudimos cargar las publicaciones de Instagram.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Formatear fecha para mostrar
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-montserrat text-section text-grayDark dark:text-white mb-2">
            Síguenos en Instagram
          </h2>
          <a 
            href="https://www.instagram.com/valores_sinai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center font-montserrat text-button text-[#E1306C] hover:text-[#C13584] transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @valores_sinai
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E1306C]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="font-montserrat text-paragraph text-red-500">{error}</p>
            <a 
              href="https://www.instagram.com/valores_sinai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block px-4 py-2 bg-[#E1306C] text-white rounded-md font-montserrat text-button hover:bg-[#C13584] transition-colors"
            >
              Ver en Instagram
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <img 
                    src={post.media_url} 
                    alt="Instagram post" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <p className="font-montserrat text-paragraph text-gray-700 dark:text-gray-300 line-clamp-3">
                      {post.caption}
                    </p>
                    <p className="mt-2 font-montserrat text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(post.timestamp)}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <a 
            href="https://www.instagram.com/valores_sinai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-[#E1306C] text-white rounded-md font-montserrat text-button hover:bg-[#C13584] transition-colors"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};