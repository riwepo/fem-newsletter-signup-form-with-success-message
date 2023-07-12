import React from "react";
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";

import classes from "./SignUpImg.module.css";

function SignUpImg() {
  return (
    <>
      <img
        className={classes.mobileImg}
        src={mobileImage}
        alt="newsletter illustration"
      />
      <img
        className={classes.desktopImg}
        src={desktopImage}
        alt="newsletter illustration"
      />
    </>
  );
}

export default SignUpImg;
