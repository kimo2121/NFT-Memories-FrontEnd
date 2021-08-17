import React from "react";
import MarketPlacePanel from "../../Components/MarketPlacePanel/MarketPlacePanel";
import MusicPhotoCard from "../../Components/MusicPhotoCard/MusicPhotoCard";
import StatusFilterResults from "../../Components/StatusFilterResults/StatusFilterResults";
import "./Photo.css";
import { photosData } from "./PhotoData";

const Photo: React.FC = (photo) => {
  return (
    <div className="music">
      {window.innerWidth > 1024 && (
        <div>
          <MarketPlacePanel />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <span className="page-name">Photo</span>
        <StatusFilterResults />
        <div className="music-page-content">
          {photosData.map((item, indx) => (
            <MusicPhotoCard key={indx} photo={photo} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photo;
