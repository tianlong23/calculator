var displayArray = [];
var symbols = ['+', "-", "/", "x"]

let a = 0;
let b = 0;
const tempB = [];
var tempOperator = [];
var solution = 0;
var operatorValue = '';

function checkOperator() {
var containAll = symbols.some(item => {
    index = displayArray.indexOf(item);
    return containAll = displayArray.indexOf(item) !== -1;
});
console.log('contain all: '+ containAll)
}

addNumbersA();

function addNumbersA() {
    const button = document.getElementsByClassName("number");
    for (let i = 0; i< button.length; i++) {
        button[i].addEventListener('click', function() {
                const display = document.getElementById("displayCase");
                displayArray.push(button[i].textContent);
                displayArray.toString;
                display.textContent = displayArray.join('');
                checkOperator(displayArray);
                b = displayArray.slice(index + 1,displayArray.length);
                b = b.join('');
                b = parseInt(b);
                const equalButton = document.getElementById("equals");
                        equalButton.addEventListener("click", function() {
                            if (a == 0) {
                                return;
                            }
                            selectOperator(operatorValue);
                            return;
                        })
                return;
        });
    };
};

addOperators();

function addOperators() {
    const button = document.getElementsByClassName("action");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            if (a>0 && b>0) {
                console.log('tempoperator: '+ tempOperator)
                tempOperator.pop();
                tempOperator.push(button[i].textContent);
                console.log('temp operator: '+ tempOperator)

                console.log('if operatorvalue: '+ operatorValue)
                selectOperatorTwo(operatorValue);
                return ;
            } else if (displayArray.at(-1) == "+" || displayArray.at(-1) == "-" || displayArray.at(-1) == "/" || displayArray.at(-1) == "x" ) {
                displayArray.pop();
            }
            const display = document.getElementById("displayCase");
            displayArray.push(button[i].textContent)
            displayArray.toString;
            display.textContent = displayArray.join('');
            a = displayArray.slice(0,-1);
            a = a.join('');
            a = parseInt(a);
            console.log('post else if operatorvalue: '+ operatorValue)
            operatorValue = displayArray.at(-1);
        })
    }
}

function selectOperatorTwo(stringop) {
    console.log('switch2 stringop: '+ stringop)
    console.log('switch2 operatorvalue: '+ operatorValue)
    switch (stringop) {
        case "+":
            addTwo(a,b, stringop)
            break;
        case "-":
            subtractTwo(a,b, stringop)
            break;
        case "/":
            divideTwo(a,b, stringop)
            break;
        case "x":
            multiplyTwo(a,b, stringop)
            break;    
    }
}

function selectOperator(operatorValue) {
    console.log('switch1 operatorvalue: '+ operatorValue)
    switch (operatorValue) {
        case "+":
            add(a,b)
            break;
        case "-":
            subtract(a,b)
            break;
        case "/":
            divide(a,b)
            break;
        case "x":
            multiply(a,b)
            break;    
    }
}



let toArray = num => Number(num);

function resetValues() {
    a = 0;
    b = 0;
}

function add(a,b){
    displayArray = [];
    solution = a + b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    return;
}

function subtract(a,b){
    const solution = a - b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}

function divide(a,b){
    const solution = a / b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}

function multiply(a,b){
    const solution = a * b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}


function resetB() {
    b = 0;
}

function solutionA(solution) {
    a = solution
}


function addTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    console.log('add2 , 1stringop: '+ stringop)
    console.log('add2 , 1operatorvalue: '+ operatorValue)
    solution = a + b;
    a = solution;
    const display = document.getElementById("displayCase");
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray.push(solution);
    displayArray.push(stringop);
    console.log('displayarray: '+ displayArray);
    console.log('add2 , 2 stringop: '+ stringop)
    console.log('add2  , 2operatorvalue: '+ operatorValue)
    operatorValue = displayArray.at(-1);
    solutionA(a);
    resetB(b);
    addOperators(a);
}

function subtractTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    console.log('subtract2 , 1 stringop: '+ stringop)
    console.log('subtract2 , 1 operatorvalue: '+ operatorValue)
    const solution = a - b;
    a = solution;
    const display = document.getElementById("displayCase");
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray.push(solution);
    displayArray.push(stringop);
    console.log('subtract2 , 2 stringop: '+ stringop)
    console.log('subtract2 , 2 operatorvalue: '+ operatorValue)
    console.log('math displayarray: '+ displayArray)
    operatorValue = displayArray.at(-1);
    solutionA(a);
    resetB(b);
    addOperators(a,displayArray);
}

function divideTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    const solution = a / b;
    a = solution;
    const display = document.getElementById("displayCase");
    console.log('solution: '+ solution)
    console.log('typeof solution: '+ typeof solution)
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray.push(solution);
    displayArray.push(stringop);
    operatorValue = displayArray.at(-1);
    solutionA(a);
    resetB(b);
    addOperators(a);
}

function multiplyTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    const solution = a * b;
    a = solution;
    const display = document.getElementById("displayCase");
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray.push(solution);
    displayArray.push(stringop);
    operatorValue = displayArray.at(-1);
    solutionA(a);
    resetB(b);
    addOperators(a);
}