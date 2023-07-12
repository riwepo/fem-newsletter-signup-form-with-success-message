import React from "react";

import classes from "./Button.module.css";

function Button({ content, isDisabled, onClick }) {
  return (
    <button className={classes.button} disabled={isDisabled} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
