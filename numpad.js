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
    btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
   // btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s; animation-delay: 2s;`);
   setTimeout(function() {
    btnC.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
    displayText.textContent = 0;
});

const btnDivide = document.querySelector(`.divide`);
btnDivide.addEventListener('click', function(e) {
    btnDivide.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickBtn}; animation-duration: 0.25s;`);//animation-delay: 2s;');
    setTimeout(function() {
    btnDivide.setAttribute(`style`, `border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; animation-name: ${clickReset}; animation-duration: 0.75s;`);
   }, 250);
    displayText.textContent = '/';
});

const btnMultiply = document.querySelector(`.multiply`);
btnMultiply.addEventListener('click', function(e) {
    displayText.textContent = '*';
});

const btnPlus = document.querySelector(`.add`);
btnPlus.addEventListener('click', function(e) {
    displayText.textContent = "+";
});

const btnSeven = document.querySelector(`.seven`);
btnSeven.addEventListener('click', function(e) {
    displayText.textContent = 7;
});

const btnEight = document.querySelector(`.eight`);
btnEight.addEventListener('click', function(e) {
    displayText.textContent = 8;
});

const btnNine = document.querySelector(`.nine`);
btnNine.addEventListener('click', function(e) {
    displayText.textContent = 9;
});

const btnMinus = document.querySelector(`.subtract`);
btnMinus.addEventListener('click', function(e) {
    displayText.textContent = "-";
});

const btnFour = document.querySelector(`.four`);
btnFour.addEventListener('click', function(e) {
    displayText.textContent = 4;
});

const btnFive = document.querySelector(`.five`);
btnFive.addEventListener('click', function(e) {
    displayText.textContent = 5;
});

const btnSix = document.querySelector(`.six`);
btnSix.addEventListener('click', function(e) {
    displayText.textContent = 6;
});

const btnEquals = document.querySelector(`.equals`);
btnEquals.addEventListener('click', function(e) {
    displayText.textContent = "=";
});

const btnOne = document.querySelector(`.one`);
btnOne.addEventListener('click', function(e) {
    displayText.textContent = 1;
});

const btnTwo = document.querySelector(`.two`);
btnTwo.addEventListener('click', function(e) {
    displayText.textContent = 2;
});

const btnThree = document.querySelector(`.three`);
btnThree.addEventListener('click', function(e) {
    displayText.textContent = 3;
});

const btnZero = document.querySelector(`.zero`);
btnZero.addEventListener('click', function(e) {
    displayText.textContent = 0;
});
displayContainer.appendChild(displayText);


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


/*
declare and initalize variables for n1, op, and n2 to null
if n1 is equal to null, (set n1 to 0)
store numbers that are clicked into a tempString variable, up to a cap
Once an operator is pressed or the numbers are maxed out,
convert and set the numbers from tempString to n1 (which was previous null)
if n1 is not equal to null AND n2 is equal to null
if an operator is clicked, set op to operator
if n1 and op are not equal to null,
store numbers that are clicked into a tempString variable, up to a cap
Once equals is pressed (or another operator)
convert and set the numbers from tempString to n2

result = operate(n1, op, n2);
text.display = result;
set result to n1

while n1 != null && op != null, && n2 != null;
if operator is pressed, set result to n1, and new operator to op,
store numbers that are clicked into a tempString variable, up to a cap
Once equals is pressed
convert and set the numbers from tempString to n2


if C is pressed, set n1, op, and n2 to null;
textdisplay = 0





*/

