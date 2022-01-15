
/*
const removeFromArray = function(array, ...values) {
    let output = [];
    for (const item of array) {
        if (item != value) output.push(item); 
    }

    return output;
};
*/
/*we have 2 arrays: *let's assume they can have doubles*
array = the original one
values = elements to be deleted

we need to take array[0] and check it against every value in values:
if it equals, we stop comparing, and skip to the next item in array
if it doesn't equal to any in values, we add it to output[]
*/
/*const removeFromArray = function (array, ...values) {
    let output = [];
    arrayItem:
    for (const item of array) {
        arrayValues:
        for (const value of values) {
            if (item === value) continue arrayItem;
        }
        output.push(item);
    }
    return output;
}
*/


/*const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(val => !args.includes(val));
}
*/

const removeFromArray = function(...args) {
    const array = args[0];

    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

let test = [1, 2, 3, 4, "bababui"];
console.log(removeFromArray(test, "2", 0, 1, 7, 1, 3, "bababui"));

/* this one works for 1 value
const removeFromArray = function(array, value) {
    let output = [];
    for (const item of array) {
        if (item != value) output.push(item); 
    }

    return output;
};
*/