import React from "react";

export const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[#e5e5e5]"
      style={{ backgroundImage: "url('/img/intro-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 lg:w-6/12 text-center relative z-10">
            <h1 className="font-raleway text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase mt-0">
              {"Seguridad & Comodidad"}
              <span className="font-extrabold text-[#5ca9fb]"></span>
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto my-6">
              {"Mucho más que seguridad"}
            </p>
            <a
              href="#features"
              className="inline-block font-raleway uppercase text-white bg-gradient-to-r from-[#5ca9fb] to-[#6372ff] px-8 py-4 rounded-full text-sm md:text-base font-medium transition-all duration-500 hover:bg-[#6372ff]"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
