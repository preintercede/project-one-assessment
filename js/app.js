let answer = 0;

const userInput = document.getElementById("input-number");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const calculation = document.getElementById("current-calculation");

function start() {
  userInput.value = 1;
  isNegative();
}

function add() {
  answer = answer + parseInt(userInput.value);
  calculation.textContent = answer;
  if (calculation.textContent < 0) {
    calculation.style.color = "red";
  } else {
    calculation.style.color = "black";
  }
}

function subtract() {
  answer = answer - parseInt(userInput.value);
  calculation.textContent = answer;
  if (calculation.textContent < 0) {
    calculation.style.color = "red";
  } else {
    calculation.style.color = "black";
  }
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
