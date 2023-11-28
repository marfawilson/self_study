// namespace: a container for variables & functions, typically to keep variables & functions with the same name separate.

var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet); // returns 'Hola!' because JS synchronously runs each line in order

// these objects will serve as containers to help us 'fake' a namespace in JS
var english = {
    greetings: {
        basic: 'Hello!'
    }
};
var spanish = {};

spanish.greet = 'Hola!';

console.log(english); // returns 'Hello!'