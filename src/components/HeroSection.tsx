"use client";

import foto1 from "../assets/foto1.jpeg";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleReserveClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5551994798651",
      "_blank"
    );
  };
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row h-screen w-full">
      <div className="w-full lg:w-[60%] h-1/2 lg:h-full bg-marromCabana-500 flex items-center justify-center px-8 lg:px-16">
        <div
          className={`text-white text-center max-w-2xl transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="font-Julius text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-4 lg:mb-6 drop-shadow-2xl">
            Cabana do Pórtico
          </h1>
          <h2 className="font-Karla text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 drop-shadow-lg text-marromCabana-100 px-4">
            Momentos inesquecíveis para viver o melhor de Gramado
          </h2>
          <button
            onClick={handleReserveClick}
            className="bg-marromCabana-100 text-marromCabana-500 font-Karla font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg hover:bg-marromCabana-300 hover:text-marromCabana-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            Saiba Mais
          </button>
        </div>
      </div>
      <div
        className={`w-full lg:w-[40%] h-1/2 lg:h-full relative overflow-hidden transition-all duration-1000 transform ${
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <img
          src={foto1}
          alt="Cabana do Pórtico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
    </section>
  );
}
