//Display variables
let n1 = null;
let op = null;
let n2 = null;


function add(a,b)
{
    return a+b;
}

function subtract(c,d)
{
    return c-d;
}

function multiply(e,f)
{
    return e*f;
}

function divide(g,h)
{
    if((g === 0 || h === 0))
    {
        return "error, cannot divide by ZERO";
    }
    else{
        return g/h;
    }
}

function operate(num1, operator, num2)
{

switch(operator)
{
    case '+':
        return add(num1,num2);
        break;
    
    case '-':
        return subtract(num1,num2);
        break;
        
    case '*':
        return multiply(num1,num2);
        break;
        
    case '/':
        return divide(num1,num2);
        break;    
}
}



console.log(add(5,2));
console.log(subtract(5,2));
console.log(multiply(5,2));
console.log(divide(5,2));
console.log(operate(5,'-',2));


////
//To access html elements
const body = document.body;
let numpad = document.querySelector(".numpad");

//Initializations
let rows = 4;
let columns = 4;

const buttons = [
                 "C", "/", "*", "+",
                 "7", "8", "9", "-",
                 "4", "5", "6", "=",
                 "1","2", "3", "0",
                 ];

const buttonNames = [
                 "C", "divide", "multiply","add",
                 "seven", "eight", "nine", "subtract",
                 "four", "five", "six", "equals",
                 "one", "two", "three", "zero",
];


let buttonCycle = 0;

/*
*/
const displayContainer = document.querySelector(".displayContainer");
const displayText = document.querySelector(".displayText");






function CreateNumpad(rows, columns)
{
    for(let j = 0; j<rows; j++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute('style', 'display:flex; gap:5px;');

        for(let i = 0; i < columns; i ++)
        {
            const button = document.createElement("button");
            button.classList.add("button")
            
            button.classList.add(buttonNames[buttonCycle]);
          
            if(buttonCycle===0)
            {
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');


            }
            else if ((buttonCycle>=1 && buttonCycle <= 3) || buttonCycle === 7 || buttonCycle === 11)
            {
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');
            }
            else{
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');
            }
            //Update DOM

            row.appendChild(button);
            numpad.appendChild(row);
            button.appendChild(document.createTextNode(buttons[buttonCycle]));
            buttonCycle+=1;



        }
    }

    displayContainer.appendChild(displayText);

}


CreateNumpad(rows, columns);

//animation none to click toreset 
let clickBtn = "clickBtn";
let clickReset = "none";

const btnC = document.querySelector(`.C`);
btnC.addEventListener('click', function(e) {
    RegisterInput("C");
    btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
   // btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s; animation-delay: 2s;`);
   setTimeout(function() {
    btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnDivide = document.querySelector(`.divide`);
btnDivide.addEventListener('click', function(e) {
    btnDivide.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnDivide.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnMultiply = document.querySelector(`.multiply`);
btnMultiply.addEventListener('click', function(e) {
    RegisterInput("multiply");
    btnMultiply.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnMultiply.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnAdd = document.querySelector(`.add`);
btnAdd.addEventListener('click', function(e) {
    RegisterInput("add");
    btnAdd.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnAdd.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnSeven = document.querySelector(`.seven`);
btnSeven.addEventListener('click', function(e) {
    RegisterInput("seven");
    btnSeven.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnSeven.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnEight = document.querySelector(`.eight`);
btnEight.addEventListener('click', function(e) {
    RegisterInput("eight");
    btnEight.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnEight.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnNine = document.querySelector(`.nine`);
btnNine.addEventListener('click', function(e) {
    RegisterInput("nine");
    btnNine.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnNine.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnSubtract = document.querySelector(`.subtract`);
    btnSubtract.addEventListener('click', function(e) {
    RegisterInput("subtract");
    btnSubtract.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnSubtract
.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnFour = document.querySelector(`.four`);
btnFour.addEventListener('click', function(e) {
    RegisterInput("four");
    btnFour.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnFour.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnFive = document.querySelector(`.five`);
btnFive.addEventListener('click', function(e) {
    RegisterInput("five");
    btnFive.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnFive.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnSix = document.querySelector(`.six`);
btnSix.addEventListener('click', function(e) {
    RegisterInput("six");
    btnSix.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnSix.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnEquals = document.querySelector(`.equals`);
btnEquals.addEventListener('click', function(e) {
    RegisterInput("equals");
    btnEquals.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnEquals.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnOne = document.querySelector(`.one`);
btnOne.addEventListener('click', function(e) {
    RegisterInput("one");
    btnOne.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnOne.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnTwo = document.querySelector(`.two`);
btnTwo.addEventListener('click', function(e) {
    RegisterInput("two");
    btnTwo.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnTwo.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnThree = document.querySelector(`.three`);
btnThree.addEventListener('click', function(e) {
    RegisterInput("three");
    btnThree.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnThree.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});

const btnZero = document.querySelector(`.zero`);
btnZero.addEventListener('click', function(e) {
    RegisterInput("zero");
    btnZero.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnZero.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
});
displayContainer.appendChild(displayText);





function UpdateDisplay()
{
    displayContainer.appendChild(displayText);
}
//
/*

    If calculation is not null
    if number is pressed
    add to first number array,
    continue this until a non-number is pressed. 
    C Resets to null
    / * + - will convert array of numbers to one number and store
    it, and place operator into variable,
    if another operator is chosen, it will change the operator 
    variable to the new one. 


*/
let limitCount = 12;
let currentCount = 0;
let buttonString = '';
function RegisterInput(buttonPressed)
{
    switch (buttonPressed) {

        case "C":
            //clear calculator function
            break;

        case "seven":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '7';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonPressed);
                console.log(n1);
                console.log(buttonString);

            }
            break;

        case "eight":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '8';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "nine":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '9';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
                break;  

        case "four":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '4';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  
        
        case "five":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '5';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "six":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '6';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "one":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '1';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "two":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '2';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "three":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '3';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  

        case "zero":
            if(n1 === null && currentCount<limitCount)
            {
                buttonString += '0';
                displayText.textContent = buttonString;
                UpdateDisplay();
                currentCount++;
                console.log(buttonString);
            }
            break;  
        default:
            //something
        break;
    }
}
