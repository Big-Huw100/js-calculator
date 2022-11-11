// Grabbed my buttons

const screen = document.querySelector(".screen")
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const allClearButton  = document.querySelector(".allClear");
const equalsButton = document.querySelector(".equals");

// Made empty variables
let leftNumber = "";
let operator = "";
let rightNumber = "";
let answerNumber = "";

// Number buttons linked to screen
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", (event) => {
        if (!operator) {
            leftNumber = leftNumber += event.target.value;
        } else {
            rightNumber = rightNumber += event.target.value;
        };
        screen.innerHTML = leftNumber + operator + rightNumber;
    });
});

// operator buttons linked to screen
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (event) => {
        operator = event.target.value;
        screen.innerHTML = leftNumber + operator + rightNumber;
    });
});

// all clear function to remove an entire sum
allClearButton.addEventListener("click", () => {
    leftNumber = "";
    operator = "";
    rightNumber = "";
    screen.innerHTML = leftNumber + operator + rightNumber;
});

// equals button that calculates sum inputted
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
    screen.innerHTML = answerNumber;
});