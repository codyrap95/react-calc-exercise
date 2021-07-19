import React, { useRef } from "react";
import classes from "./Calculator.module.css";

export default function Calculator() {
  const inputRef = useRef<HTMLInputElement>(null);
  const plusHandler = () => {};
  const minusHandler = () => {};
  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(inputRef.current?.value);
  };
  return (
    <form onSubmit={submitHandler} className={classes.calculatorWrapper}>
      <label htmlFor="calculator-input">Type Here:</label>
      <input
        type="number"
        name="calculator-input"
        id="calculator-input"
        min={0}
        ref={inputRef}
      />
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      <button type="submit">=</button>
    </form>
  );
}
