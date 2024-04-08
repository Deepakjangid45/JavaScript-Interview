// Variables to store the current expression and result
let expression = "";
let result = 0;

function appendNumber(number) {
  expression += number;
  document.getElementById("result").value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById("result").value = expression;
}

function clearInput() {
  expression = "";
  result = 0;
  document.getElementById("result").value = "0";
}

function calculate() {
  try {
    result = eval(expression); // Use eval for simple calculations, but be cautious in real-world applications
    document.getElementById("result").value = result;
    expression = result.toString(); // Update expression for further calculations
  } catch (error) {
    alert("Invalid expression");
    clearInput();
  }
}