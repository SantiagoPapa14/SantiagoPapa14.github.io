import React from "react";

export const About: React.FC = () => {
  return (
    <div id="about" className="py-20 flex justify-center items-center">
      <div className="container mx-auto px-4 md:w-2/5">
        <div className="flex flex-wrap">
          {/* Image Section */}
          <div className="w-full h-full md:w-1/2">
            <img
              src="img/about.jpg"
              className="w-full h-auto rounded shadow-lg md:mt-6"
              alt="About Us"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex items-center justify-center">
            <div>
              {/* Heading */}
              <div className="w-full max-sm:text-center ">
                <h2 className="relative uppercase mb-5 font-bold text-4xl text-gray-800 after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 md:after:left-1/10 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
                  Sobre nosotros
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-gray-500 text-sm mb-4 max-sm:text-center">
                Somos una empresa en busca de un país seguro, por eso trabajamos
                para traerle las mejores soluciones en seguridad y comodidad del
                mercado internacional. Nuestro foco siempre fue y va a ser
                usted, su familia y sus seres queridos, por eso haremos todo lo
                que este en nuestro alcance para brindarle el servicio que se
                merece.
              </p>

              {/* Subheading */}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-8">
                ¿Por qué elegirnos?
              </h3>
            </div>

            {/* List Section */}
            <div className="flex w-full text-sm justify-center">
              {/* First List */}
              <div className="w-full sm:w-1/2 md:pr-4">
                <ul className="list-none pl-0 md:ml-24">
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Ingenieros y electricistas especializados
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Productos de alta calidad a precios competitivos
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Soluciones integrales de CCTV y IoT
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Sistemas altamente personalizados
                    </span>
                  </li>
                </ul>
              </div>

              {/* Second List */}
              <div className="w-full sm:w-1/2 md:pl-4">
                <ul className="list-none pl-5">
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">Instalaciones express</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Garantía de satisfacción y calidad
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Conexiones internacionales para <br /> productos premium{" "}
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Asesoramiento y soporte 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
