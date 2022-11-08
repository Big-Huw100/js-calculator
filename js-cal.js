const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");

    // When I press ANY number, that number should show on the screen
    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            screen.innerHTML = event.target.value;
        });
    });
    

    // Challenge: put LEFT multiple numbers on the screen
    
    // Challenge: put the operator as well as multiple numbers

    // Challenge: put the RIGHT numbers on the screen

    // CALCULATE!!!!