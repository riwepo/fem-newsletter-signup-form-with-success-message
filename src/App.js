import React, { useState } from "react";
import SignUpCard from "./components/SignUpCard";
import Modals from "./components/modal/Modals";

function App() {
  const [signUpEmail, setSignUpEmail] = useState("");

  const signUpSuccessHandler = (email) => {
    setSignUpEmail(email);
  };

  const dismissModalHandler = () => {
    setSignUpEmail("");
  };

  return (
    <div className="App">
      <SignUpCard onSignUpSuccess={signUpSuccessHandler} />
      {signUpEmail !== "" && (
        <Modals email={signUpEmail} onDismiss={dismissModalHandler} />
      )}
    </div>
  );
}

export default App;
