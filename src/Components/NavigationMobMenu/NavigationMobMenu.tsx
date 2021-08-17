import React, { useState } from "react";
import "./NavigationMobMenu.css";
import { data1 } from "../MarketplaceDropdown/MarketplaceData";
import { Link } from "react-router-dom";
import { statsData } from "../Navbar/NavbarData";
const NavigationMobMenu: React.FC = () => {
  const [state, setState] = useState<string>("");
  const handleDropLink = (item: any): void => {
    setState(item.name);
  };
  const combinedData = data1.concat(statsData);
  return (
    <div className="navigation-mobMenu-content ">
      {combinedData.map((item, indx) => (
        <Link to={item.to}>
          <div
            onClick={() => handleDropLink(item)}
            className={
              item.name === state
                ? "each-dropdown-item_ mobile"
                : "each-dropdown-item_"
            }
            key={indx}
          >
            <img className="List-img" src={item.img} />
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationMobMenu;
