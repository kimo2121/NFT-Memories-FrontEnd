import React, { useState } from "react";
import "./SideBarNavMenu.css";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { Link } from "react-router-dom";
import NavigationMobMenu from "../NavigationMobMenu/NavigationMobMenu";
import ActivityPanel from "../ActivityPanel/ActivityPanel";
import { LaptopWindowsSharp } from "@material-ui/icons";
import MarketPlacePanel from "../MarketPlacePanel/MarketPlacePanel";

const SideBarNavMenu: React.FC = (sideBar) => {
  const pathname = window.location.pathname;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
      {sidebar && (
        <div>
          <div className="backdrop"></div>
        </div>
      )}
      <div className="burger-menu-component">
        <div className="navbar">
          <div></div>
          <div>
            <Burger
              onClick={showSidebar}
              className="burger-icon"
              style={{ marginRight: "12px" }}
            />
          </div>
        </div>
        <nav className={sidebar ? "burger-menu active" : "burger-menu"}>
          <AiIcons.AiOutlineClose
            onClick={showSidebar}
            className={sidebar ? "x-icon active" : "x-icon"}
            size="25"
          />
          <div
            style={{
              margin: "margin 0",
              height: "100%",
              width: "100%",
              // overflowY: "scroll",
              paddingTop: "3rem",
            }}
          >
            <div className="burger-menu-content">
              <NavigationMobMenu />
            </div>
            {(pathname === "/music" ||
              pathname === "/photos" ||
              pathname === "/trading-card-page") && <h3>Filters</h3>}

            <div
              style={{ margin: "margin 0", height: "80%", overflowY: "scroll" }}
            >
              {(pathname === "/music" ||
                pathname === "/trading-card-page" ||
                pathname === "/photos") && (
                <MarketPlacePanel sideBar={sideBar} />
              )}
              {pathname === "/activity" && <ActivityPanel sideBar={sideBar} />}
              {/* {window.location.pathname === "/profile" && (
                <MarketPlacePanel sideBar={sideBar} />
              )} */}
            </div>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default SideBarNavMenu;
