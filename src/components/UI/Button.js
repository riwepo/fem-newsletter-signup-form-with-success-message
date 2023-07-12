import React from "react";

import classes from "./Button.module.css";

function Button({ content, isDisabled }) {
  return <button disabled={isDisabled}>{content}</button>;
}

export default Button;
