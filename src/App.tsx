import React from "react";
import SurpriseButton from "./SurpriseButton";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Get your Surprise by click the button!</h1>
      <SurpriseButton />
    </div>
  );
};

export default App;
