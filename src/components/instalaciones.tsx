import React from "react";

export const Instalaciones: React.FC = () => {
  return (
    <div id="instalaciones" className="text-center mb-24">
      <div className="container mx-auto px-4">
        <div className="section-title mb-16">
          <h2 className="font-raleway text-4xl font-extrabold uppercase text-gray-900 mb-5 relative pb-4">
            Instalaciones
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#5ca9fb] to-[#6372ff]"></span>
          </h2>
          <p className="text-lg text-gray-600">
            Aquí te mostramos algunas de nuestras instalaciones previas.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-1">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/ReggiAdelante.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/ReggiAtras.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/ReggiPatio.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/SolerPuerta.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/NVR1.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/SolerCalle.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/FacuSWITCH.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/FacuMESA.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/FacuPC.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/SolerCocina.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/ReggiArbolExpanded.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src="/img/SolerAfuera.jpg"
              alt="Instalacion Ejemplo 1"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
