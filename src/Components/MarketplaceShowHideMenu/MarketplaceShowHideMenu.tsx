import React from "react";
import "./MarketplaceShowHideMenu.css";
import ArrowDown from "../../assets/icons/ArrowDown.svg";

interface IProps {
  title?: any;
  condition?: any;
  icon?: any;
  showHide?: any;
}
const MarketplaceShowHideMenu: React.FC<IProps> = ({
  title,
  condition,
  icon,
  showHide,
}) => {
  return (
    <div onClick={showHide} className="status">
      <div>
        {/* <icon
          className={condition ? "conditional-star active" : "conditional-star"}
        /> */}
        {icon}
        <span>{title}</span>
      </div>
      <img
        src={ArrowDown}
        className={condition ? "normal-arrow rotate" : "normal-arrow"}
        alt=""
      />
    </div>
  );
};

export default MarketplaceShowHideMenu;
