export const KidsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8FBF73] to-[#74AADB] text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-section md:text-4xl font-bold mb-6">
              Espacios Especiales para Niños
            </h2>
            <p className="text-paragraph md:text-lg mb-8 opacity-90 leading-relaxed">
              Creamos ambientes seguros y divertidos donde los más pequeños pueden jugar, 
              aprender y desarrollar sus habilidades en contacto directo con la naturaleza.
            </p>
             
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg">
                <div className="text-3xl mb-2">🏰</div>
                <h4 className="text-subtitle font-bold mb-1">Placita</h4>
                <p className="text-paragraph opacity-80">Juegos seguros y divertidos</p>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="text-subtitle font-bold mb-1">Actividades</h4>
                <p className="text-paragraph opacity-80">Talleres creativos al aire libre</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-8xl mb-6">🌈</div>
                <h3 className="text-subtitle md:text-2xl font-bold mb-4">
                  Diversión y Aprendizaje
                </h3>
                <p className="text-paragraph md:text-base opacity-90">
                  Nuestros espacios para niños combinan diversión y educación ambiental, 
                  promoviendo el respeto por la naturaleza desde temprana edad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};