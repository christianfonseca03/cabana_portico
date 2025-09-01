import { MoveRight } from "lucide-react";

export function CallToAction() {
  const handleReserveClick = () => {
    window.open(
      "https://www.airbnb.com.br/rooms/53605809?source_impression_id=p3_1695736573_tDUNdktQjbqKh%2B3r",
      "_blank"
    );
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="bg-marromCabana-500 rounded-2xl shadow-xl p-8 md:p-12">
          <p className="font-Karla text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            FAÇA SUA RESERVA E VENHA APROVEITAR O MELHOR QUE GRAMADO TEM A
            OFERECER!
          </p>
          <button
            onClick={handleReserveClick}
            className="bg-marromCabana-100 text-marromCabana-500 font-Karla font-semibold px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl hover:bg-marromCabana-300 hover:border-marromCabana-300 hover:text-marromCabana-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center mx-auto space-x-3"
          >
            <span>Reserve Agora</span>
            <MoveRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
