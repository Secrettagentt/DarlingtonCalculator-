const buttons = document.querySelectorAll('button'),
  screen = document.querySelector("#screen"),
  results = document.querySelector("#results");
  brand = document.querySelector("#brand");

let previousNumber = "";
let currentNumber = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    if (!isNaN(button.textContent) ||button.textContent === '.') {
      currentNumber += button.textContent;
      screen.textContent = `${previousNumber} ${operator} ${currentNumber}`;
      }
    
    if (["+","-","*","/"].includes(button.textContent)) {
      previousNumber = currentNumber;
      currentNumber = "";
      operator = button.textContent;
    }

    if (button.textContent === '=') {
      calculateresult();
      
    }
    
    if (button.textContent === 'DEl') {
      if(currentNumber!==""){
        currentNumber = currentNumber.slice(0,-1);
        screen.textContent = currentNumber;
      }
    }
    
    
    
    
    if (button.textContent === 'C') {
      previousNumber = "";
      currentNumber = "";
      operator = "";
      answer = "";
      screen.textContent ="";
      results.textContent ="";
      brand.style.backgroundColor = 'black';
    }
    
   
if (button.textContent === '%') {
  if (currentNumber !== "" && !isNaN(parseFloat(currentNumber))) {
    if (operator === '+') {
      currentNumber = (parseFloat(previousNumber) + (parseFloat(previousNumber) * parseFloat(currentNumber) / 100)).toString();
    } else if (operator === '-') {
      currentNumber = (parseFloat(previousNumber) - (parseFloat(previousNumber) * parseFloat(currentNumber) / 100)).toString();
    } else if (operator === '*') {
      currentNumber = (parseFloat(previousNumber) * parseFloat(currentNumber) / 100).toString();
    } else if (operator === '/') {
      if (currentNumber !== "0") {
        currentNumber = (parseFloat(previousNumber) / (parseFloat(currentNumber) / 100)).toString();
      } else {
        console.error("Division by zero");
        results.textContent = "Error";
      }
    } else {
      currentNumber = (parseFloat(currentNumber) / 100).toString();
    }
    screen.textContent = currentNumber;
  } else {
    console.error("Invalid input");
    results.textContent = "Error";
  }
}


    
  })
function calculateresult() {
  try {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    
    let answer;
    switch(operator){
      case "+":
        answer = previousNumber + currentNumber
        break;
      case "-":
        answer = previousNumber - currentNumber
        break;
      case "*":
        answer = previousNumber * currentNumber
        break;
      case "/":
        answer = previousNumber / currentNumber
        break;
      default:
        throw new Error("Invalid operator")
    }
      
    
    results.textContent = answer;
    screen.textContent = "";
    previousNumber = "";
    currentNumber = answer.toString();
    brand.style.backgroundColor = 'green';
  } catch (error) {
    console.error('Error:', error);
    results.textContent = 'Error';
    screen.textContent = "";
    brand.style.backgroundColor = 'red';
    let errortimeout;
    errortimeout = setInterval(()=>{
      brand.style.backgroundColor = 'initial';
    },3000);
  }
}
  
  });
  



