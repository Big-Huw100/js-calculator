const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

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

// CHALLENGE: Populate all three of those variables so that they have values typed in
//            by the user. When you can console.log() all three values.. We'll move on :) 

// left number - When a number is pressed, populate the "leftNumber" variable with the value. 
//               But! ONLY if the "operator" has no value.

// Operator - When an operator button is pressed, populate the "operator" variable with the value.

// Right number - Only populate the right number if the leftNUmber and operator have a value 


// RULE: Don't alter any .innerHTML for this first step. We'll do it later :) 