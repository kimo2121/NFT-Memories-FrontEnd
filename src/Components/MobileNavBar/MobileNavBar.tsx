import React from "react";
import "./MobileNavBar.css";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Layer } from "../../assets/layer.svg";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as Wallet2 } from "../../assets/wallet2.svg";
import { ReactComponent as Notifications } from "../../assets/Notifications.svg";
import { ReactComponent as Memories } from "../../assets/memories.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/ArrowDown.svg";
import { Link } from "react-router-dom";
import SideBarNavMenu from "../SideBarNavMenu/SideBarNavMenu";

const MobileNavBar: React.FC = () => {
  return (
    <div>
      <div className="mobile-nav-top">
        <div className="mobile-nav-top-icons">
          <SideBarNavMenu />
          <Memories />
        </div>
        <div className="mobile-user">
          <span>Jessica Blair</span>{" "}
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />{" "}
          <ArrowDown />
        </div>
      </div>
      <div className="mobile-nav-bottom">
        <Link to="/profile">
          <Person />
        </Link>
        <Link to="/">
          <Home />
        </Link>
        <Link to="/">
          <Layer className="mobile-nav-logo" />
        </Link>
        <Link to="/">
          <Wallet2 />
        </Link>
        <Notifications />
      </div>
    </div>
  );
};

export default MobileNavBar;
