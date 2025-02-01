import React, { useState } from "react";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="menu"
      className="p-4 bg-white border-transparent shadow-lg fixed w-full top-0 z-50"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <a
            className="text-3xl font-bold uppercase text-gray-800 mr-24"
            href="#header"
          >
            Dashhome
          </a>

          <button
            type="button"
            className="md:hidden ml-auto flex flex-col justify-center items-center p-2 rounded"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar bg-gray-600 block w-6 h-0.5 my-1"></span>
            <span className="icon-bar bg-gray-600 block w-6 h-0.5 my-1"></span>
            <span className="icon-bar bg-gray-600 block w-6 h-0.5 my-1"></span>
          </button>

          {/* Navigation Links (Hidden on mobile, visible on larger screens) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#ofrecemos"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Qué ofrecemos
            </a>
            <a
              href="#about"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Sobre nosotros
            </a>
            <a
              href="#instalaciones"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Instalaciones
            </a>
            <a
              href="#clientes"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Clientes
            </a>
            <a
              href="#team"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Equipo
            </a>
            <a
              href="#contact"
              className="text-gray-700 uppercase font-normal hover:text-blue-500 transition-all duration-200"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Collapsible Menu for Mobile (Hidden by default) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <a
                href="#ofrecemos"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Qué ofrecemos
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#instalaciones"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Instalaciones
              </a>
            </li>
            <li>
              <a
                href="#clientes"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="#equipo"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Equipo
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 uppercase text-sm font-normal py-2 hover:text-blue-500 transition-all duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
