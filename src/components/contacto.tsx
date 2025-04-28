import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contacto: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("https://forms.semantic.com.ar/dashhome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Formulario enviado con éxito");
        setIsVisible(true);
        form.reset();
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div>
      <div
        id="contact"
        className="bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] py-24"
      >
        <div className="md:flex md:flex-row mx-auto md:px-64">
          <div className="md:w-2/3 p-12">
            <div className="flex flex-col">
              <div className="section-title mb-16">
                <h2 className="font-raleway text-4xl font-extrabold uppercase text-white mb-5 relative pb-4">
                  Contacto
                  <span className="absolute bottom-0 md:left-1/28 left-1/9 transform -translate-x-1/2 w-16 h-1 bg-white opacity-30"></span>
                </h2>
                <p className="text-lg text-white opacity-75">
                  Llena el formulario con tu información y cualquier consulta
                  que tengas ¡Te contactaremos a la brevedad!
                </p>
              </div>
              <form
                name="sentMessage"
                action="https://formspree.io/f/xbldykoa"
                method="POST"
                onSubmit={handleSubmit} // Use the custom submit handler
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
                        placeholder="Nombre"
                        required
                      />
                      <p className="text-red-500 text-sm"></p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
                        placeholder="Email"
                        required
                      />
                      <p className="text-red-500 text-sm"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-6">
                  <textarea
                    name="message"
                    id="message"
                    className="w-full px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                  <p className="text-red-500 text-sm"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn-custom bg-transparent border border-white text-white font-raleway uppercase px-8 py-3 rounded-full hover:bg-white hover:text-[#6372ff] transition-all duration-500"
                >
                  Enviar
                </button>
                {isVisible && (
                  <div
                    style={{
                      padding: "10px",
                      border: "1px solid #ccc",
                      marginTop: "10px",
                    }}
                  >
                    Mensaje enviado!
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="md:w-1/3 ml-8 mt-12 md:mt-0 md:mt-30">
            <div className="contact-item">
              <h3 className="text-white text-2xl font-semibold mb-6">
                Información de contacto
              </h3>
              <div className="contact-item mb-6">
                <p className="text-white opacity-75">
                  <span className="block mb-2">
                    <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                    Email
                  </span>
                  contacto@dashhome.com.ar
                </p>
              </div>
              <div className="contact-item">
                <p className="text-white opacity-75">
                  <span className="block mb-2">
                    <FontAwesomeIcon className="mr-2" icon={faPhone} />
                    Teléfono
                  </span>
                  +54 9 11 5961-9583 <br />
                  +54 9 11 6145-9011
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="flex justify-center">
            <div className="social border-t border-white border-opacity-15 pt-12">
              <ul className="flex space-x-8">
                <li>
                  <a href="http://www.linkedin.com/company/dashhome/">
                    <div className="fa fa-instagram text-2xl w-12 h-12 flex items-center justify-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        className="w-6 h-6"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dashhomesrl">
                    <div className="fa fa-instagram text-2xl w-12 h-12 flex items-center justify-center border-2 border-white rounded-full transition-all duration-300 hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6"
                        fill="white"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
