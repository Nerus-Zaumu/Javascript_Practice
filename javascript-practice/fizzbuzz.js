let i=0;
my_length = Number(prompt("Enter length: "));
while(i<my_length)
{
    if(i%3===0 && i%5===0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3===0)
    {
        console.log("Fizz");
    }
    else if(i%5===0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
    i++;
}
