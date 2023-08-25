// each function creates its own execution context
function b() {
    var myVar;
    console.log(myVar);// returns undefined (runs third)
}

// the variables in each function do not 'touch' each other
function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

// the code below is apart of the Global Execution Context
var myVar = 1;
console.log(myVar);// returns 1 (runs first)

a();// returns 2 (runs second) because the myVar value is now coming from a different EC (function a)

console.log(myVar);// returns 1 because we're back in the GEC