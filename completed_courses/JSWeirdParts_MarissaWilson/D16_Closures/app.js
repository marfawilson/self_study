// global execution context
function greet(whatToSay) {

// local functions (lines 5-7) go up the scope chain to find the reference of any variables used within it
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }

}

var sayHi = greet('Hi'); // greet function called, execution context is created then popped off the stack once finished running, however the reference in memory is still there

sayHi('Denji'); // when this execution context is created, it still has a reference to the space in memory that contains the argument passed through the greet function

/* closures are a feature of JS, which means we don't need to 'tell' the JS engine to do this, it just happens.

the JS engine makes sure that functions have access to the variables it needs in order to run, aka that it's scope is intact. */