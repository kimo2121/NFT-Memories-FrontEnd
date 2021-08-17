import { IoClose } from "react-icons/io5";
import "../CollectionDetailsModal.css";
interface Props {
  icon: any;
  title: String;
  input_plaeholder: String;
  headerTitle: String;
  balance: String;
}

export const AddFundsInput: React.FC<Props> = ({
  icon,
  title,
  input_plaeholder,
  headerTitle,
  balance,
}) => {
  return (
    <div
      style={{
        borderRadius: "1rem",
        // border: "1px solid black",
        boxShadow: "2px 2px 10px #888888",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <div
        // onClick={handleClose}
        style={{
          position: "absolute",
          top: "2rem",
          right: "1.5rem",
          color: "grey",
        }}
      >
        {/* <Close style={{ color: "grey" }} /> */}
        <IoClose style={{ color: "grey", fontSize: "2rem" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="addFundsInput_header">{headerTitle} </div>
        <div className="addFundsInput_header">
          Balance:{""} {balance}{" "}
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2rem",
          opacity: ".8",
        }}
        className="addFunds_input_container"
      >
        <input type="number" placeholder={`${input_plaeholder}`} />
        <div className="addFundsInput_title">
          <span className="addFundsInput_spanIcon">{icon}</span>
          {title}
        </div>
      </div>
    </div>
  );
};
