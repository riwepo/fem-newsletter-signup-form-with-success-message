import React from "react";

import successImage from "../../assets/images/icon-success.svg";

import Button from "../UI/Button";

import classes from "./SuccessModal.module.css";

function SuccessModal({ email, onDismiss }) {
  return (
    <>
      <div className={classes.modal}>
        <img src={successImage} alt="tick" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
        <Button
          onClick={onDismiss}
          content="Dismiss message"
          isDisabled={false}
        />
      </div>
    </>
  );
}

export default SuccessModal;
