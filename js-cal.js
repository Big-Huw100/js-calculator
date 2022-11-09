const screen = document.querySelector("#screen");
const numberButtons = document.querySelectorAll("button");


// This is how I get numbers and operators to display in the screen (but I hate it)
function displayButton() {
    const num = document.createElement("p");

    const node = document.createTextNode(event.target.value);

    num.appendChild(node);

    document.getElementById("screen").appendChild(num);
};

// Delete most recent input
function backSpace() {
    screen.removeChild(screen.lastElementChild);
};

// All Clear!
function allClear() {
while (screen.hasChildNodes()) {
    screen.removeChild(screen.firstChild);
};
};


// CALCULATE!!!!