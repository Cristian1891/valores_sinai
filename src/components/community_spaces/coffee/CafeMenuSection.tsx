import { useState } from "react";

// Sección de Menú y Especialidades
export const CafeMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('bebidas');
  
  const menuCategories = [
    {
      id: 'bebidas',
      name: 'Bebidas Calientes',
      icon: '☕',
      items: [
        { name: 'Café Americano', description: 'Café de origen selecto, tostado artesanalmente', price: 'Consultar' },
        { name: 'Café con Leche', description: 'Espresso cremoso con leche vaporizada', price: 'Consultar' },
        { name: 'Cappuccino', description: 'Espresso con espuma de leche y canela', price: 'Consultar' },
        { name: 'Té de Hierbas', description: 'Selección de tés naturales y orgánicos', price: 'Consultar' },
        { name: 'Chocolate Caliente', description: 'Chocolate artesanal con marshmallows', price: 'Consultar' }
      ]
    },
    {
      id: 'dulces',
      name: 'Dulces y Postres',
      icon: '🍰',
      items: [
        { name: 'Torta Casera', description: 'Recetas tradicionales hechas diariamente', price: 'Consultar' },
        { name: 'Medialunas', description: 'Frescas y crujientes, horneadas cada mañana', price: 'Consultar' },
        { name: 'Muffins', description: 'Variedad de sabores: arándanos, chocolate, limón', price: 'Consultar' },
        { name: 'Galletas Artesanales', description: 'Hechas con ingredientes naturales', price: 'Consultar' },
        { name: 'Alfajores', description: 'Tradicionales argentinos con dulce de leche', price: 'Consultar' }
      ]
    },
    {
      id: 'salados',
      name: 'Opciones Saladas',
      icon: '🥪',
      items: [
        { name: 'Sándwiches Gourmet', description: 'Pan casero con ingredientes frescos', price: 'Consultar' },
        { name: 'Tostadas Especiales', description: 'Variedades dulces y saladas', price: 'Consultar' },
        { name: 'Empanadas Caseras', description: 'Recetas tradicionales argentinas', price: 'Consultar' },
        { name: 'Ensaladas Frescas', description: 'Ingredientes orgánicos de temporada', price: 'Consultar' }
      ]
    }
  ];

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestro Menú
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Productos frescos y artesanales preparados con amor y dedicación
          </p>
        </div>

        {/* Selector de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-[#FEC40D] text-gray-800 transform scale-105'
                  : 'bg-white dark:bg-[#3F3E3E] text-gray-600 dark:text-gray-300 hover:bg-[#FEC40D] hover:text-gray-800'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="text-button">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Contenido del menú */}
        <div className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{currentCategory?.icon}</div>
            <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white">
              {currentCategory?.name}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentCategory?.items.map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                    {item.name}
                  </h4>
                  <span className="text-subtitle font-bold text-[#FEC40D]">
                    {item.price}
                  </span>
                </div>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};