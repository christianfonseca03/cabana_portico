import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";
import foto6 from "../assets/foto6.png";
import foto7 from "../assets/foto7.png";
import foto8 from "../assets/foto8.png";
import foto9 from "../assets/foto9.png";

import { MoveRight } from "lucide-react";

export function Gallery() {
  return (
    <section className="flex flex-col mt-20 md:mt-44 xl:mt-72 bg-gradient-to-b from-white via-marromCabana-300 to-marromCabana-400">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-Italiana text-marromCabana-200 text-xl md:text-3xl xl:text-5xl">
          Galeria
        </h1>
        <h2 className="font-Karla text-marromCabana-100 md:text-xl">
          @cabanadoportico
        </h2>
      </div>
      <section className="grid grid-cols-3 gap-2 md:gap-6 w-4/5 mx-auto justify-center mt-8 md:mb-16 mb-14 ">
        <img
          src={foto1}
          className="rounded-3xl col-span-2 row-span-2 drop-shadow-md"
          alt=""
        />
        <img
          src={foto2}
          className="rounded-3xl col-start-3 drop-shadow-md"
          alt=""
        />
        <img src={foto3} className="rounded-3xl drop-shadow-md" alt="" />
        <img
          src={foto4}
          className="rounded-3xl col-span-2 col-start-2 row-span-2 drop-shadow-md"
          alt=""
        />
        <img
          src={foto8}
          className="rounded-3xl drop-shadow-md row-start-3 col-start-1"
          alt=""
        />
        <img
          src={foto9}
          className="rounded-3xl drop-shadow-md row-start-4 col-start-1"
          alt=""
        />
        <img
          src={foto6}
          className="rounded-3xl col-span-2 row-span-2 drop-shadow-md"
          alt=""
        />
        <img src={foto7} className="rounded-3xl drop-shadow-md" alt="" />
        <img
          src={foto5}
          className="rounded-3xl drop-shadow-md row-start-5 col-start-3"
          alt=""
        />
      </section>
      <div className="flex text-white justify-center sm:text-xs font-Karla md:text-xl mb-8 md:mb-10">
        <a href="https://www.airbnb.com.br/rooms/53605809?source_impression_id=p3_1695736573_tDUNdktQjbqKh%2B3r" target="_blank" className="mr-2">
          Veja mais no Airbnb
        </a>
        <MoveRight />
      </div>
      <div className="w-full bg-marromCabana-500 h-8 mb-10 md:mb-14"></div>
    </section>
  );
}
