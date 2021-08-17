import React, { useContext, useState } from "react";
import "./MarketPlacePanel.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Store } from "../../assets/icons/store.svg";
import { ReactComponent as Price } from "../../assets/icons/price.svg";
import { ReactComponent as Dollar } from "../../assets/icons/dollar.svg";
import MarketPlaceCollectionFilter from "../MarketPlaceCollectionFilter/MarketPlaceCollectionFilter";
import MarketplaceShowHideMenu from "../MarketplaceShowHideMenu/MarketplaceShowHideMenu";
import PriceFilter from "../PriceFilter/PriceFilter";
import StatusFilter from "../StatusFilter/StatusFilter";

interface IProps {
  sideBar?: any;
}

const MarketPlacePanel: React.FC<IProps> = ({ sideBar }) => {
  const [state1, setstate1] = useState<boolean>(false);
  const [state2, setstate2] = useState<boolean>(false);
  const [state3, setstate3] = useState<boolean>(false);
  const [state4, setstate4] = useState<boolean>(false);

  const showMiniMenu = (): void => {
    setstate1(!state1);
  };
  const showMiniMenu2 = (): void => {
    setstate2(!state2);
  };
  const showMiniMenu3 = (): void => {
    setstate3(!state3);
  };
  const showMiniMenu4 = (): void => {
    setstate4(!state4);
  };

  return (
    <div
      className={
        sideBar ? "marketplace-panel side-bar-size" : "marketplace-panel"
      }
    >
      <MarketplaceShowHideMenu
        title="Status"
        condition={state1}
        showHide={showMiniMenu}
        icon={
          <Star
            className={state1 ? "conditional-star active" : "conditional-star"}
          />
        }
      />
      {state1 && <StatusFilter />}
      <MarketplaceShowHideMenu
        title="Price"
        condition={state2}
        showHide={showMiniMenu2}
        icon={
          <Dollar
            className={state2 ? "conditional-star active" : "conditional-star"}
          />
        }
      />
      {state2 && <PriceFilter />}
      <MarketplaceShowHideMenu
        title="Collections"
        condition={state3}
        showHide={showMiniMenu3}
        icon={
          <Store
            className={state3 ? "conditional-star active" : "conditional-star"}
          />
        }
      />
      {state3 && <MarketPlaceCollectionFilter />}
      <MarketplaceShowHideMenu
        title="On Sale"
        condition={state4}
        showHide={showMiniMenu4}
        icon={
          <Price
            className={state4 ? "conditional-star active" : "conditional-star"}
          />
        }
      />
    </div>
  );
};

export default MarketPlacePanel;
