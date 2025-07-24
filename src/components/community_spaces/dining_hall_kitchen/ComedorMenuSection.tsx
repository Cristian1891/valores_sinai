import { useState } from "react";

// Sección de Menú y Especialidades
export const ComedorMenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("tradicional");
  
  const menuCategories = [
    { id: "tradicional", name: "Cocina Tradicional", icon: "🍲" },
    { id: "internacional", name: "Cocina Internacional", icon: "🌍" },
    { id: "vegetariana", name: "Opciones Vegetarianas", icon: "🥗" },
    { id: "panaderia", name: "Panadería Artesanal", icon: "🥖" }
  ];

  const menuItems = {
    tradicional: [
      { name: "Asado Criollo", description: "Cortes selectos con ensaladas tradicionales", price: "Incluido" },
      { name: "Locro Norteño", description: "Guiso tradicional argentino", price: "Incluido" },
      { name: "Empanadas Caseras", description: "Variedades de carne, pollo y verdura", price: "Incluido" },
      { name: "Milanesas", description: "Con puré de papas y ensalada", price: "Incluido" }
    ],
    internacional: [
      { name: "Pasta Italiana", description: "Variedad de salsas y preparaciones", price: "Incluido" },
      { name: "Comida Mexicana", description: "Tacos, burritos y quesadillas", price: "Incluido" },
      { name: "Cocina Oriental", description: "Wok de verduras y arroces", price: "Incluido" },
      { name: "Mediterranea", description: "Ensaladas y grillados saludables", price: "Incluido" }
    ],
    vegetariana: [
      { name: "Hamburguesas Vegetales", description: "Con ingredientes frescos y naturales", price: "Incluido" },
      { name: "Wok de Verduras", description: "Salteado de vegetales de estación", price: "Incluido" },
      { name: "Ensaladas Completas", description: "Variedades nutritivas y sabrosas", price: "Incluido" },
      { name: "Legumbres", description: "Guisos y preparaciones veganas", price: "Incluido" }
    ],
    panaderia: [
      { name: "Pan Casero", description: "Horneado diariamente", price: "Incluido" },
      { name: "Facturas Artesanales", description: "Medialunas y facturas dulces", price: "Incluido" },
      { name: "Tortas y Postres", description: "Repostería casera", price: "Incluido" },
      { name: "Cookies y Galletitas", description: "Variedades dulces y saladas", price: "Incluido" }
    ]
  };

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestro Menú
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Variedad gastronómica para satisfacer todos los gustos y necesidades alimentarias
          </p>
        </div>

        {/* Selector de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#FEC40D] text-gray-800'
                  : 'bg-gray-200 dark:bg-[#3F3E3E] text-gray-700 dark:text-gray-300 hover:bg-[#FEC40D] hover:text-gray-800'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Items del menú */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-[#E4E2D1] dark:bg-[#302E2E] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                  {item.name}
                </h3>
                <span className="text-paragraph text-[#FEC40D] font-bold">
                  {item.price}
                </span>
              </div>
              <p className="text-paragraph text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#8FBF73]/10 dark:bg-[#8FBF73]/20 rounded-lg p-6 inline-block">
            <h3 className="text-subtitle font-bold text-[#70615A] dark:text-[#8FBF73] mb-2">
              Servicio Incluido
            </h3>
            <p className="text-paragraph text-gray-700 dark:text-gray-300">
              Todas nuestras comidas están incluidas en el plan de estadía y eventos especiales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
