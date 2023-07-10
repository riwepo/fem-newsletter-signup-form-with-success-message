import React from "react";
import SignUpImg from "./components/SignUpImg";
import SignUpInfo from "./components/SignUpInfo";
import SignUpCard from "./components/SignUpCard";

function App() {
  return (
    <div className="App">
      <SignUpCard>
        <SignUpImg />
        <SignUpInfo />
      </SignUpCard>
    </div>
  );
}

export default App;
