import React from "react";
import "./TrendingCard.css";

interface IProps {
  ele: any;
}
const TrendingCard: React.FC<IProps> = ({ ele }) => {
  return (
    <div className="trending-card">
      <img src={ele.img} alt="" />
      <div className="tren-card-details">
        <div className="image-circle">
          <img src={ele.icon} alt="" />
        </div>
        <p>{ele.text}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
