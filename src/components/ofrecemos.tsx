import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faBell,
  faCouch,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

export const Ofrecemos: React.FC = () => {
  return (
    <div id="features" className="text-center py-16 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="relative uppercase font-bold mb-5 text-4xl text-gray-800 after:content-[''] after:absolute after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            Qué Ofrecemos
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Item 1: Seguridad */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center">
              <i className="text-4xl mb-4 text-white bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faShieldAlt} />
              </i>
              <h3 className="font-raleway text-xl font-semibold text-[#333] mb-2">
                Seguridad
              </h3>
              <p className="text-[#777] text-base leading-relaxed">
                Sistemas de seguridad inteligentes de última generación,
                combinando nuestra tecnología con las mejores marcas del
                mercado.
              </p>
            </div>
          </div>

          {/* Item 2: Información */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center">
              <i className="text-4xl mb-4 text-white bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faBell} />
              </i>
              <h3 className="font-raleway text-xl font-semibold text-[#333] mb-2">
                Información
              </h3>
              <p className="text-[#777] text-base leading-relaxed">
                Esté al tanto y vigile todo lo que sucede en su hogar, desde
                cualquier parte del mundo.
              </p>
            </div>
          </div>

          {/* Item 3: Comodidad */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center">
              <i className="text-4xl mb-4 text-white bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faCouch} />
              </i>
              <h3 className="font-raleway text-xl font-semibold text-[#333] mb-2">
                Comodidad
              </h3>
              <p className="text-[#777] text-base leading-relaxed">
                Ajuste su hogar para que se adapte a su estilo de vida. Teniendo
                el control de su casa en la palma de tu mano.
              </p>
            </div>
          </div>

          {/* Item 4: Innovación */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="flex flex-col items-center">
              <i className="text-4xl mb-4 text-white bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faMagicWandSparkles} />
              </i>
              <h3 className="font-raleway text-xl font-semibold text-[#333] mb-2">
                Innovación
              </h3>
              <p className="text-[#777] text-base leading-relaxed">
                La última tecnología del hogar traída directo del primer mundo
                para brindarle la satisfacción que necesita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
