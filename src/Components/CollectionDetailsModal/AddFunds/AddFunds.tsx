import { AddFundsInput } from "./AddFundsInput";
import { ReactComponent as BNB } from "../../../assets/icons/BNB.svg";
// import { ReactComponent as VoyrMe } from "../../assets/icons/VoyrMe.svg";
import VoyrMe from "../../../assets/icons/VoyrMe.svg";
import WolfIcon from "../../../assets/icons/Wolf.svg";
import MainButton from ".././../MainButton";

import "./AddFunds.css";
interface Props {
  handleClose: any;
  // setStage: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setStage: any;
}

export const AddFunds: React.FC<Props> = ({ handleClose, setStage }) => {
  return (
    <div className="collectionDetails_container">
      <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>Add Funds</h2>

      <div style={{ padding: "0 .5rem" }}>
        <AddFundsInput
          input_plaeholder="2.5"
          title="BNB"
          icon={<BNB className="addFundsInput_icon" />}
          headerTitle="From"
          balance="43.391939"
        />
        <AddFundsInput
          input_plaeholder="25000000"
          title="VOYRME"
          icon={<img src={VoyrMe} className="addFundsInput_icon" />}
          headerTitle="To"
          balance="103020103"
        />
      </div>
      <div
        style={{
          letterSpacing: "1.5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainButton
          text="Purchase"
          borderRadius="2rem"
          capitalize
          width="200px"
          onClick={() => setStage(3)}
        />
        <div className="addFunds_footer">
          <p style={{ fontSize: ".9rem" }}>
            Connected to wallet{" "}
            <span style={{ fontWeight: "bold" }}>0x38FFD8…..1F3</span>
          </p>
          <img src={WolfIcon} alt="WolfIcon" className="addFunds_WolfIcon" />
        </div>
      </div>
    </div>
  );
};
