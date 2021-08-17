import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stats from "../../assets/icons/Stats.svg";

import { data1 } from "../MarketplaceDropdown/MarketplaceData";
import "../MarketplaceDropdown/MarketplaceDropdown.css";

interface Props {
  title?: String;
  data?: Array<any>;
  hideIcon?: Boolean;
  icon?: any;
  marginTop?: Boolean;
}

const Dropdown: React.FC<Props> = ({
  title,
  data,
  hideIcon,
  icon,
  marginTop,
}) => {
  const [state, setState] = useState<string>("");
  const handleDropLink = (item: any): void => {
    setState(item.name);
  };

  return (
    <div className="marketplace-dropdown">
      <div className="img-text-marketplace-menu">
        {icon && icon}
        {!hideIcon && <img className="compass-icon" src={Stats} alt="" />}
        {!hideIcon && (
          <strong
            style={{
              color: "#4A4A4A",
              marginLeft: ".3vw",
            }}
          >
            {title}
          </strong>
        )}
      </div>
      <div
        className={`dropdown-content ${icon && "inner"}`}
        style={{ marginTop: marginTop ? "-3.3rem" : "" }}
      >
        <span className={`dropdown-reppon ${icon && "inner"}`}></span>
        {data &&
          data.map((item, indx) => (
            <Link to={item.to}>
              <div
                onClick={() => handleDropLink(item)}
                className="each-dropdown-item"
                key={indx}
              >
                <span
                  className={
                    item.name === state ? "dropdown-active-link" : undefined
                  }
                ></span>
                {item.img && <img className="List-img" src={item.img} />}
                {item.text}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
