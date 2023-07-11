import React from "react";
import SignUpUpdateList from "./SignUpUpdateList";
import SignUpForm from "./SignUpForm";

import classes from "./SignUpInfo.module.css";

function SignUpInfo({ onSignUpSuccess }) {
  const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <section className={classes.section}>
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <SignUpUpdateList items={items} />
      <SignUpForm onSignUpSuccess={onSignUpSuccess} />
    </section>
  );
}
export default SignUpInfo;
