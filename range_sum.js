function ranger(start, end, step=1)
{
    let my_array = [];
    for(let i=start; i<=end; i +=step)
    {
        my_array.push(i);
    }
    return my_array;
}

function my_sum(...values)
{
    let result = 0;
    for(let value of values)
    {
        result += value;
    }
    return result;
}

function reverseArray(array)
{
    let reversed_array = [];
    reversed_array = array.slice(-1, 0);
    return reversed_array;

}