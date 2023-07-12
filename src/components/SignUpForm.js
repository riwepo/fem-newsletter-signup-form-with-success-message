import React from "react";
import { useState } from "react";

import Button from "./UI/Button";

import classes from "./SignUpForm.module.css";

function SignUpForm({ onSignUpSuccess }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  const emailInputChangeHandler = (event) => {
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
    onSignUpSuccess(enteredEmail);
    setEnteredEmail("");
  };

  const emailHasError = enteredEmailIsTouched && !enteredEmailIsValid;
  const submitDisabled = !enteredEmailIsTouched || !enteredEmailIsValid;
  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
      <div className={classes.labels}>
        <label htmlFor="email">Email Address</label>
        {emailHasError && (
          <label htmlFor="email" className={classes.invalid}>
            Valid email required
          </label>
        )}
      </div>
      <input
        className={`${emailHasError ? classes.invalid : ""}`}
        type="text"
        id="email"
        placeholder="email@company.com"
        onChange={emailInputChangeHandler}
        value={enteredEmail}
      />
      <Button
        content="Subcribe to monthly newsletter"
        isDisabled={submitDisabled}
      />
    </form>
  );
}

export default SignUpForm;
