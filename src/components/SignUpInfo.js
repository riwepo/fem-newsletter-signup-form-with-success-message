import React from "react";
import SignUpUpdateList from "./SignUpUpdateList";

function SignUpInfo() {
  const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <>
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>;
      <SignUpUpdateList items={items} />
    </>
  );
}
export default SignUpInfo;
