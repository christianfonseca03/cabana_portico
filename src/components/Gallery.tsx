import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpeg";
import foto6 from "../assets/foto6.jpeg";
import foto7 from "../assets/foto7.jpeg";
import foto8 from "../assets/foto8.jpeg";
import foto9 from "../assets/foto9.jpeg";
import foto10 from "../assets/foto10.jpeg";
import foto11 from "../assets/foto11.jpeg";
import foto12 from "../assets/foto12.jpeg";
import foto13 from "../assets/foto13.jpeg";
import foto14 from "../assets/foto14.jpeg";
import foto15 from "../assets/foto15.jpeg";
import foto16 from "../assets/foto16.jpeg";
import foto17 from "../assets/foto17.jpeg";
import foto18 from "../assets/foto18.jpeg";
import foto19 from "../assets/foto19.jpeg";
import foto20 from "../assets/foto20.jpeg";
import Masonry from "./ui/Masonry";
import { Item } from "../types/masonry";

export function Gallery() {
  const items: Item[] = [
    {
      id: "1",
      img: foto1,
    },
    {
      id: "2",
      img: foto2,
    },
    {
      id: "3",
      img: foto3,
    },
    {
      id: "4",
      img: foto4,
    },
    {
      id: "5",
      img: foto5,
    },
    {
      id: "6",
      img: foto6,
    },
    {
      id: "7",
      img: foto7,
    },
    {
      id: "8",
      img: foto8,
    },
    {
      id: "9",
      img: foto9,
    },
    {
      id: "10",
      img: foto10,
    },
    {
      id: "11",
      img: foto11,
    },
    {
      id: "12",
      img: foto12,
    },
    {
      id: "13",
      img: foto13,
    },
    {
      id: "14",
      img: foto14,
    },
    {
      id: "15",
      img: foto15,
    },
    {
      id: "16",
      img: foto16,
    },
    {
      id: "17",
      img: foto17,
    },
    {
      id: "18",
      img: foto18,
    },
    {
      id: "19",
      img: foto19,
    },
    {
      id: "20",
      img: foto20,
    },
  ];

  return (
    <section
      id="gallery"
      className="flex flex-col bg-marromCabana-100 pb-4 md:pb-8 shadow-xl rounded-xl"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          className="font-Julius pt-10 text-marromCabana-500 text-xl md:text-3xl xl:text-5xl"
          id="Galeria"
        >
          Galeria
        </h1>
        <h2 className="font-Karla text-marromCabana-500 md:text-xl">
          @cabanadoportico
        </h2>
      </div>
      <div
        className="w-4/5 mx-auto mt-8 md:mb-16 mb-8"
        style={{ minHeight: "600px" }}
      >
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
