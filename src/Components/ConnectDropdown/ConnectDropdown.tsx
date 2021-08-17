import React from "react";
import "./ConnectDropdown.css";
import { IoClose } from "react-icons/io5";
import Metamask from "../../assets/icons/metamask.svg";
import walletconnect from "../../assets/icons/walletconnect.svg";
import binance from "../../assets/icons/binance.svg";
import { Link } from "react-router-dom";

interface IProps {
  connectToWallet?: any;
}
const ConnectDropdown: React.FC<IProps> = ({ connectToWallet }) => {
  return (
    <div className="connect-dropdown">
      <div className="dropdown-header">
        <span>Connect to a wallet</span>
        <span onClick={connectToWallet} className="dropdown-close">
          <IoClose size="15" color="#4A4A4A" />
        </span>
      </div>
      <Link onClick={connectToWallet} to="/connect-wallet" className="metamask">
        <span>MetaMask</span>
        <img src={Metamask} alt="" />
      </Link>
      <div className="walletconnect metamask">
        <span>MetaMask</span>
        <img src={walletconnect} alt="" />
      </div>
      <div className="binancewallet metamask">
        <span>MetaMask</span>
        <img src={binance} alt="" />
      </div>
      <div className="span-link">
        <span>New to Memories? </span>
        <Link to="/"> Learn how to connect.</Link>
      </div>
    </div>
  );
};

export default ConnectDropdown;
