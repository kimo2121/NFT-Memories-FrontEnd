import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import { IconCard } from "../../../Components/IconCard/IconCard";
import MainButton from "../../../Components/MainButton";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { Link } from "react-router-dom";
import "./CollectionItem.css";

interface Props {}

export const CollectionItem: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        background: "#EEEEF2",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          //   background: "red",
          width: "100%",
          padding: "0 1rem",
          color: "gray",
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: "1rem" }} />
        <Link to="/collections" style={{ color: "gray" }}>
          <h5>Back to my collections</h5>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
        }}
      >
        <div className="collectionItem_container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            className=""
          >
            <img
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
              alt="logo"
              className="collectionItem_logo"
            />
            <div className="collectionItem_Items">
              <AppsIcon style={{ marginRight: ".5rem" }} />
              <h5>ITEMS</h5>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              opacity: ".7",
            }}
          >
            <h1>Silesville</h1>
            <h5>Silesville Creatives</h5>
            <div style={{ display: "flex" }}>
              <IconCard text="Edit" icon={<EditIcon />} />
              <IconCard text="Visit" icon={<OpenInBrowserIcon />} />
              <IconCard text="Royalities" icon={<ViewListIcon />} />
            </div>
          </div>
        </div>
      </div>
      <div className="collectionItem_btnContianer">
        <hr className="collectionItem_hr" />
        <Link to="/collections/item/create" className="collectionItem_btn">
          <MainButton
            text="Add New Item"
            borderRadius="2rem"
            capitalize={true}
          />
        </Link>
      </div>
    </div>
  );
};
