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
let operater ;

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
    operater = arrayEquation[1];
    num2 = arrayEquation[2];
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
}

let test = operate('33 + 44');





