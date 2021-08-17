import React from "react";
import "./TradingCard.css";
import { ReactComponent as Heart } from "../../assets/icons/heart1.svg";
interface IProps {
  item?: any;
  handleOpen?: any;
}
const TradingCard: React.FC<IProps> = ({ item, handleOpen }) => {
  return (
    <div className="auction-offers-card" onClick={handleOpen}>
      <p className="favourite-icon-container">
        <Heart className="favourite-card active" /> {item.likes}
      </p>
      <img src={item?.img} alt="" />
      <div className="auction-offer-details">
        <p className="auction-first-detail">
          <span>{item?.brand}</span>
          <span>{item?.bid}</span>
        </p>
        <p className="auction-second-detail">
          <span>{item?.name}</span>
          <span>{item?.number}</span>
        </p>
        <p className="auction-remaining-time">{item?.daysLeft}</p>
      </div>
    </div>
  );
};

export default TradingCard;
