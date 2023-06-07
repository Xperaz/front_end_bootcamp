/* calculation logic */
let runningTotal = 0;
let buffer = "0";
let previousOperator = "0";

const screen = document.querySelector(".screen");

function flushOperation(intBuffer)
{
    if (previousOperator === '+'){
        runningTotal += intBuffer;
    }else if (previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if (previousOperator === '×'){
        runningTotal *= intBuffer;
    }else if (previousOperator === '÷'){
        if (intBuffer === 0){
            runningTotal = NaN;
            return;
        }
        runningTotal /= intBuffer;
    }
}


function handleMath(symbol){
    if (buffer === "0")
    return;
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}

function handleSymbol(symbol) {
    switch(symbol){
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
        case '=':
            if (previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length == 1){
                buffer = "0";
            }else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}
                    
function buttonCLick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function (event) {
    buttonCLick(event.target.innerText);
  });
}

init();