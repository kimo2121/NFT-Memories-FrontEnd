import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./CollectionDetailsModal.css";
import { ReviewCollectionDetails } from "./ReviewCollectionDetails";
import { AddFunds } from "./AddFunds/AddFunds";
import { CompleteCheckout } from "./CompleteCheckout";
import { TransactionCompleted } from "./TransactionCompleted";
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
    minWidth: "200px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // height: "75vh",
    margin: "auto",
  },
}));

export const CollectionDetailsModal: React.FC<Props> = ({
  handleOpen,
  open,
  handleClose,
  children,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [stage, setStage] = React.useState(1);
  console.log({ stage });
  const body = (
    <div style={modalStyle} className={classes.paper}>
      {stage === 1 && (
        <ReviewCollectionDetails
          handleClose={handleClose}
          setStage={setStage}
        />
      )}
      {stage === 2 && (
        <AddFunds handleClose={handleClose} setStage={setStage} />
      )}
      {stage === 3 && (
        <CompleteCheckout handleClose={handleClose} setStage={setStage} />
      )}
      {stage === 4 && (
        <TransactionCompleted setStage={setStage} handleClose={handleClose} />
      )}
    </div>
  );

  console.log({ open });
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
