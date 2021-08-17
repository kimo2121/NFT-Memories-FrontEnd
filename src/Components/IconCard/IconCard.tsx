import "./IconCard.css";
interface Props {
  icon: any;
  text: String;
}

export const IconCard: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="iconCard">
      <p className="iconCard_icon">{icon}</p>
      <p className="iconCard_text">{text} </p>
    </div>
  );
};
