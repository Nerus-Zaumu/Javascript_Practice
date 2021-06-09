function counter(my_string, letter)
{
    let count = 0;
    for(let i=0; i<my_string.length; i++)
    {
        if(my_string[i].toUpperCase() === letter.toUpperCase())
        {
            count += 1;
        }
    }
    return count;
}