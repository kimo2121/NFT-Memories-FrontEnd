import React from "react";
import "./Footer.css";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";

const data1: Array<any> = [
  "All NFTs",
  "New",
  "Fine Art",
  "Photos",
  "Videos",
  "Music",
  "Digital",
  "Trading Cards",
];
const data2: Array<any> = [
  "My Profile",
  "My Collections",
  "My Favourit",
  "My Account Settings",
];

const Footer: React.FC = () => {
  return (
    <Router>
      <div className="footer">
        <div className="footer-div-container"></div>
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <p>
            The world’s first social exchange that rewards creators and fans for
            celebrating art + life.
          </p>
          <p>
            Memories by VOYR is a digital marketplace for crypto collectibles
            and non-fungible tokens (NFTs). Buy, sell, and discover exclusive
            digital assets.
          </p>
        </div>
        <div className="footer-marketplace">
          <p>Marketplace</p>
          {data1.map((item, indx) => (
            <Link key={indx} to="/">
              {item}
            </Link>
          ))}
        </div>
        <div className="footer-marketplace footer-my-account">
          <p>My Account</p>
          {data2.map((item, indx) => (
            <Link key={indx} to="/">
              {item}
            </Link>
          ))}
          <p>Stats</p>
          <Link to="/">Rankings</Link>
          <Link to="/">Activity</Link>
        </div>
        <div className="footer-marketplace footer-resources">
          <p>Resources</p>
          <Link to="/">FAQ</Link>
          <Link to="/">Help Center</Link>
        </div>
        <Redirect to="/" />
      </div>
    </Router>
  );
};

export default Footer;
