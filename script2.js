//Global Variables

var displayArray = [];
var symbols = ['+', "-", "/", "x"]

let a = 0;
let b = 0;
const tempB = [];
var tempOperator = [];
var solution = 0;
var operatorValue = '';

//Function to check the location of the operator in the string

function checkOperator() {
if (displayArray[0] == '-'){
    var displayArray2 = [];
    displayArray2 = displayArray.slice(1)
    var containAll = symbols.some(item => {
        index = displayArray2.indexOf(item);
        return containAll = displayArray2.indexOf(item) !== -1;
    });
} else {

    var containAll = symbols.some(item => {
    index = displayArray.indexOf(item);
    return containAll = displayArray.indexOf(item) !== -1;
});
}
}

//Function to trigger the CSS to fire an animation when an operator is clicked. Adds to the current click, removes all others

highlightAction();

function highlightAction() {
    const button = document.getElementsByClassName('action');
    for (let i = 0; i<button.length; i++) {
        button[i].addEventListener('click', function() {
            for( let x = 0; x<button.length; x++) {
                button[x].classList.remove('highlight');
            }
            button[i].classList.add('highlight');
        })
    }
}

//Function to trigger a quick flash when a button is clicked in the CSS

numberFlash();

function numberFlash() {
    const button = document.getElementsByClassName('number');
    for (let i = 0; i<button.length; i++) {
        button[i].addEventListener('click', function() {
            button[i].classList.add('numberHighlight');
            setTimeout(() => button[i].classList.remove('numberHighlight'),400);
        })
    }
}

//Function to trigger CSS to get the equal button to flash when it is clicked

clearEqual();

function clearEqual() {
    const button = document.getElementById('equals');
    button.addEventListener('click', function() {
        button.setAttribute('id', 'equalAction');
        setTimeout(() => button.setAttribute('id','equals'),400);
})
}

//Function to trigger CSS to get the clear button to flash when it is clicked

clearFlash();

function clearFlash() {
    const button = document.getElementById('clear');
        button.addEventListener('click', function() {
            const buttonAction = document.getElementsByClassName('action');
                            for( let x = 0; x<buttonAction.length; x++) {
                                buttonAction[x].classList.remove('highlight');
                            }
            
            button.classList.add('clearHighlight');
            setTimeout(() => button.classList.remove('clearHighlight'),400);
        })
    }

//Function to get the whole calculator to clear on click

function clear() {
    const button = document.getElementById("clear");
    button.addEventListener('click', function() {
        displayArray = [];
        resetValues();
        const display = document.getElementById("displayCase");
        display.textContent = "0";
    })

}

clear();

addNumbersA();

//Function to add numbers, sets the b value ongoing by putting them in an array. a values are only added if they are missing (i.e. start with an operator)
//function also triggers the equal button when clicked, including catches for some errors such as a = NaN.

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
                b = parseFloat(b);
                const equalButton = document.getElementById("equals");
                    equalButton.addEventListener("click", function() {
                            if (a == 0) {
                                a = 0;
                                operatorValue = displayArray.at(-1);
                                checkOperator(displayArray);
                                b = displayArray.slice(index + 1,displayArray.length);
                                b = b.join('');
                                b = parseFloat(b);
                                selectOperator(operatorValue);
                                return;
                            } else if (a<0 && b <0 && operatorValue == '-') {
                                doubleSubtract(a,b)
                                return;
                            } else if (isNaN(a) == true) {
                                a = 0;
                                operatorValue = displayArray.at(0);
                                b = displayArray.slice(1,displayArray.length);
                                b = b.join('');
                                b = parseFloat(b);
                                selectOperator(operatorValue);
                            } else {
                            selectOperator(operatorValue);
                            const buttonAction = document.getElementsByClassName('action');

                            for( let x = 0; x<buttonAction.length; x++) {
                                buttonAction[x].classList.remove('highlight');
                            }
                            return;
                        }
                        })
                return;
        });
    };
};

addOperators();

//Function to add the operator to the array. When an operator is selected. The a value is set by splicing the array. 
//B values continue to be added as more numbers are clicked
//If a and b values are present, and another operator is clicked, it does the math, and sets the most recent operator as the new operator. 
//A value is set as the solution in below math functions. 

function addOperators() {
    const button = document.getElementsByClassName("action");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            if (a>0 && b>0) {
                tempOperator.pop();
                tempOperator.push(button[i].textContent);
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
            a = parseFloat(a);
            if ( isNaN(a) == true) {
                a = 0;
                a = displayArray.slice(0,-1);
                a = a.join('');
                a = parseFloat(a);
            }
            operatorValue = displayArray.at(-1);
        })
    }
}

//Function to identify what math should be done based on the operator. This function only works if another operator was chosen instead of the equal sign. 

function selectOperatorTwo(stringop) {
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

//Function to identify what math should be done when the equal sign is clicked. 

function selectOperator(operatorValue) {
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


//Convert array to nubmer
let toArray = num => Number(num);


//reset values
function resetValues() {
    a = 0;
    b = 0;
}

//Addition function, also resets the display array, a, and b values
function add(a,b){
    displayArray = [];
    solution = a + b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    return;
}
//Subtract function, also resets the display array, a, and b values
function subtract(a,b){
    const solution = a - b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}
//Function uses + instead of -, only is triggered through an if statemnet in the addnumbers function. If b value is -.
function doubleSubtract (a,b) {
    const solution = a + b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}
//Division function, also resets the display array, a, and b values
function divide(a,b){
    const solution = a / b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}
//Multiplication function, also resets the display array, a, and b values
function multiply(a,b){
    const solution = a * b;
    const display = document.getElementById("displayCase");
    display.textContent = solution;
    resetValues(a,b);
    displayArray = [];
    return;
}

//resets b values
function resetB() {
    b = 0;
}

//converts a variable to the solution
function solutionA(solution) {
    a = solution
}

//Addition function to be run if another operator is selected instead of the equal sign.
//Takes the second operator and stores it, runs the math, and resets the array as the solution with the second operator applied. Resets b value
function addTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    solution = a + b;
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


//Subtraction function to be run if another operator is selected instead of the equal sign.
//Takes the second operator and stores it, runs the math, and resets the array as the solution with the second operator applied. Resets b value
function subtractTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    const solution = a - b;
    a = solution;
    const display = document.getElementById("displayCase");
    display.textContent = solution + stringop;
    displayArray = [];
    displayArray.push(solution);
    displayArray.push(stringop);
    operatorValue = displayArray.at(-1);
    solutionA(a);
    resetB(b);
    addOperators(a,displayArray);
}

//Division function to be run if another operator is selected instead of the equal sign.
//Takes the second operator and stores it, runs the math, and resets the array as the solution with the second operator applied. Resets b value
function divideTwo(a,b,stringop){
    stringop = tempOperator;
    stringop = stringop.join('');
    const solution = a / b;
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

//Multiplication function to be run if another operator is selected instead of the equal sign.
//Takes the second operator and stores it, runs the math, and resets the array as the solution with the second operator applied. Resets b value
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