
let arrays = [];
let array1 = [];
let array2 = [];
let array3 = [];

for(let i=0; i<101; i++)
{
    if(i%3===0 && i%5===0)
    {
        array1.push(i);
    }
    else if(i%3===0)
    {
        array2.push(i);
    }
    else
    {
        array3.push(i);
    }
}

console.log(arrays.concat(array1, array2, array3));
let val1 = array1.reduce((acc, val)=>acc+val);
let val2 = array2.reduce((acc, val)=>acc+val);
let val3 = array3.reduce((acc, val)=>acc+val);
console.log(val1, val2, val3);