// creating a symbol with const because it's not changing
// no new keyword is needed since symbol is a primitive type
const grt = Symbol('greet');
const fname = Symbol('fname');

// each symbol is unique, so even if they have the same description (key),
// they are not considered equal
const grt2 = Symbol('greet');
console.log(grt === grt2); // returns false

// someone else's code that we don't want to overwrite!
class Person {
    [fname] = 'Barbie';

    [grt]() {
        return `Hi ${this[fname]}`;
    }
}

// my code
let barbie = new Person();

const fname2 = Symbol('fname');
barbie[fname2] = 'Ken';

barbie.__proto__.greet = function() {
    return `Hello ${this[fname]}`;
}

console.log(barbie[grt]());
console.log(barbie.greet());

// symbols can be used anytime you have object property/method names
let me = {
    [fname]: 'Skipper'
}
console.log(me[fname]);


// 'global' symbols to reference a specific description (key)
const HAIR_STRAIGHT = Symbol.for('Straight');
const HAIR_CURLY = Symbol.for('Curly');
const HAIR_WAVY = Symbol.for('Wavy');

// the Symbol.for method will first check if the key already exists & return it
// otherwise, it will create & return a new symbol with that key
let curly = Symbol.for('Curly');
console.log(curly === HAIR_CURLY); // returns true

// how to find the description (key) of a symbol
console.log(Symbol.keyFor(HAIR_CURLY));