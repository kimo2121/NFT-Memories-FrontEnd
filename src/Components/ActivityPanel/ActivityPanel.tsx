import React, { useState } from "react";
import "./ActivityPanel.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Store } from "../../assets/icons/store.svg";
import ArrowDown from "../../assets/icons/ArrowDown.svg";
import MarketPlaceCollectionFilter from "../MarketPlaceCollectionFilter/MarketPlaceCollectionFilter";

interface IProps {
  sideBar?: any;
}

const ActivityPanel: React.FC<IProps> = ({ sideBar }) => {
  const [state, setstate] = useState<boolean>(false);
  const [state2, setstate2] = useState<boolean>(false);
  const [buttonActive, setButtonActive] = useState<any>("");

  const showMiniMenu = (): void => {
    setstate(!state);
  };

  const showMiniMenu3 = (): void => {
    setstate2(!state2);
  };

  const handleClick = (e: any): void => {
    setButtonActive(e.target.value);
  };
  return (
    <div
      className={sideBar ? "marketplace-panel side-bar" : "marketplace-panel"}
    >
      <div onClick={showMiniMenu} className="status">
        <div>
          <Star
            className={state ? "conditional-star active" : "conditional-star"}
          />
          <span>Event Type</span>
        </div>
        <img
          src={ArrowDown}
          className={state ? "normal-arrow rotate" : "normal-arrow"}
          alt=""
        />
      </div>
      {state && (
        <div className="hidden-status-menu">
          <button
            value="buyNow"
            onClick={handleClick}
            className={
              buttonActive == "buyNow" ? "buy-now-btn active" : "buy-now-btn"
            }
          >
            Listings
          </button>
          <button
            value="onAuction"
            onClick={handleClick}
            className={
              buttonActive === "onAuction"
                ? "on-auction-btn active"
                : "on-auction-btn"
            }
          >
            Sales
          </button>
          <button
            value="new"
            onClick={handleClick}
            className={buttonActive === "new" ? "new-btn active" : "new-btn"}
          >
            Bids
          </button>
          <button
            value="hasOffers"
            onClick={handleClick}
            className={
              buttonActive === "hasOffers"
                ? "has-offers-btn active"
                : "has-offers-btn"
            }
          >
            Transfers
          </button>
        </div>
      )}
      <div onClick={showMiniMenu3} className="status">
        <div>
          <Store
            className={state2 ? "conditional-star active" : "conditional-star"}
          />
          <span>Collections</span>
        </div>
        <img
          className={state2 ? "normal-arrow rotate" : "normal-arrow"}
          src={ArrowDown}
          alt=""
        />
      </div>
      {state2 && <MarketPlaceCollectionFilter />}
    </div>
  );
};

export default ActivityPanel;
