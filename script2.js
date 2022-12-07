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
    console.log('operator check: '+ displayArray)
    console.log('operator check type of: ' + typeof displayArray)
    index = displayArray.indexOf(item);
    console.log('index operator: '+ index)
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
                console.log('displayarray operator: '+ displayArray)
                console.log('a: here: '+ a)
                console.log('b: here: '+ b)
                checkOperator(displayArray);
                console.log('index: '+ index)
                b = displayArray.slice(index + 1,displayArray.length);
                b = b.join('');
                b = parseInt(b);
                console.log('displayArray: '+ displayArray);
                console.log('display b: '+ b)
                console.log('display a: '+ a);
                console.log('blah blah blah')
                const equalButton = document.getElementById("equals");
                        equalButton.addEventListener("click", function() {
                            if (a == 0) {
                                return;
                            }
                            console.log('hitshiohats pih ')
                            selectOperator(operatorValue);
                            return;
                        })
                return;
        });
    };
};

addOperators();

function addOperators() {
    console.log('b1: '+ b)
    const button = document.getElementsByClassName("action");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            console.log('b2: '+ b)
            if (a>0 && b>0) {
                console.log('b3: '+ b)
                tempOperator.push(button[i].textContent);
                var stringop = JSON.stringify(tempOperator)
                console.log(stringop)
                console.log('typeof stringop' + typeof stringop)
                console.log(tempOperator)
                console.log('typeof tempop: '+ typeof tempOperator)
                selectOperatorTwo(operatorValue, stringop);
                return;
            } else if (displayArray.at(-1) == "+" || displayArray.at(-1) == "-" || displayArray.at(-1) == "/" || displayArray.at(-1) == "x" ) {
                console.log('zheli: ' + displayArray.at(-1))
                displayArray.pop();
                console.log('else if: '+ displayArray)
                console.log('b4: '+ b)
            }
            const display = document.getElementById("displayCase");
            displayArray.push(button[i].textContent)
            console.log('b5: '+ b)
            console.log('after if: '+ displayArray);
            displayArray.toString;
            console.log('displayarray type: '+ typeof displayArray)
            display.textContent = displayArray.join('');
            a = displayArray.slice(0,-1);
            a = a.join('');
            a = parseInt(a);
            console.log('addops a : '+ a)
            console.log('b6: '+ b)
            operatorValue = displayArray.at(-1);
            console.log('operatorvalue type: '+ typeof operatorValue)
            console.log('operatorvalue: '+  operatorValue)
        })
    }
}

function selectOperatorTwo(stringop) {
    switch (operatorValue) {
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
    console.log('heere')
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

//if user clicks equals, then answer pops up, and when they start selecting numbers again, it deletes the array and starts all over
//if the user click another operator, then the solution should pop up with the new operator, and when they click new numbers should select the b values
//NEED TO create new math functions for the new operator click - HEREHEREHEREHERE!!!!!!!!!
//for old operator click, need to delete the array once it is shown in the display so when a new number is clicked it starts the array over - DONE

function add(a,b){
    console.log('math')
    displayArray = [];
    solution = a + b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    console.log(solution);
    console.log('displayArray add: '+ displayArray);
    return;
}

function subtract(a,b){
    console.log("a "+a)
    console.log("b "+b)
    const solution = a - b;
    console.log(solution);
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}

function divide(a,b){
    const solution = a / b;
    console.log(solution);
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}

function multiply(a,b){
    const solution = a * b;
    console.log(solution);
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
    console.log('solution: '+ solution);
    a = solution
}


function addTwo(a,b,stringop){
    solution = a + b;
    a = solution;
    //console.log('type of tempoper: '+ typeof tempOperator)
    //tempOperator.toString;
    //console.log('type of tempoper2: '+ typeof tempOperator)
    const display = document.getElementById("displayCase");
    //console.log('solution type: '+ typeof solution)
    //console.log('stringop type: '+ typeof stringop)
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray = Array.from(String(solution), toArray);
    displayArray.push(stringop);
    //console.log('displayArray math: '+ displayArray);
    solutionA(a);
    resetB(b);
    //console.log('b math: ' + b)
    addOperators(a);
}

function subtractTwo(a,b){
    console.log("a "+a)
    console.log("b "+b)
    const solution = a - b;
    console.log(solution);
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    displayArray = Array.from(String(solution), toArray);
}

function divideTwo(a,b){
    const solution = a / b;
    console.log(solution);
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    displayArray = Array.from(String(solution), toArray);
}

function multiplyTwo(a,b){
    const solution = a * b;
    console.log(solution);
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    displayArray = Array.from(String(solution), toArray);
}