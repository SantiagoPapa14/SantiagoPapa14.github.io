import React from "react";

export const Clientes: React.FC = () => {
  return (
    <div id="testimonials" className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16">
          <h2 className="font-raleway text-4xl font-extrabold uppercase text-gray-900 mb-5 relative pb-4">
            Opiniones de nuestros clientes
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#5ca9fb] to-[#6372ff]"></span>
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="/img/Gerardo.jpg"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="testimonial-content text-center">
              <p className="text-gray-600 italic">
                "Excelente instalación a un precio accesible, desde que tengo
                las camaras nunca pierdo de vista mi casa y se que mi familia
                esta segura!"
              </p>
              <div className="testimonial-meta mt-4 font-semibold text-gray-800">
                - Gerardo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="/img/Facundo.jpg"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="testimonial-content text-center">
              <p className="text-gray-600 italic">
                "Un placer saber que cuando vuelvo de trabajar me espera el aire
                acondicionado, las luces y la televisión prendidas, solo falta
                que la domotica aprenda a cocinar! Jajajaja"
              </p>
              <div className="testimonial-meta mt-4 font-semibold text-gray-800">
                - Facundo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="/img/Federico.jpg"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="testimonial-content text-center">
              <p className="text-gray-600 italic">
                "La seguridad siempre fue muy importante para mi, la instalación
                de dashhome en mi casa me hace sentir muy tranquilo. Encima no
                se pasa nada porque puedo ver a mis hijos con el celular desde
                la oficina!"
              </p>
              <div className="testimonial-meta mt-4 font-semibold text-gray-800">
                - Federico
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
