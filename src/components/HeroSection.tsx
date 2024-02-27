import hero_section from "../assets/hero_section.svg";

export function HeroSection() {
  return (
    <section className="flex flex-col sm:items-center md:items-stretch">
      <img src={hero_section} className="-z-10 absolute" alt="" />
      <nav className="md:flex justify-between px-40 mt-10 h-14 items-center hidden text-white md:text-2xl bg-black bg-opacity-10 font-Karla ">
        <a href="#Galeria" className="">
          Galeria
        </a>
        <a href="#Sobre">Sobre nós</a>
        <a href="#Feedback">Feedback</a>
        <a href="#Contato">Contato</a>
      </nav>
      <div className=" mt-16 md:mt-8 lg:mt-20 xl:mt-36 ml-52 md:ml-96 lg:pl-36 xl:pl-[360px] flex flex-col w-fit text-white">
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
