import React from "react";
import { Paper } from "@material-ui/core";
import StorePng from "../../assets/StrorePng.png";
import { CreateCollectionModal } from "./CreateCollectionModal";

interface Props {}

export const CreateCollection: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper
        style={{
          height: "250px",
          // width: "100%",
          minWidth: "200px",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem",
        }}
        onClick={handleOpen}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          Create <br /> New Collection
        </h3>
        <img src={StorePng} alt="StorePng" style={{ width: "6rem" }} />
        <p style={{ fontSize: "12px", marginBottom: "1.5rem" }}>
          Or connect to <span style={{ color: "red" }}>existing</span>{" "}
          collection
        </p>
      </Paper>
      <CreateCollectionModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
