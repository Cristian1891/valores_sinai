// Sección Hero de Convenios
export const ConveniosHeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#74AADB] to-[#8FBF73] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-title md:text-5xl font-bold mb-6">
            Convenios Vigentes
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-paragraph md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Construimos alianzas estratégicas con instituciones educativas, empresas y organizaciones 
            que comparten nuestra visión de transformar vidas a través de la educación y los valores.
          </p>
        </div>
      </div>
    </section>
  );
};

