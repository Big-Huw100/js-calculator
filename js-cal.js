const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");

function displayNumber() {
    const num = document.createElement("p");

    const node = document.createTextNode(event.target.value);

    num.appendChild(node)

    document.getElementById("screen").appendChild(num);
};
    
    // Challenge: put the operator as well as multiple numbers

    // Challenge: put the RIGHT numbers on the screen

    // CALCULATE!!!!