import cabana from "../assets/cabanaAbout.png";

export function About() {
  return (
    <section className="flex flex-col items-center mt-24 relative ">
      <h1
        className="font-Italiana text-marromCabana-200 text-xl md:text-3xl xl:text-5xl mb-12"
        id="Sobre"
      >
        A Cabana do Pórtico
      </h1>
      <div className="flex flex-col md:flex-row bg-brancoCabana-200 rounded-xl shadow-xl justify-center items-center p-2 md:p-8 w-3/4 md:w-2/4 mx-auto">
        <img src={cabana} className="w-1/2 rounded-xl mb-6 md:mr-4" alt="" />
        <p>
          Seja surpreendido com uma vista extraordinária dos morros e colinas de
          Gramado ao acordar. A apenas 10 minutos de centro da cidade a Cabana
          do Pórtico é o lugar perfeito para passar momentos incríveis e
          inesquecíveis. Escolha entre noites na lareira dentro da Cabana ou na
          fogueira na parte externa. Conta com cozinha completa, Wi-fi,
          ar-condicionado, 2 banheiros, vaga para 2 carros e acomoda até 6
          hóspedes.
        </p>
      </div>
      <div className="bg-marromCabana-500 w-full h-12 absolute bottom-56 -z-10 "></div>
      <div className="bg-marromCabana-500 w-full h-12 absolute bottom-36 -z-10 "></div>
      <div className="bg-marromCabana-500 w-full h-24 absolute bottom-0 -z-10"></div>
    </section>
  );
}
