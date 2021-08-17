import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import compass from "../../assets/icons/compass.svg";

import { data1 } from "./MarketplaceData";
import "./MarketplaceDropdown.css";

const MarketplaceDropdown: React.FC = () => {
  const [state, setState] = useState<string>("");
  const handleDropLink = (item: any): void => {
    setState(item.name);
  };

  return (
    <div className="marketplace-dropdown">
      <div className="img-text-marketplace-menu">
        <img className="compass-icon" src={compass} alt="" />
        <strong
          style={{
            color: "#4A4A4A",
            marginLeft: ".3vw",
          }}
        >
          Marketplace
        </strong>
      </div>
      <div className="dropdown-content">
        <span className="dropdown-reppon"></span>
        {data1.map((item, indx) => (
          <Link to={item.to}>
            <div
              onClick={() => handleDropLink(item)}
              className={
                item.name === state
                  ? "each-dropdown-item active"
                  : "each-dropdown-item"
              }
              key={indx}
            >
              <span
                className={
                  item.name === state ? "dropdown-active-link" : undefined
                }
              ></span>
              <img className="List-img" src={item.img} />
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceDropdown;
