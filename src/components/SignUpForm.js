import React from "react";

import classes from "./SignUpForm.module.css";

function SignUpForm() {
  return (
    <form className={classes.form}>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" placeholder="email@company.com" />
      <button>Subcribe to monthly newsletter</button>
    </form>
  );
}

export default SignUpForm;
