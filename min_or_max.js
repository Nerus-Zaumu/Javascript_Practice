function minimum(a, b)
{
    if(a < b)
    {
        return a;
    }
    else if(b < a)
    {
        return b;
    }
    else if (a===undefined || b===undefined)
    {
        return "Wrong values entered!";
    }
    else
    {
        return "Both numbers are equal!";
    }
}
function maximum(a, b)
{
    if(a > b)
    {
        return a;
    }
    else if(b > a)
    {
        return b;
    }
    else if (a===undefined || b===undefined)
    {
        return "Wrong values entered!";
    }
    else
    {
        return "Both numbers are equal!";
    }
}
function user_calc()
{
    let val1 = Number(prompt("Enter a: "));
    let val2 = Number(prompt("Enter val2"));
    let user_response = String(prompt("What do you want to carry out(min/max)? "));
    if(user_response.toUpperCase()==="MIN")
    {
        minimum(val1, val2);
    }
    else if(user_response.toUpperCase()==="MAX")
    {
        maximum(val1, val2);
    }
    else
    {
        user_calc();
    }
}
user_calc();
