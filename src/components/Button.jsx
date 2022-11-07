import React from "react";
import { useCalc } from "../context/calcContext";

const Button = ({ value }) => {
  const { setCalc, calc, reset, calculate } = useCalc();

  const handleSyles = (name) => {
    const cn =
      name === "="
        ? "equals"
        : ["+", "-", "X", "/"].includes(name)
        ? "opt"
        : "";

    return cn;
  };

  const commaClick = () => {
    setCalc({
      ...calc,
      number: String(calc.number).includes(".")
        ? calc.number
        : calc.number + value,
    });
  };

  const handleValue = () => {
    setCalc({
      ...calc,
      number: calc.number === 0 ? value : Number(String(calc.number) + value),
    });
  };

  const handleSign = () => {
    calc.sign
      ? setCalc({
          sign: value,
          result: calc.number ? calculate() : calc.result,
          number: 0,
        })
      : setCalc({
          sign: value,
          result: !calc.result && calc.number ? calc.number : calc.result,
          number: 0,
        });
  };

  const equalsClick = () => {
    setCalc({
      result: calculate(),
      sign: "",
      number: 0,
    });
  };

  const eraseClick = () => {
    setCalc({
      ...calc,
      result: calc.number
        ? calc.result
        : Number(calc.result.toString().slice(0, -1)),
      number: calc.number
        ? Number(calc.number.toString().slice(0, -1))
        : calc.number,
    });
  };

  const handleClick = () => {
    const results = {
      ".": commaClick,
      C: reset,
      "+": handleSign,
      "-": handleSign,
      X: handleSign,
      "/": handleSign,
      "=": equalsClick,
      "+-": eraseClick,
    };

    return results[value] ? results[value]() : handleValue();
  };

  return (
    <div className={`${handleSyles(value)} btn`} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Button;
