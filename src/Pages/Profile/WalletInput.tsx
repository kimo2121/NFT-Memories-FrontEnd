import { MdContentCopy } from "react-icons/md";
import InputFieldWithIcon from "../../Components/InputFieldWithIcon";
import MainButton from "../../Components/MainButton";

interface Props {}

export const WalletInput: React.SFC<Props> = (props) => {
  return (
    <>
      <div style={{ margin: "2rem 0" }}>
        <InputFieldWithIcon
          label="Wallet Address"
          placeholder="0x38FFD8bef5754c7e6c2847fa25b12a1F3"
          icon={
            <MdContentCopy style={{ fontSize: "2rem", color: "#B8B8B8" }} />
          }
        />
      </div>
      <div
      
        className="wallet_buttons"
      >
        <div style={{ marginRight: "2rem" }} className="wallet_rightButton">
          <MainButton text="Add funds" />
        </div>
        <MainButton text="log out" />
      </div>
    </>
  );
};
