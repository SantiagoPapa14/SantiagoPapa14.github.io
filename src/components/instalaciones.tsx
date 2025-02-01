import { Image } from "./image";
import React from "react";

export const Instalaciones: React.FC = () => {
  return (
    <div id="portfolio" className="text-center mb-24">
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
            <Image
              title="Instalacion Ejemplo 1"
              largeImage="/img/ReggiAdelante.jpg"
              smallImage="/img/ReggiAdelante.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              title="Instalacion Ejemplo 1"
              largeImage="/img/ReggiAtras.jpg"
              smallImage="/img/ReggiAtras.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              title="Instalacion Ejemplo 1"
              largeImage="/img/ReggiPatio.jpg"
              smallImage="/img/ReggiPatio.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
