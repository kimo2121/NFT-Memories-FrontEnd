import { IoArrowBackSharp, IoClose } from "react-icons/io5";
import MainButton from "../MainButton";
import VoyrMe from "../../assets/icons/VoyrMe.svg";
import { Link } from "react-router-dom";

interface Props {
  handleClose?: () => void;
  //   setStage:(value: boolean | ((prevVar: boolean) => boolean)) => void;
  setStage: any;
}

export const CompleteCheckout: React.FC<Props> = ({
  handleClose,
  setStage,
}) => {
  return (
    <div className="collectionDetails_container">
      <div
        onClick={handleClose}
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
      <div
        onClick={handleClose}
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
          onClick={() => setStage(2)}
        />
      </div>
      <p className="completeCheckout_header">Complete Checkout</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <p style={{ letterSpacing: "1.5px" }}>Item</p>
        <p style={{ letterSpacing: "1.5px" }}>Subtotal</p>
      </div>
      <hr style={{ background: "lightgrey" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dDKJKyWWHiJIPlMqZBSYfCepxMJVzweEuTCmseyCzhBGwjcKNZWrj00xREU_UioMHTI&usqp=CAU"
            alt="profile"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "1rem",
              marginRight: "5rem",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <div>KTYLN</div>
            <div style={{ fontWeight: "normal" }}>Boppin (2:24)</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={VoyrMe} style={{ width: "1.5rem", marginRight: ".5rem" }} />
          <div>
            <div>330K</div>
            <div style={{ fontSize: ".6rem" }}>($3.00)</div>
          </div>
        </div>
      </div>
      <hr style={{ background: "lightgrey" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div style={{ letterSpacing: "1.5px" }}>Total</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={VoyrMe} style={{ width: "1.5rem", marginRight: ".5rem" }} />
          <div>
            <div>330K</div>
            <div style={{ fontSize: ".6rem" }}>($3.00)</div>
          </div>
        </div>
      </div>
      <hr style={{ background: "lightgrey" }} />

      <div className="CompleteCheckout_checkbox">
        <input type="checkbox" className="modalCheckbox" />
        <p
          style={{
            color: "grey",
            fontSize: "1rem",
            textAlign: "left",
            marginLeft: "1rem",
          }}
        >
          By checking this box, I agree to the VOYR{" "}
          <Link to="" style={{ color: "red" }}>
            terms of service.
          </Link>
        </p>
      </div>
      <hr />
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="CompleteCheckout_btn">
          <MainButton
            text="Checkout"
            capitalize
            borderRadius="10px"
            onClick={() => setStage(4)}
          />
        </div>
        <MainButton
          text="Add funds"
          capitalize
          outlined
          borderRadius="10px"
          onClick={() => setStage(2)}
        />
      </div>
    </div>
  );
};
