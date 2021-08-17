import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ImgPlaceholder from "../assets/ImgPlaceholder.svg";
import InputField from "./InputField";
import MainButton from "./MainButton";
import { ReactComponent as Close } from "../assets/icons/Close.svg";

interface Props {
  handleOpen: any;
  open: any;
  handleClose: any;
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  // const top = 50 + rand();
  const top = 50;
  // const left = 50 + rand();
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "280px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // height: "75vh",
    margin: "auto",
  },
}));

export const ModalMUI: React.FC<Props> = ({
  handleOpen,
  open,
  handleClose,
  children,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <p
          style={{
            textAlign: "center",
            letterSpacing: "2px",
            margin: "1rem 0",
            padding: "0",
          }}
        >
          Create Collection
        </p>
        <div
          onClick={handleClose}
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
        >
          <Close />
        </div>
        <hr />
        <p>Logo*</p>
        <p style={{ fontSize: ".7rem", marginTop: "-1rem" }}>
          (350 x 350 recommended){" "}
        </p>
        <div
          style={{
            border: "1px dashed  gray",
            borderRadius: "1rem",
            width: "150px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={ImgPlaceholder} alt="ImgPlaceholder" />
        </div>

        <InputField label="Name*" placeholder="" />
        <InputField
          label="Description"
          textArea
          subheader="0 of 1000 characters"
          placeholder=""
        />
        <div style={{ textAlign: "center" }}>
          <MainButton text="Create" borderRadius="2rem" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
