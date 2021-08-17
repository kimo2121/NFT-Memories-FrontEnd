import React from "react";
import "./ExclusiveMemoriesCard.css";
// import { IState as Props } from "../../Pages/Home/Home";

// interface IProps {
//   item: Props["item"];
// }
interface IState {
  item: any;
}
const ExclusiveMemoriesCard: React.FC<IState> = ({ item }) => {
  return (
    <div className="exclusive-card">
      <img src={item.img} alt="img" />
      <div className="ex-card-details">
        <h1>{item.text}</h1>
        <button>Live</button>
      </div>
    </div>
  );
};

export default ExclusiveMemoriesCard;
