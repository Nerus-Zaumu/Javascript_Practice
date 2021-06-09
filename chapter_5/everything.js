function EverythingOne(array, test)
{
    for(let val=0; val<=array.length;)
    {
        if(!test(val))
        {
            return false;
        }
        else
        {
            val++;
        }
    }
    return true;
}

function EverythingTwo(array, test)
{
    return array.some((test)=>test(val));
}