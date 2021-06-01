let runningTotal = 0; // Resultado final
let buffer = "0"; //valor memoria
let previousOperator; //
const screen = document.querySelector(".calc-screen");

//Detectar disparo evento
function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();

//Muestra caracter pantalla
function rerender() {
  screen.innerText = buffer;
}

// Detectar si es numero o simbolo
function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

//Elegir Operacion Matematica
function handleMath(value) {
  if (buffer==="0"){ return;}

  const numberBuffer = parseInt(buffer)
  
  if (runningTotal === 0) {
    runningTotal = numberBuffer;
  } else{
    handleOperation(numberBuffer);
  }
  previousOperator = value;
  buffer ="0";

}

//Operacion Matematica
function handleOperation(number) {
  switch (previousOperator) {
    case "+":
      runningTotal += number;
      break;
    case "-":
      runningTotal -= number;
      break;  
    case "*":
      runningTotal *= numberr;
      break;
    case "&#247;":
      runningTotal /=number;
      break;
    default:
      console.log("Incorrect operation");
      break;
  }
  
}



//Si es simbolo
function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;

    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "=":
      if (previousOperator === null) {return;}
      handleOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;

    case "+":
    case "-":
    case "*":
    case "&#247;":
      handleMath(value);
      break;

    default:
      break;
  }
}

//Si es numero
function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}