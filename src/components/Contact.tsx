import instagram from "../assets/instagram.png";
import airbnb from "../assets/airbnb.png";
import whatsapp from "../assets/whatsapp.png";

export function Contact() {
  return (
    <section className="flex flex-col mt-20">
      <h1
        className="font-Italiana text-marromCabana-200 text-xl md:text-3xl xl:text-5xl text-center py-5 md:py-12 mb-8"
        id="Contato"
      >
        Contato
      </h1>
      <div className="flex flex-col md:flex-row items-center  md:justify-evenly">
        <a href="https://www.instagram.com/cabanadoportico/" target="_blank">
          <button className="bg-marromCabana-200 text-white w-48 h-12 text-sm rounded-full mb-4 font-Karla flex justify-center items-center hover:bg-yellow-900 transition-colors">
            <img src={instagram} alt="" className="mr-2" />
            <p>Instagram</p>
          </button>
        </a>
        <a
          href="https://www.airbnb.com.br/rooms/53605809?source_impression_id=p3_1695736573_tDUNdktQjbqKh%2B3r"
          target="_blank"
        >
          <button className="bg-marromCabana-200 text-white w-48 h-12 text-sm rounded-full mb-4 font-Karla flex justify-center items-center hover:bg-yellow-900 transition-colors">
            <img src={airbnb} alt="" className="mr-2" />
            <p>Airbnb</p>
          </button>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5551982252552"
          target="_blank"
        >
          <button className="bg-marromCabana-200 text-white w-48 h-12 text-sm rounded-full mb-4 font-Karla flex justify-center items-center hover:bg-yellow-900 transition-colors">
            <img src={whatsapp} alt="" className="mr-2" />
            <p>Whatsapp</p>
          </button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between mt-20 font-Karla text-sm mb-10 gap-2 mx-0 md:mx-8 items-center">
        <h4>UX/UI Design por Ellie Tokki</h4>
        <h4>Desenvolvido por @chrisfonseca_</h4>
      </div>
    </section>
  );
}
