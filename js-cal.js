const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll("button");


// This is how I get numbers and operators to display in the screen (but I hate it)
function displayButton() {
    const num = document.createElement("p");

    const node = document.createTextNode(event.target.value);

    num.appendChild(node)

    document.getElementById("screen").appendChild(num);
};
    


// Challenge: put the operator as well as multiple numbers


// Challenge: put the RIGHT numbers on the screen


// CALCULATE!!!!