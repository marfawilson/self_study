// by value (primitives)
var a = 3;
var b;

b = a; // makes a copy of the value of a & assigns it to b. even though they are the same value, they are sitting in different spots in memory

a = 2; // now we can change the value of a & it will not affect the value of b (at this point in the code)

console.log(a); // returns 2
console.log(b); // returns 3

// by reference (all objects, including functions)
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

// both lines below return {greeting: 'hello'} because they are simply pointing to the same space in memory
console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'hola'; // mutate
}

changeGreeting(d);
// now the two lines of code below will both return {greeting: 'hola'}
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' } // treated as a new object
console.log(c); // returns {greeting: 'howdy'}
console.log(d); // returns {greeting: 'hola'}