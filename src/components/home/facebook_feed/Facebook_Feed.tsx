// src/components/social/FacebookFeed.tsx
import { useState, useEffect } from 'react';

interface FacebookPost {
  id: string;
  message: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

export const Facebook_Feed: React.FC = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Para una implementación real, necesitarías usar la API de Facebook
  // Aquí estamos mostrando datos de ejemplo para la demostración
  useEffect(() => {
    // Simulación de fetching de datos
    const fetchPosts = async () => {
      try {
        // En un caso real, aquí harías la llamada a la API
        // const response = await fetch('tu-endpoint-de-facebook');
        // const data = await response.json();
        
        // Datos de ejemplo para mostrar
        const mockData: FacebookPost[] = [
          {
            id: '1',
            message: 'Estamos emocionados de anunciar nuestros nuevos programas comunitarios para este año. ¡Únete a nosotros para hacer la diferencia!',
            full_picture: '/api/placeholder/600/350',
            created_time: '2024-04-18T10:30:00Z',
            permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=ejemplo1'
          },
          {
            id: '2',
            message: 'Agradecemos a todos los voluntarios que participaron en nuestro evento del fin de semana. ¡Su apoyo hace posible nuestra misión!',
            full_picture: '/api/placeholder/600/350',
            created_time: '2024-04-12T15:45:00Z',
            permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=ejemplo2'
          },
          {
            id: '3',
            message: 'Recordatorio: Mañana tenemos nuestro taller mensual de valores para familias. ¡Los esperamos!',
            created_time: '2024-04-05T08:15:00Z',
            permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=ejemplo3'
          }
        ];
        
        setPosts(mockData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Facebook posts:', err);
        setError('No pudimos cargar las publicaciones de Facebook.');
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="py-10 bg-neutralLight dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-montserrat text-section text-grayDark dark:text-white mb-2">
            Síguenos en Facebook
          </h2>
          <a 
            href="https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center font-montserrat text-button text-[#1877F2] hover:text-[#166FE5] transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Valores Sinaí
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1877F2]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="font-montserrat text-paragraph text-red-500">{error}</p>
            <a 
              href="https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block px-4 py-2 bg-[#1877F2] text-white rounded-md font-montserrat text-button hover:bg-[#166FE5] transition-colors"
            >
              Ver en Facebook
            </a>
          </div>
        ) : (
          <div className="flex flex-col space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <img 
                      src="/img/logo_sinai.png" 
                      alt="Valores Sinaí" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-montserrat font-bold text-paragraph text-grayDark dark:text-white">
                        Valores Sinaí
                      </h3>
                      <p className="font-montserrat text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.created_time)}
                      </p>
                    </div>
                  </div>
                  <p className="font-montserrat text-paragraph text-gray-700 dark:text-gray-300 mb-4">
                    {post.message}
                  </p>
                  {post.full_picture && (
                    <img 
                      src={post.full_picture} 
                      alt="Facebook post" 
                      className="w-full h-auto rounded-md"
                    />
                  )}
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 flex justify-end">
                  <a 
                    href={post.permalink_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-montserrat text-button text-[#1877F2] dark:text-white hover:underline"
                  >
                    Ver en Facebook
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <a 
            href="https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-[#1877F2] text-white rounded-md font-montserrat text-button hover:bg-[#166FE5] transition-colors"
          >
            Ver más en Facebook
          </a>
        </div>
      </div>
    </section>
  );
};