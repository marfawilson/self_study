// typeof: an operator (function) that takes one parameter & returns a string that tells you what 'type' that parameter is (string, number, object etc.)

// instanceof: when dealing with object chains, instanceof takes two parameters & tells you if the first parameter is on the prototype chain

var a = 3;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // weird! (arrays are technically objects, but this isn't useful/accurate)
console.log(Object.prototype.toString.call(d)); // better! (there is a toString property/method on the prototype of the base object)

// function constructor
function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // instanceof checks down the prototype chain for the type of object specified (returns true)

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever... (returns 'object')

var z = function() { };
console.log(typeof z); // function
