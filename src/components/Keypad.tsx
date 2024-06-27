import React from "react";
interface Props {
  onButtonClick: (button:string) => void;
}
const Keypad = ({onButtonClick}:Props) => {
  const calculatorButtons = [
    "(",
    ")",
    "C",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="buttons">
      {calculatorButtons.map((button) => (
        <button onClick={()=>{onButtonClick(button)}} key={button}>{button}</button>
      ))}
    </div>
  );
};

export default Keypad;
