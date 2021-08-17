import React, { useContext, useState } from "react";
import "./Navbar.css";
import UserAvatar from "../../assets/icons/UserAvatar.svg";
import VoyrMe from "../../assets/icons/VoyrMe.svg";
import user from "../../assets/icons/user.svg";
import wallet from "../../assets/icons/wallet.svg";
import { ReactComponent as NavbarLogo } from "../../assets/icons/NavbarLogo.svg";
import calendar from "../../assets/icons/calendar.svg";
import MarketplaceDropdown from "../MarketplaceDropdown/MarketplaceDropdown";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../SearchBar/SearchBar";
import ConnectDropdown from "../ConnectDropdown/ConnectDropdown";
import Dropdown from "../Dropdown/Dropdown";
import { statsData } from "./NavbarData";

const Navbar: React.FC = () => {
  const [state, setstate] = useState<boolean>(false);
  const connectToWallet = (): void => {
    setstate(!state);
  };
  return (
    <div className="nav-bar">
      <div className="logo-div">
        <Link to="/">
          <NavbarLogo />
          {/* <img src={NavbarLogo} alt="" /> */}
        </Link>
      </div>
      <div className="middle-div">
        <PrimarySearchAppBar />
        <MarketplaceDropdown />
        {/* <img className="calendar-icon" src={calendar} alt="" /> */}
        {/* <strong style={{ color: "#4A4A4A", marginLeft: ".3vw" }}>Drops</strong> */}
        <div>
          <Dropdown title="Stats" data={statsData} />
        </div>
      </div>
      <div className="user-info">
        <div className="user-icon">
          <Link to="/profile">
            <img src={user} alt="" />
          </Link>
          <div className="user-span">
            <span
              style={{
                verticalAlign: "top",
                minWidth: "17px",
                marginRight: "10px",
              }}
            >
              0x38FFD8…..1F3
            </span>
            <img className="avatar-icon" src={UserAvatar} alt="" />
          </div>
        </div>
        <div className="wallet-icon">
          <img onClick={connectToWallet} src={wallet} alt="" />
          {state && <ConnectDropdown connectToWallet={connectToWallet} />}
          <div className="wallet-span">
            <div>
              <span className="voymor-span">Total VOYRME Balance</span>
              <span className="voymor-span bold-span">23,900,877</span>
              <span className="voymor-span">$ 13,114.41</span>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "1vh",
                paddingBottom: "1vh",
                marginLeft: "2vw",
                fontSize: "10px",
                textAlign: "left",
              }}
            >
              <img style={{ margin: "auto 0" }} src={VoyrMe} alt="" />
              VOYRME
              <br />$ 0.00054870
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
