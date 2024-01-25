// in ES6 and beyond, default parameters can be assigned within the parentheses
function greet(fname = 'Marissa', lname = 'Wilson') {
    return `Howdy ${fname} ${lname}`;
}

// if a parameter does not receive any values, the JS engine sets them to undefined
let greeting1 = greet();
console.log(greeting1);

// passing only one argument reassigns that parameter, otherwise the default is used
let greeting2 = greet('Rissa');
console.log(greeting2);

// the null argument is coerced to a string thanks to the template literal
let greeting3 = greet(null, 'McCabe');
console.log(greeting3);

// when undefined is used as an argument, the default parameter is used instead
let greeting4 = greet(undefined, 'McCabe');
console.log(greeting4);