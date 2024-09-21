
// Get references to HTML elements
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('#buttons button');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operation = null;

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Handle numbers
    if (!isNaN(buttonText) || buttonText === '.') {
      currentNumber += buttonText;
      screen.textContent = currentNumber;
    }

    // Handle operators
    if (['+', '-', '*', '/'].includes(buttonText)) {
      previousNumber = currentNumber;
      currentNumber = '';
      operation = buttonText;
    }

    // Handle equals
    if (buttonText === '=') {
      calculateResult();
    }
  });
});

// Calculate result
function calculateResult() {
  if (previousNumber && currentNumber && operation) {
    const result = eval(`${previousNumber} ${operation} ${currentNumber}`);
    screen.textContent = result;
    previousNumber = '';
    currentNumber = result.toString();
  }
}
