const hourE1 = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");

const acE1 = document.querySelector(".ac");
const pmE1 = document.querySelector(".pm");
const percentE1 = document.querySelector(".percent");

const additionE1 = document.querySelector(".addition");
const subtractionE1 = document.querySelector(".subtraction");
const multiplicationE1 = document.querySelector(".multiplication");
const divisonE1 = document.querySelector(".division");
const equalE1 = document.querySelector(".equal");

const decimalE1 = document.querySelector(".decimal");
const number0E1 = document.querySelector(".number-0");
const number1E1 = document.querySelector(".number-1");
const number2E1 = document.querySelector(".number-2");
const number3E1 = document.querySelector(".number-3");
const number4E1 = document.querySelector(".number-4");
const number5E1 = document.querySelector(".number-5");
const number6E1 = document.querySelector(".number-6");
const number7E1 = document.querySelector(".number-7");
const number8E1 = document.querySelector(".number-8");
const number9E1 = document.querySelector(".number-9");
const numberE1Array = [
  number0E1,
  number1E1,
  number2E1,
  number3E1,
  number4E1,
  number5E1,
  number6E1,
  number7E1,
  number8E1,
  number9E1,
];

//! Variables

let valueStrInMemory = null;
let operatorInMemory = null;

//! Functions

const getValueAsStr = () => valueE1.textContent.split(",").join("");

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    valueEl.textContent += ".";
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === "substraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue("0");
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue("0");
};

//! Add Event Listeners to Functions
acE1: addEventListener("click", () => {
  setStrAsValue("0");
  valueStrInMemory = null;
  operatorInMemory = null;
});

pmE1.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "-0") {
    setStrAsValue("0");
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue("-" + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});

percentE1.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});
