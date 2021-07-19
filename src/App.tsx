import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [signValue, setSignValue] = useState("");
  const [result, setResult] = useState("");
  const calculate = (first: number, second: number, signValue: string) => {
    if (signValue === "") return;
    if (signValue === "+") return setResult((first + second).toString());
    if (signValue === "-") return setResult((first - second).toString());
  };
  const passInputHandler = (inputData: any) => {
    if (inputData.type === "=" && firstValue !== "" && secondValue !== "") {
      let first: number = parseInt(firstValue);
      let second: number = parseInt(secondValue);
      calculate(first, second, signValue);
      return;
    }
    if (firstValue === "" && signValue === "") {
      setFirstValue(inputData.value);
      setSignValue(inputData.type);
      return;
    }
    setSecondValue(inputData.value);
    if (inputData.type !== "=") setSignValue(inputData.type);
  };
  const clearHandler = () => {
    setFirstValue("");
    setSecondValue("");
    setSignValue("");
    setResult("");
  };
  return (
    <React.Fragment>
      <Calculator passInput={passInputHandler} />
      <p>
        {firstValue} {signValue} {secondValue}
      </p>
      <p>Result: {result}</p>
      <button onClick={clearHandler}>Clear</button>
    </React.Fragment>
  );
}

export default App;
