import React from "react";
import ReactDOM from "react-dom";

import classes from "./SuccessModal.module.css";

function Backdrop() {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay({ email }) {
  return (
    <>
      <div className={classes.modal}>
        <h1>Success Modal</h1>
        <p>{email}</p>
      </div>
    </>
  );
}

function SuccessModal({ email }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay email={email} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default SuccessModal;
