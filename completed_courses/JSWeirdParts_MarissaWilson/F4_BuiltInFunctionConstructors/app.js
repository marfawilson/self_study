// String is a built-in JS function constructor; we are adding a method to the prototype property
// these built-in constructors look like we're creating primitives, but we are actually creating objects with the primitive value 'boxed' inside the object
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

// the primitive string ("Deku") was converted into a string object
console.log("Deku".isLengthGreaterThan(3));

// the example below throws an error because a number cannot be converted into an object in this way
Number.prototype.isPositive = function() {
    return this > 0;
}

// since the 'isPositive' method was added to the Number prototype, we can use that built-in constructor with the 'new' keyword to create a new object (store in a variable on line 16), which we can then call that method onto (line 17)
var a = new Number(3);
console.log(a.isPositive());