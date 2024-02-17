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