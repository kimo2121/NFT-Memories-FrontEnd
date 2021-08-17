import React from "react";
import { AiFillWindows } from "react-icons/ai";
import ActivityPanel from "../../Components/ActivityPanel/ActivityPanel";
import TradingHistory from "../../Components/TradingHistory/TradingHistory";
import "./Activity.css";

const Activity: React.FC = () => {
  return (
    <div className="activity-page">
      {window.innerWidth > 1024 && (
        <div>
          <ActivityPanel />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <p className="activity-name">Activity</p>
        <div className="activity-page-content">
          <TradingHistory />
        </div>
      </div>
    </div>
  );
};

export default Activity;
