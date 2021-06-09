function myFunction(value, test, body, update)
{
    for(value of values)
    {
        test(value);
        if(!test(value))
        {
            break;
        }
        body(value);
    }
    let new_val = update(value);
    value = new_val;
}