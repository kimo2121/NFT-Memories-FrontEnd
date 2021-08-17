import {
  IoArrowBackSharp,
  IoCheckmarkCircleSharp,
  IoClose,
} from "react-icons/io5";
import MainButton from "../MainButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
interface Props {
  setStage: any;
  //   setStage: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  handleClose: any;
}

export const TransactionCompleted: React.FC<Props> = ({
  setStage,
  handleClose,
}) => {
  const onCompleteTrans = () => {
    handleClose();
    setStage(1);
  };
  return (
    <div className="collectionDetails_container">
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "1.5rem",
          color: "grey",
        }}
      >
        {/* <Close style={{ color: "grey" }} /> */}
        <IoClose
          style={{ color: "grey", fontSize: "2rem" }}
          onClick={handleClose}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "1.5rem",
          color: "grey",
        }}
      >
        {/* <Close style={{ color: "grey" }} /> */}
        <IoArrowBackSharp
          style={{ color: "grey", fontSize: "2rem" }}
          onClick={() => setStage(3)}
        />
      </div>
      <p className="completeCheckout_header">Your Transaction Completed </p>

      {/* <IoCheckmarkCircleSharp style={{ fontSize: "20rem",color:"red" }} /> */}
      <CheckCircleIcon style={{ fontSize: "15rem", color: "red" }} />

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "grey",
        }}
      >
        <p>
          <span style={{ color: "red" }}>View my profile holdings </span> or
        </p>
        <MainButton
          text="Back to All Items"
          capitalize
          borderRadius="10px"
          width="250px"
          onClick={() => {
            onCompleteTrans();
          }}
        />
        <p>
          View transaction on{" "}
          <span style={{ color: "red" }}>bscscan explorer.</span>
        </p>
      </div>
    </div>
  );
};
