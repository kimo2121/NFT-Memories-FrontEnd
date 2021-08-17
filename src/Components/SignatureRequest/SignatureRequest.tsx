import React from "react";
import "./SignatureRequest.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const data1: Array<string> = [
  "Message:",
  "Welcome to Memories of VOYR",
  'Click "Sign" to sign in. No password needed!',
  "I accept the Memories by VOYR Terms of service: https://voyr.me/tos",
  "Wallet address: 0x56s498q7as4das74q6we46asasd321",
];
interface IProps {
  showWalletInfo?: any;
}
const SignatureRequest: React.FC<IProps> = ({ showWalletInfo }) => {
  return (
    <div className="signature-request">
      <div className="signature-title">
        Signature Request
        <span></span>
      </div>
      <div style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.301)" }}>
        <div className="account-balance">
          <span>
            Account:
            <br />
            <span>Patrick C...</span>
          </span>
          <span className="account-balance-details"></span>
          <span>
            Balance: <br />
            <span>10 ETH</span>
          </span>
        </div>
        <div className="origin-link">
          <span>Origin:</span>
          <Router>
            <Link to="/">https://memories.voyr.me</Link>
          </Router>
        </div>
        <p>You are signing</p>
      </div>
      <div className="voyr-p-container">
        {data1.map((item, indx) => (
          <p key={indx}>{item}</p>
        ))}
      </div>
      <div className="signature-buttons">
        <button onClick={showWalletInfo} className="signature-btn1">
          Cancel
        </button>
        <button onClick={showWalletInfo} className="signature-btn2">
          Sign
        </button>
      </div>
    </div>
  );
};

export default SignatureRequest;
