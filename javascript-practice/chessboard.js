let space;
const a = 4;
let user_defined_length = Number(prompt("Enter Length: "));
for(let i=1; i<=user_defined_length; i++)
{
    if(i%2===0)
    {
        space =  "# ";
    }
    else
    {
        space = " #";
    }
    console.log(space.repeat(a))
}