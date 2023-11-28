// function statement
function greet(name){
    console.log('Hello ' + name);
}
greet('Spike');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
greetFunc('Jet');

// using an Immediately Invoked Function Expression
var greeting = function(name) {
    return 'Hello ' + name;
}('Faye');

console.log(greeting);

// most common syntax when using IIFE's (lines 23-26)
var firstname = 'Edward';

(function(name){
    var greeting = 'Inside IIFE:';
    console.log(greeting + ' ' + name);
}(firstname)); // invocation can be before OR after the closing parenthesis 
// both ways work, it's just a preference, but be consistent with how you choose to write it to avoid mistakes