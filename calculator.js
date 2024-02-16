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