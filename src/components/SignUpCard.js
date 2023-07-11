import React from "react";

import classes from "./SignUpCard.module.css";
import SignUpImg from "./SignUpImg";
import SignUpInfo from "./SignUpInfo";

function SignUpCard({ onSignUpSuccess }) {
  return (
    <div className={classes.card}>
      <SignUpImg />
      <SignUpInfo onSignUpSuccess={onSignUpSuccess} />
    </div>
  );
}

export default SignUpCard;
