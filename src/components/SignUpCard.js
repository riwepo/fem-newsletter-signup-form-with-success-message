import React from "react";

import classes from "./SignUpCard.module.css";

function SignUpCard({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default SignUpCard;
