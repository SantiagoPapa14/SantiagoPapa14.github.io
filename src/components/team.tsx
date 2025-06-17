import React from "react";

export const Team: React.FC = () => {
  return (
    <div id="team" className="text-center mt-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="relative uppercase mb-5 font-extrabold text-3xl sm:text-4xl text-gray-800 after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            ¡Te presentamos al equipo!
          </h2>
          <p className="text-gray-600 text-lg">
            Nuestros fundadores transformaron <i>DashHome</i> de un sueño a una
            realidad.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center -mx-4">
          {/* Team Member 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
            <div className="bg-white overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={"/img/SantiagoPapa.jpeg"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  Santiago Papa
                </h4>
                <p className="text-gray-600">Ingeniería Informática</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
            <div className="bg-white overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={"/img/JuanCruzAzcueta.png"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  Juan Cruz Azcueta Altomonte
                </h4>
                <p className="text-gray-600">Lic. Comercio Internacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
