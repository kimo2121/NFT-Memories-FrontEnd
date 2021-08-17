import React from "react";
import "./TradingHistory.css";
import { VscLinkExternal } from "react-icons/vsc";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import { data1 } from "./TradingData";

const TradingHistory: React.FC = () => {
  return (
    <div className="what-so-ever">
      <div className="trading-history">
        <div className="trading-title">
          <SwapVertIcon /> Trading History
        </div>
        <div className="history-titles">
          <span
            className="span__event"
            style={{
              marginLeft: "15px",
            }}
          >
            Event
          </span>
          <span className="span__item">Item</span>
          <span className="span__unit-price">Unit Price</span>
          <span className="span__quantity">Quantity</span>
          <span className="span__from">From</span>
          <span className="span__to">To</span>
          <span className="span__date">Date</span>
        </div>
        <div className="trading-values">
          {data1.map((item, indx) => (
            <div key={indx} className="each-traded-item">
              <span className="span__event">{item.icon} Sale</span>
              <span className="span__item">
                <img src={item.img} alt="" style={{ objectFit: "cover" }} />
                {item.name}
              </span>
              <span className="span__unit-price">{item.price}</span>
              <span className="span__quantity">{item.quantity}</span>
              <span className="span__from">{item.from}</span>
              <span className="span__to">{item.to}</span>
              <span className="span__date">
                {item.date}
                <VscLinkExternal style={{ marginLeft: "7px" }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingHistory;
