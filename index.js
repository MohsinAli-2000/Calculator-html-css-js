// Get the input element
let input = document.querySelector(".input");

// Function to clear the input field
function clearInput() {
    input.value = "";
}

// Function to evaluate the expression
function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
}

// Add event listeners to the calculator buttons
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        switch (buttonValue) {
            case "C":
                clearInput();
                break;
            case "=":
                calculate();
                break;
            default:
                input.value += buttonValue;
                break;
        }
    });
});
