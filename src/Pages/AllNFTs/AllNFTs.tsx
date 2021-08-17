import React from "react";
import { CollectionDetailsModal } from "../../Components/CollectionDetailsModal/CollectionDetailsModal";
import MarketPlacePanel from "../../Components/MarketPlacePanel/MarketPlacePanel";
import MusicPhotoCard from "../../Components/MusicPhotoCard/MusicPhotoCard";
import TradingCard from "../../Components/TradingCard/TradingCard";
import { musicData } from "../Music/MusicData";
import { photosData } from "../Photo/PhotoData";
import { tradingCardData } from "../TradingCardPage/TradingData";
import "./AllNFTs.css";

const AllNFTs: React.FC = (music, photo) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="all-nfts">
      {window.innerWidth > 1024 && (
        <div>
          <MarketPlacePanel />
        </div>
      )}
      <div>
        <span className="page-name">All NFTs</span>
        <div className="music-page-content">
          {musicData.map((item, indx) => (
            <MusicPhotoCard
              key={indx}
              music={music}
              item={item}
              handleOpen={handleOpen}
            />
          ))}
          {photosData.map((item, indx) => (
            <MusicPhotoCard
              key={indx}
              photo={photo}
              item={item}
              handleOpen={handleOpen}
            />
          ))}
          <div className="trading-page-content all-nfts-page">
            {tradingCardData.map((item, indx) => (
              <TradingCard key={indx} item={item} handleOpen={handleOpen} />
            ))}
          </div>
        </div>
      </div>
      <CollectionDetailsModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AllNFTs;
