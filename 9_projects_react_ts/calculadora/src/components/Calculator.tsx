import { useState } from "react";

type Operation = "oneNumber" | "twoNumbers";

interface CalculatorButton {
  item: string;
  isOperator: boolean;
}

type Operator = "/" | "*" | "+" | "-" | "";

const Calculator = () => {
  const [history, setHistory] = useState<string>("");
  const [calculoUser, setCalculoUser] = useState<string>("0");
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<Operator>("");
  const buttons: CalculatorButton[] = [
    { item: "AC", isOperator: true },
    { item: "1", isOperator: false },
    { item: "2", isOperator: false },
    { item: "3", isOperator: false },
    { item: "4", isOperator: false },
    { item: "5", isOperator: false },
    { item: "6", isOperator: false },
    { item: "7", isOperator: false },
    { item: "8", isOperator: false },
    { item: "9", isOperator: false },
    { item: "0", isOperator: false },
    { item: "+", isOperator: true },
    { item: "-", isOperator: true },
    { item: "*", isOperator: true },
    { item: "/", isOperator: true },
    { item: "=", isOperator: true },
  ];
  const classKey =
    "bg-[#3E3E3E] text-white rounded-full h-14 w-full uppercase cursor-pointer transition-colors duration-300 hover:bg-[#a8a8a8]";
  const classResp = "flex flex-col items-end justify-end pb-4";
  const handleCalculo = (operation: Operation): void => {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    setFirstValue("");
    setSecondValue("");
    let calculated: number;
    const value: number =
      operation === "oneNumber" ? firstNumber : secondNumber;
    switch (operator) {
      case "+": {
        calculated = firstNumber + value;
        break;
      }
      case "-": {
        calculated = firstNumber - value;
        break;
      }
      case "*": {
        calculated = firstNumber * value;
        break;
      }
      case "/": {
        calculated = firstNumber / value;
        break;
      }
      default:
        return;
    }
    setCalculoUser(`${!Number.isFinite(calculated) ? 0 : calculated}`);
    setHistory(`${firstValue} ${operator} ${value} =`);
    setFirstValue(`${!Number.isFinite(calculated) ? 0 : calculated}`);
  };
  const clearCalculator = (): void => {
    setHistory("");
    setCalculoUser("0");
    setFirstValue("");
    setSecondValue("");
    setOperator("");
  };
  const handleBtnClick = (item: string): void => {
    const itemNumber = Number(item);
    if (!Number.isNaN(itemNumber)) {
      setCalculoUser((prev: string) => {
        if (prev === "0") return item;
        return `${prev}${item}`;
      });
      if (operator === "") setFirstValue((prev: string) => `${prev}${item}`);
      else setSecondValue((prev: string) => `${prev}${item}`);
    } else {
      if (item === "AC") clearCalculator();
      else if (item === "=") {
        if (secondValue === "") handleCalculo("oneNumber");
        else handleCalculo("twoNumbers");
      } else {
        setHistory(`${firstValue} ${item} ${secondValue}`);
        setOperator(item as Operator);
        setCalculoUser("0");
      }
    }
  };
  return (
    <div className="flex flex-col justify-end gap-2 mx-auto mt-40 w-full max-w-70 border border-gray-500 bg-black rounded-xl p-4 h-120">
      <div className={classResp}>
        <span className="text-md text-[#fafafa8d]">{history}</span>
        <span className="text-5xl text-white">{calculoUser}</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((button: CalculatorButton) => (
          <button
            onClick={() => handleBtnClick(button.item)}
            key={button.item}
            className={`${classKey} ${button.isOperator ? "bg-orange-400" : ""}`}
          >
            {button.item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
