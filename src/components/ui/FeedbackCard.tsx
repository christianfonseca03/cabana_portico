import stars from "../../assets/5stars.svg";

interface FeedbackCardProps {
  photo: string;
  name: string;
  text: string;
  time: string;
}

export function FeedbackCard({ photo, name, text, time }: FeedbackCardProps) {
  return (
    <div className="w-full h-auto bg-brancoCabana-100 shadow-lg rounded-xl flex flex-col font-Karla">
      <div className="flex items-center mt-4">
        <img src={photo} alt="" className="w-14 h-14 rounded-full ml-4" />
        <div className="flex flex-col ml-4">
          <h2 className="text-xl mb-1">{name}</h2>
          <img src={stars} className="w-2/4 mb-1" alt="" />
          <p>{time}</p>
        </div>
      </div>
      <div className="bg-white w-auto h-auto rounded-2xl mx-4 mt-2 py-2 mb-4">
        <p className="p-2">{text}</p>
      </div>
    </div>
  );
}
