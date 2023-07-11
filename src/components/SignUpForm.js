import React from "react";
import { useState } from "react";

import classes from "./SignUpForm.module.css";

function SignUpForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  const emailInputBlurHandler = (event) => {
    console.log("blur");
    // note we need to use a local variable here
    // the state won't be updated instantly
    const enteredEmailLocal = event.target.value;
    setEnteredEmail(enteredEmailLocal);
    setEnteredEmailIsTouched(true);
    if (enteredEmailLocal.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (enteredEmailLocal.trim().indexOf("@") === -1) {
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredEmailIsValid(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
  };

  const emailHasError = enteredEmailIsTouched && !enteredEmailIsValid;
  const submitDisabled = !enteredEmailIsTouched || !enteredEmailIsValid;
  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
      <label htmlFor="email">Email Address</label>
      <input
        className={`${emailHasError ? classes.invalid : ""}`}
        type="text"
        id="email"
        placeholder="email@company.com"
        onBlur={emailInputBlurHandler}
      />
      <button disabled={submitDisabled}>Subcribe to monthly newsletter</button>
    </form>
  );
}

export default SignUpForm;
