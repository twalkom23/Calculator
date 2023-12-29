let one = '1';
let two = '2';
let three = '3';
let four = '4';
let five = '5'; 
let six = '6';
let seven = '7';
let eight = '8';
let nine = '9';
let decimal = '.';
let addition = '+'; 
let times = '*';
let minus = '-';
let division = '/';
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

let test = operate('3.55 + 44');







