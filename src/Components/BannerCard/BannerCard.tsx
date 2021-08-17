import React from "react";
import "./BannerCard.css";
import someone from "../../assets/images/someone.png";
import another from "../../assets/images/another.png";
import tiny from "../../assets/icons/tiny.svg";

const BannerCard: React.FC = () => {
  return (
    <div className="banner-card">
      <img src={someone} alt="" />
      <div className="ban-card-details">
        <img src={another} alt="" />
        <div style={{ marginLeft: "-12px", marginRight: "12px" }}>
          <p
            style={{ fontWeight: "bold", fontSize: "24/12px", color: "black" }}
          >
            “TRUST”
          </p>
          <p>Tiago</p>
        </div>
        <br />
        <button className="ban-card-details-btn">
          <img src={tiny} alt="" /> 1.65B
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
