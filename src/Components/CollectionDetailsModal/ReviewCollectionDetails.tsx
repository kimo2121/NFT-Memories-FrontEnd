import { IoClose } from "react-icons/io5";
import MainButton from "../MainButton";
import "./CollectionDetailsModal.css";
interface Props {
  handleClose: () => void;
  //   setStage: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setStage: any;
}

export const ReviewCollectionDetails: React.FC<Props> = ({
  handleClose,
  setStage,
}) => {
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
      <p
        style={{
          textAlign: "center",
          letterSpacing: "2px",
          margin: "1rem 0",
          padding: "0",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Review Collection Details{" "}
      </p>
      <p style={{ fontSize: "1rem", color: "grey" }}>
        As an open marketplace on Memories by VOYR, anyone can upload content,
        including content that may be offensive or resemble others. Please
        review the collection accordingly.{" "}
      </p>
      <hr style={{ background: "lightgrey" }} />
      <div className="collectionInfo">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr " }}>
          <div style={{ fontWeight: "bold", margin: "1rem 0", color: "grey" }}>
            Created
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0" }}>4 days ago</div>
          <div style={{ fontWeight: "bold", margin: "1rem 0", color: "grey" }}>
            Sale
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0" }}>
            $120,049{" "}
            <span style={{ opacity: ".6", fontWeight: "normal" }}>
              (5.29B VOYRME)
            </span>
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0", color: "grey" }}>
            Creator
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0" }}>
            KTYLN{" "}
            <span style={{ opacity: ".6", fontWeight: "normal" }}>
              (Member since July 26, 2021)
            </span>
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0", color: "grey" }}>
            Item
          </div>
          <div style={{ fontWeight: "bold", margin: "1rem 0" }}>
            Bobbin’{" "}
            <span style={{ opacity: ".6", fontWeight: "normal" }}>
              (Digital Audio NFT){" "}
            </span>
          </div>
        </div>
      </div>
      <hr style={{ background: "lightgrey" }} />
      <div className="reviewCollection_checkbox">
        <input type="checkbox" className="modalCheckbox" />
        <p
          style={{
            color: "grey",
            fontSize: "1rem",
            textAlign: "left",
            marginLeft: "1rem",
          }}
        >
          I have reviewed this information and this the correct collection and
          item I wish to proceed to purchase.{" "}
        </p>
      </div>
      <hr />
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <MainButton
          text="Proceed"
          borderRadius="2rem"
          capitalize
          onClick={() => setStage(2)}
        />
      </div>
    </div>
  );
};
