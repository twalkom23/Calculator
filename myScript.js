let one = '1';
let two = '2';
let three = '3';
let four = '4';
let five = '5'; 
let six = '6';
let seven = '7';
let eight = '8';
let nine = '9';
let zero = '0';
let decimal = '.';
let addition = ' + '; 
let times = ' * ';
let minus = ' - ';
let division = ' / ';
let num1 ;
let num2 ;
let operator ;

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1/num2;
}

//function taking the input from the buttons and then running the equation
function operate(equation) {
    let arrayEquation = equation.split(' '); //spliting the string in to an array
    num1 = arrayEquation[0];
    operator = arrayEquation[1];
    num2 = arrayEquation[2];
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //below i will be using the operater variable to decide what equation function to run and then will return the result
    if (operator === '+') { return add(num1, num2); }
    else if (operator === '-') { return subtract(num1, num2); }
    else if (operator === '*') { return multiply(num1, num2); }
    else {return divide(num1, num2); }

}

//This function will perform actions when buttons are clicked
function calculatorInput() {
    let buttonClickString = ''; //string that numbers will be added to to be passed in to operate function

    const oneClick = document.querySelector('#one');
    const twoClick = document.querySelector('#two');
    const threeClick = document.querySelector('#three');
    const fourClick = document.querySelector('#four');
    const fiveClick = document.querySelector('#five');
    const sixClick = document.querySelector('#six');
    const sevenClick = document.querySelector('#seven');
    const eightClick = document.querySelector('#eight');
    const nineClick = document.querySelector('#nine');
    const zeroClick = document.querySelector('#zero');
    const decimalClick = document.querySelector('#decimal')
    const divideClick = document.querySelector('#divide');
    const clearClick = document.querySelector('#clear');
    const multiplyClick = document.querySelector('#multiply');
    const minusClick = document.querySelector('#minus');
    const plusClick = document.querySelector('#plus');
    const equalClick = document.querySelector('#equal');
    
    oneClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + one;
        
    })
    twoClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + two;
    })
    threeClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + three;
    })
    fourClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + four;
    })
    fiveClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + five;
    })      
    sixClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + six;
    })
    sevenClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + seven;
    })
    eightClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + eight;
    })
    nineClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + nine;
    })
    zeroClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + zero;
        
    })
    
    
}

calculatorInput();



