const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const allClearButton  = document.querySelector(".allClear");
const equalsButton = document.querySelector(".equals");

let leftNumber = "";
let operator = "";
let rightNumber = "";
let answerNumber = "";

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", (event) => {
        if (!operator) {
            leftNumber = leftNumber += event.target.value;
        } else {
            rightNumber = rightNumber += event.target.value;
        };
        console.log(leftNumber, operator, rightNumber);
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (event) => {
        operator = event.target.value;
        console.log(leftNumber, operator, rightNumber);
    });
});

allClearButton.addEventListener("click", () => {
    leftNumber = "";
    operator = "";
    rightNumber = "";
    console.log(leftNumber, operator, rightNumber);
});

equalsButton.addEventListener("click", () => {
    if (operator === "+") {
        answerNumber = parseInt(leftNumber) + parseInt(rightNumber);
    } else if (operator === "-") {
        answerNumber = parseInt(leftNumber) - parseInt(rightNumber);
    } else if (operator === "x") {
        answerNumber = parseInt(leftNumber) * parseInt(rightNumber);
    } else if (operator === "/") {
        answerNumber = parseInt(leftNumber) / parseInt(rightNumber);
    };
    console.log(answerNumber);
});