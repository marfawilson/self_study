// IIFE
var firstname = 'Akira';

(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hi';
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE

console.log(greeting);





















