greet(); // we can call a function before it's declared due to hoisting

// example of a function statement
function greet() {
    console.log('hi');
}

/* anonymousGreet();  
throws an error (undefined is not a function) because function expressions cannot be hoisted */

// example of a function expression (returns a value)
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    a();
}

// below we are passing a function as a parameter (functional programming/first class functions)
log(function() {
    console.log('hi again');
});