import React from "react";
import MarketPlacePanel from "../../Components/MarketPlacePanel/MarketPlacePanel";
import MusicPhotoCard from "../../Components/MusicPhotoCard/MusicPhotoCard";
import StatusFilterResults from "../../Components/StatusFilterResults/StatusFilterResults";
import "./Music.css";
import { musicData } from "./MusicData";

const Music: React.FC = (music) => {
  return (
    <div className="music">
      {window.innerWidth > 1024 && (
        <div>
          <MarketPlacePanel />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <span className="page-name">Music</span>
        <StatusFilterResults />
        <div className="music-page-content">
          {musicData.map((item, indx) => (
            <MusicPhotoCard key={indx} music={music} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
