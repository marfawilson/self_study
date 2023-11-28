// IIFE
var firstname = 'Akira';

(function(global, name) {
    
    var greeting = 'Hello'; // this variable's lexical environment stays within the IIFE's execution context (not touching global)
    global.greeting = 'Hi'; // overwrites the greeting variable in our greet.js file
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE

console.log(greeting);





















