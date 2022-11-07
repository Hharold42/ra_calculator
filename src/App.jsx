import React from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import CalcProvider from "./context/calcContext";

const buttonVals = [
  ["C", "+-", "%", "/"],
  [9, 8, 7, "X"],
  [6, 5, 4, "-"],
  [3, 2, 1, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox values={buttonVals} />
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
