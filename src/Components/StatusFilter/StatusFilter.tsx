import React, { useContext } from "react";
import { FilterContext } from "../../Context";
import "./StatusFilter.css";

const StatusFilter: React.FC = ({}) => {
  const { filteredCards, statusButtonsFilter } = useContext(FilterContext);

  return (
    <div className="hidden-status-menu">
      <button
        value="buyNow"
        onClick={(e) => {
          filteredCards(e);
        }}
        className={
          statusButtonsFilter.find((item: any) => item === "buyNow")
            ? "buy-now-btn active"
            : "buy-now-btn"
        }
      >
        BuyNow
      </button>
      <button
        value="onAuction"
        onClick={(e) => {
          filteredCards(e);
        }}
        className={
          statusButtonsFilter.find((item: any) => item === "onAuction")
            ? "on-auction-btn active"
            : "on-auction-btn"
        }
      >
        OnAuction
      </button>
      <button
        value="new"
        onClick={(e) => {
          filteredCards(e);
        }}
        className={
          statusButtonsFilter.find((item: any) => item === "new")
            ? "new-btn active"
            : "new-btn"
        }
      >
        New
      </button>
      <button
        value="hasOffers"
        onClick={(e) => {
          filteredCards(e);
        }}
        className={
          statusButtonsFilter.find((item: any) => item === "hasOffers")
            ? "has-offers-btn active"
            : "has-offers-btn"
        }
      >
        HasOffers
      </button>
    </div>
  );
};

export default StatusFilter;
