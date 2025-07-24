import { useState, useEffect, JSX } from 'react';

interface Tweet {
  id: string;
  text: string;
  created_at: string;
  permalink: string;
  user: {
    name: string;
    screen_name: string;
    profile_image_url: string;
  };
  media?: {
    url: string;
    type: string;
  }[];
}

export const X_Feed: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Para una implementación real, necesitarías usar la API de Twitter/X
  // Aquí estamos mostrando datos de ejemplo para la demostración
  useEffect(() => {
    // Simulación de fetching de datos
    const fetchTweets = async () => {
      try {
        // En un caso real, aquí harías la llamada a la API
        // const response = await fetch('tu-endpoint-de-twitter');
        // const data = await response.json();
        
        // Datos de ejemplo para mostrar
        const mockData: Tweet[] = [
          {
            id: '1',
            text: 'Estamos comprometidos con la formación de valores en nuestra comunidad. Conoce más sobre nuestros programas en el siguiente enlace. #ValoresSinaí #Comunidad',
            created_at: '2024-04-20T13:25:00Z',
            permalink: 'https://twitter.com/ValoresSinai/status/ejemplo1',
            user: {
              name: 'Valores Sinaí',
              screen_name: 'ValoresSinai',
              profile_image_url: '/img/logo_sinai.png'
            },
            media: [
              {
                url: '/api/placeholder/500/300',
                type: 'photo'
              }
            ]
          },
          {
            id: '2',
            text: 'Agradecemos a todos los participantes de nuestro taller de la semana pasada. ¡Juntos construimos una comunidad más fuerte! #GraciasComunidad',
            created_at: '2024-04-15T09:10:00Z',
            permalink: 'https://twitter.com/ValoresSinai/status/ejemplo2',
            user: {
              name: 'Valores Sinaí',
              screen_name: 'ValoresSinai',
              profile_image_url: '/img/logo_sinai.png'
            }
          },
          {
            id: '3',
            text: 'No te pierdas nuestro próximo evento este fin de semana. Tendremos actividades para toda la familia. ¡Te esperamos! #EventoFamiliar #ValoresSinaí',
            created_at: '2024-04-10T16:05:00Z',
            permalink: 'https://twitter.com/ValoresSinai/status/ejemplo3',
            user: {
              name: 'Valores Sinaí',
              screen_name: 'ValoresSinai',
              profile_image_url: '/img/logo_sinai.png'
            },
            media: [
              {
                url: '/api/placeholder/500/300',
                type: 'photo'
              }
            ]
          }
        ];
        
        setTweets(mockData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tweets:', err);
        setError('No pudimos cargar los tweets.');
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  // Formatear fecha para mostrar
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    // Calcular diferencia en minutos
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 60) {
      return `${diffMins}m`;
    } else if (diffMins < 1440) {
      return `${Math.floor(diffMins / 60)}h`;
    } else {
      return date.toLocaleDateString('es-ES', { 
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  };

  // Función para procesar el texto y convertir hashtags y menciones en enlaces
  const processText = (text: string): JSX.Element => {
    // Dividir el texto en partes para procesar hashtags y menciones
    const parts = text.split(/(#\w+)|(@\w+)/g);
    
    return (
      <>
        {parts.map((part, index) => {
          if (part?.startsWith('#')) {
            return (
              <a 
                key={index}
                href={`https://twitter.com/hashtag/${part.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D9BF0] hover:underline"
              >
                {part}
              </a>
            );
          } else if (part?.startsWith('@')) {
            return (
              <a 
                key={index}
                href={`https://twitter.com/${part.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D9BF0] hover:underline"
              >
                {part}
              </a>
            );
          } else {
            return part || '';
          }
        })}
      </>
    );
  };

  return (
    <section className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-montserrat text-section text-grayDark dark:text-white mb-2">
            Síguenos en X
          </h2>
          <a 
            href="https://x.com/ValoresSinai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center font-montserrat text-button text-[#1D9BF0] hover:text-blue-600 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @ValoresSinai
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1D9BF0]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="font-montserrat text-paragraph text-red-500">{error}</p>
            <a 
              href="https://x.com/ValoresSinai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block px-4 py-2 bg-[#1D9BF0] text-white rounded-md font-montserrat text-button hover:bg-blue-600 transition-colors"
            >
              Ver en X
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {tweets.map((tweet) => (
              <div key={tweet.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <img 
                      src={tweet.user.profile_image_url} 
                      alt={tweet.user.name} 
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-montserrat font-bold text-paragraph text-gray-900 dark:text-white">
                            {tweet.user.name}
                          </h3>
                          <p className="font-montserrat text-xs text-gray-500 dark:text-gray-400">
                            @{tweet.user.screen_name}
                          </p>
                        </div>
                        <svg 
                          className="h-5 w-5 text-[#1D9BF0]" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="font-montserrat text-paragraph text-gray-700 dark:text-gray-300">
                      {processText(tweet.text)}
                    </p>
                  </div>
                  
                  {tweet.media && tweet.media.length > 0 && (
                    <div className="mb-3 rounded-xl overflow-hidden">
                      <img 
                        src={tweet.media[0].url} 
                        alt="Tweet media" 
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-2 text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                    <span className="font-montserrat text-xs">
                      {formatDate(tweet.created_at)}
                    </span>
                    <a 
                      href={tweet.permalink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-montserrat text-xs text-[#1D9BF0] hover:underline"
                    >
                      Ver en X
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <a 
            href="https://x.com/ValoresSinai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-[#1D9BF0] text-white rounded-md font-montserrat text-button hover:bg-blue-600 transition-colors"
          >
            Ver más en X
          </a>
        </div>
      </div>
    </section>
  );
};