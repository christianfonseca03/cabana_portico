import { FeedbackCard } from "./ui/FeedbackCard";
import audrey from "../assets/audrey.jpeg";
import jossana from "../assets/Jossana.jpeg";
import pedro from "../assets/pedroAlexandre.jpeg";
import marcelo from "../assets/marcelo.jpeg";
import cameron from "../assets/cameron.jpeg";
import rakel from "../assets/rakel.jpeg";

export function Feedback() {
  return (
    <section className="bg-gradient-to-b from-marromCabana-500 w-full">
      <div className="bg-marromCabana-500 w-full h-20"></div>
      <h1
        className="font-Italiana text-marromCabana-200 text-xl md:text-3xl xl:text-5xl text-center py-5 md:py-12 bg-white"
        id="Feedback"
      >
        Feedbacks
      </h1>
      <section className="md:grid md:grid-cols-2 md:gap-16 w-4/5 mx-auto justify-center mt-8 flex flex-col gap-10">
        <FeedbackCard
          name="Marcelo"
          time="Dezembro de 2023"
          text="A cabana nos surpreendeu de todas as formas. o lugar é espetacular. A anfitriã atenciosa e sempre à disposição. Com certeza voltarei. "
          photo={marcelo}
        />
        <FeedbackCard
          name="Audrey"
          time="Novembro de 2023"
          text="Esse lugar é incrível! Vale a pena com certeza! Só tenho elogios. A anfitriã é maravilhosa, sempre acessível e comunicativa. Vamos voltar sempre que possamos."
          photo={audrey}
        />
        <FeedbackCard
          name="Jossana"
          time="Outubro de 2023"
          text="Excelente cabana, tudo bem novinho. Roupas de cama, toalhas e roupões super cheirosos. Diversos temperos para cozinhar à disposição. Cabana com decoração muito bonita, nota-se que houve um cuidado com todos os itens. Flexibilidade no checkout e excelente atendimento da Serenna. A vista é o ponto alto do espaço, espetacular. Recomendamos e voltaríamos!"
          photo={jossana}
        />
        <FeedbackCard
          name="Pedro Alexandre"
          time="Outubro de 2023"
          text="Ótima localização… casa exatamente igual a descrição e fotos… anfitrião super prestativo. Recomendo"
          photo={pedro}
        />
        <FeedbackCard
          name="Rakel"
          time="Janeiro de 2024"
          text="Foram dias encantadores na Cabana do Pórtico, uma energia incrível com uma paisagem surreal !! A cabana é simplesmente perfeita, aconchegante e completa ! Dias de muita alegria com a família , retornaremos em breve com certeza! Obrigado por nos proporcionar tantos momentos maravilhosos! Gratidão 🙏🏻😍"
          photo={rakel}
        />
        <FeedbackCard
          name="Cameron"
          time="Fevereiro de 2024"
          text="Beautiful place, will definitely stay here next time Im in Brazil."
          photo={cameron}
        />
      </section>
    </section>
  );
}
