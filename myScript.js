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
let buttonClickString = '';
let finalAnswer ;

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

function rounded(number) {
    return Math.round(number * 100) / 100;
}

//function taking the input from the buttons and then running the equation
function operate(equation) {
let arrayEquation = equation.split(' ');
console.log(arrayEquation);
let checkFirst = arrayEquation[0];
      //checking to make sure either the last or first values in the equation are operators and then removing them if so
      while (arrayEquation[0] === ''){
        //checks if its a minus statement and makes the following number a negative
        if (arrayEquation[1] === '-' && arrayEquation[2] !== ''){
            arrayEquation[0] = '0';
        }
        else {
            arrayEquation.splice(0, 2);
        }
    }   
  

     //spliting the string in to an array
    num1 = arrayEquation[0];
    operator = arrayEquation[1];
    num2 = arrayEquation[2];
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    
    //This will run through the equation until it is down to a single answer
        let x ;
        while (arrayEquation.length !== 1){
            num1 = arrayEquation[0];
            operator = arrayEquation[1];
            num2 = arrayEquation[2];
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            if (operator === '+') {
                x = rounded(add(num1, num2));
                arrayEquation.splice(0, 3, x);
            }
            else if (operator === '-') {
                x = rounded(subtract(num1, num2));
                arrayEquation.splice(0, 3, x);
            }
            else if (operator === '*') {
                x = rounded(multiply(num1, num2));
                arrayEquation.splice(0, 3, x);
            }
            else {
                x = rounded(divide(num1, num2));
                arrayEquation.splice(0, 3, x);
            }
        }
        return arrayEquation;
        
    }




//This function will perform actions when buttons are clicked
function calculatorInput() {
    let buttonClickString = '';
    let finalAnswer ;
    const equationLog = document.querySelector('.inputDisplay');
    const answerLog = document.querySelector('.answer');

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
    const multiplyClick = document.querySelector('#multiply');
    const minusClick = document.querySelector('#minus');
    const plusClick = document.querySelector('#plus');
    const equalClick = document.querySelector('#equal');
    const clearClick = document.querySelector('#clear');
   
    
    
    oneClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + one;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    twoClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + two;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    threeClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + three;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    fourClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + four;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    fiveClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + five;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })      
    sixClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + six;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    sevenClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + seven;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    eightClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + eight;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    nineClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + nine;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    zeroClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + zero;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    decimalClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + decimal;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    divideClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + division;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    multiplyClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + times;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
        
    })
    minusClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + minus;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    plusClick.addEventListener('click', () => {
        buttonClickString = buttonClickString + addition;
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (buttonClickString);
        equationLog.appendChild(content);
    })
    equalClick.addEventListener('click', () => {
        finalAnswer = operate(buttonClickString);
        answerLog.innerHTML = "";
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = (finalAnswer);
        answerLog.appendChild(content);
        
    })
    clearClick.addEventListener('click', () => {
        buttonClickString = '';
        equationLog.innerHTML = "";
        answerLog.innerHTML = "";
     })

}

calculatorInput();