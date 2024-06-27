import React, { useState } from "react";
import Result from "./Result";
import Keypad from "./Keypad";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");

  const handleCalculate = (button: string) => {
    switch (button) {
      case "AC":
        setCalculation("");
        break;
      case "C":
        setCalculation(calculation.slice(0, -1));
        break;
      case "=":
        calculate();
        break;
      default:
        setCalculation(calculation + button);
        break;
    }
  };
  const calculate = () => {
    try {
      setCalculation(eval(calculation));
    } catch (e) {
      setCalculation("Error");
    }
  };
  return (
    <div className="calculator">
      <Result result={calculation} />
      <Keypad onButtonClick={handleCalculate} />
    </div>
  );
};

export default Calculator;
