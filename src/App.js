import React, { useState } from "react";
import SignUpCard from "./components/SignUpCard";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [signUpEmail, setSignUpEmail] = useState("");

  const signUpSuccessHandler = (email) => {
    console.log("sign up success", email);
    setSignUpEmail(email);
  };

  return (
    <div className="App">
      <SignUpCard onSignUpSuccess={signUpSuccessHandler} />
      {signUpEmail !== "" && <SuccessModal email={signUpEmail} />}
    </div>
  );
}

export default App;
