// function expression syntax
let greet = function(firstname, lastname) {
    return `Hi ${firstname} ${lastname}`;
}

// arrow function expression syntax
let greet2 = (firstname, lastname) => {
    return `Hi ${firstname} ${lastname}`;
}

console.log(greet2('Tony', 'Stark'));

// arrow function expressions can be written as declarations & won't throw an error, 
// but they aren't very useful 
() => { return 1 };

// an immediately invoked arrow function expression
(() => { return 1 })();
console.log((() => { return 1 })());

// since arrow functions are expressions, they can be passed around to other functions
function logThis(fn) {
    console.log(fn(1,2))
}

logThis(() => {
    let a = 1;
    return a;
});

logThis((a, b) => {
    return a + b; // returns 3
});