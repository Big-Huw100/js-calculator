const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const allClearButton  = document.querySelector(".allClear");

let leftNumber = "";
let operator = "";
let rightNumber = "";



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

// All clear button - return the variables to blank strings

allClearButton.addEventListener("click", (event) => {
    leftNumber = "";
    operator = "";
    rightNumber = "";
    console.log(leftNumber, operator, rightNumber);
});