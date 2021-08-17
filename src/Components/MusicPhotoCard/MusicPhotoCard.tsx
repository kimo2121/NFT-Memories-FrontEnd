import React from "react";
import "./MusicPhotoCard.css";
import beats from "../../assets/icons/beats.svg";
import heart from "../../assets/icons/heart.svg";
import tiny from "../../assets/icons/tiny.svg";
import { CollectionDetailsModal } from "../CollectionDetailsModal/CollectionDetailsModal";

interface IProps {
  item: any;
  music?: any;
  photo?: any;
  handleOpen?: any;
}

const MusicPhotoCard: React.FC<IProps> = ({
  item,
  music,
  photo,
  handleOpen,
}) => {
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="music-photo-card" onClick={handleOpen}>
      <p style={{ marginTop: "11px" }}>
        {item.likes}
        <img style={{ marginLeft: ".5vw" }} src={heart} alt="" />
      </p>
      <img src={item.img} style={{ height: "284px" }} alt="" />
      <div className="music-details-div">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 1.5vw",
            marginTop: "2vh",
            marginBottom: "1vh",
            height: "60px",
          }}
        >
          {music && (
            <span style={{ textAlign: "left" }}>
              {item.name} <br />
              {item.track}
              <br />
              <span style={{ fontSize: "10px" }} className="album-edition">
                {item?.details}
              </span>
            </span>
          )}
          {photo && (
            <span style={{ textAlign: "left" }}>
              {item.name}
              <br />
              <br />
              <span style={{ fontSize: "14px" }}>{item?.details}</span>
              <br />
              <span style={{ fontSize: "10px" }}>{item.span}</span>
            </span>
          )}
          {music && (
            <button className="ban-card-details-btn number-view-btn">
              <img src={tiny} alt="" /> {item.played}
            </button>
          )}
          {photo && (
            <button className="ban-card-details-btn">
              <img src={tiny} alt="" /> {item.played}
            </button>
          )}
        </div>
        {music && <img src={beats} alt="" />}
      </div>
      {/* <CollectionDetailsModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      /> */}
    </div>
  );
};

export default MusicPhotoCard;
