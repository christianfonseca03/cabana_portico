import instagram from "../assets/instagram.png";
import airbnb from "../assets/airbnb.png";
import whatsapp from "../assets/whatsapp.png";

export function Contact() {
  return (
    <section className="bg-marromCabana-500 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1
            className="font-Julius text-white text-2xl md:text-4xl lg:text-5xl mb-4"
            id="Contato"
          >
            Entre em Contato
          </h1>
          <p className="font-Karla text-marromCabana-100 text-lg md:text-xl max-w-2xl mx-auto">
            Escolha a forma que preferir para nos encontrar e fazer sua reserva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://www.instagram.com/cabanadoportico/"
            target="_blank"
            className="group"
          >
            <div className="bg-marromCabana-100 rounded-xl p-4 text-center hover:bg-marromCabana-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </div>
              <h3 className="font-Karla font-semibold text-marromCabana-500 text-lg mb-2">
                Instagram
              </h3>
              <p className="font-Karla text-marromCabana-400 text-sm">
                @cabanadoportico
              </p>
            </div>
          </a>

          <a
            href="https://www.airbnb.com.br/rooms/53605809?source_impression_id=p3_1695736573_tDUNdktQjbqKh%2B3r"
            target="_blank"
            className="group"
          >
            <div className="bg-marromCabana-100 rounded-xl p-4 text-center hover:bg-marromCabana-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <img src={airbnb} alt="Airbnb" className="w-8 h-8" />
              </div>
              <h3 className="font-Karla font-semibold text-marromCabana-500 text-lg mb-2">
                Airbnb
              </h3>
              <p className="font-Karla text-marromCabana-400 text-sm">
                Faça sua reserva
              </p>
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5551994798651"
            target="_blank"
            className="group"
          >
            <div className="bg-marromCabana-100 rounded-xl p-4 text-center hover:bg-marromCabana-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
              </div>
              <h3 className="font-Karla font-semibold text-marromCabana-500 text-lg mb-2">
                WhatsApp
              </h3>
              <p className="font-Karla text-marromCabana-400 text-sm">
                (51) 99479-8651
              </p>
            </div>
          </a>
        </div>

        <div className="border-t border-marromCabana-300 pt-8 pb-4 text-center">
          <p className="font-Karla text-marromCabana-100 text-sm">
            Desenvolvido por @chrisfonseca_
          </p>
        </div>
      </div>
    </section>
  );
}
