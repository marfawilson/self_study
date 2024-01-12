let greet = function (firstname, lastname) {
    return `Hi ${firstname} ${lastname}`;
}

let greet2 = (firstname, lastname) => {
    return `Hi ${firstname} ${lastname}`;
}

// when returning one value with one parameter,
// the 'return' keyword, curly braces & parentheses can be omitted
let greet3 = firstname => `Hi ${firstname}`;


console.log(greet3('Satoru', 'Gojo'));

function logThis(fn) {
    console.log(fn(1,2));
}

logThis((a, b) => {
    return a + b;
});

// keep the parentheses if there is more than one parameter
logThis((a, b) => a + b);