"use client";

import { useState } from "react";
import hero_section from "../assets/hero_section.svg";

import { AlignJustify } from "lucide-react";

export function HeroSection() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <section className="flex flex-col sm:items-center md:items-stretch">
      <img src={hero_section} className="-z-10 absolute" alt="" />
      <div
        className={
          openMenu
            ? "bg-gradient-to-b from-marromCabana-400 via-marromCabana-300 to-white h-screen flex flex-col items-center pt-4 transition-all md:hidden"
            : " flex flex-col items-end pt-2 pr-2 transition-all md:hidden"
        }
      >
        <AlignJustify className="text-white" onClick={handleOpenMenu} />
        <nav
          className={
            openMenu
              ? "text-white flex flex-col mt-8 font-Karla gap-2 text-2xl"
              : "hidden"
          }
        >
          <a href="#Galeria" onClick={handleOpenMenu}>
            Galeria
          </a>
          <a href="#Sobre" onClick={handleOpenMenu}>
            Sobre nós
          </a>
          <a href="#Feedback" onClick={handleOpenMenu}>
            Feedback
          </a>
          <a href="#Contato" onClick={handleOpenMenu}>
            Contato
          </a>
        </nav>
      </div>
      <nav className="md:flex justify-between px-40 mt-10 h-14 items-center hidden text-white md:text-2xl bg-black bg-opacity-10 font-Karla ">
        <a href="#Galeria" className="hover:text-neutral-200 transition-colors">
          Galeria
        </a>
        <a href="#Sobre" className="hover:text-neutral-200 transition-colors">
          Sobre nós
        </a>
        <a
          href="#Feedback"
          className="hover:text-neutral-200 transition-colors"
        >
          Feedback
        </a>
        <a href="#Contato" className="hover:text-neutral-200 transition-colors">
          Contato
        </a>
      </nav>
      <div className="mt-6 md:mt-8 lg:mt-20 xl:mt-36 ml-52 md:ml-96 lg:pl-36 xl:pl-[360px] flex flex-col w-fit text-white">
        <h1 className="font-Julius text-lg md:text-5xl lg:text-6xl xl:text-7xl text-end">
          Cabana do
        </h1>
        <h2 className="font-Julius text-lg md:text-6xl lg:text-7xl xl:text-8xl text-end">
          Pórtico
        </h2>
        <h3 className="font-Karla text-xs md:text-xl lg:text-2xl xl:text-3xl ml-auto">
          Gramado
        </h3>
      </div>
    </section>
  );
}
