import React from "react";
import { useState } from "react";
import MarketPlacePanel from "../../Components/MarketPlacePanel/MarketPlacePanel";
import StatusFilterResults from "../../Components/StatusFilterResults/StatusFilterResults";
import TradingCard from "../../Components/TradingCard/TradingCard";
import "./TradingCardPage.css";
import { tradingCardData } from "./TradingData";

const TradingCardPage: React.FC = () => {
  const [state, setstate] = useState<string[]>([]);

  const clearAllFilters = (): void => {
    setstate([]);
  };

  const removeSpecificItem = (indx: any): void => {
    setstate(state.filter((_, index) => index !== indx));
  };

  console.log(state);

  return (
    <div className="music">
      {window.innerWidth > 1024 && (
        <div>
          <MarketPlacePanel />
        </div>
      )}

      <div style={{ width: "100%" }}>
        <StatusFilterResults />
        <div className="trading-page-content">
          {tradingCardData.map((item, indx) => (
            <TradingCard key={indx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingCardPage;
