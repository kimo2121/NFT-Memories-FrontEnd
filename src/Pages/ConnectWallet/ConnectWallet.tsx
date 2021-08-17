import React from "react";
import ConnectDropdown from "../../Components/ConnectDropdown/ConnectDropdown";
import SignatureRequest from "../../Components/SignatureRequest/SignatureRequest";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import "./ConnectWallet.css";

const ConnectWallet: React.FC = () => {
  return (
    <div className="connect-wallet">
      <SliderComponent />
      {/* <ConnectDropdown /> */}
      {/* <SignatureRequest /> */}
    </div>
  );
};

export default ConnectWallet;
