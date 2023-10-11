// ALL function objects get access to the call, apply, and bind methods

// creating an object with object literal syntax
var person = {
    firstname: 'Ash',
    lastname: 'Ketchum',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

// creating a function expression stored in a variable
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ', ' + lang2);
    console.log('----------');

}

// 'bind' creates a copy of whatever function you're calling it on
// the object you pass into the bind method is the object that 'this' points to (by reference)
var logPersonName = logName.bind(person);
logPersonName('en');

// 'call' simultaneously invokes the function & lets us decide what 'this' points to, as well as any parameters
logName.call(person, 'en', 'es');

// 'apply' works very much like 'call', except the parameters need to be in an array
logName.apply(person, ['en', 'es']);

// we can also use a function expression & invoke it using the apply method (the call method works too)
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ', ' + lang2);
    console.log('----------');

}).apply(person, ['en', 'es']);





// function borrowing
var person2 = {
    firstname: 'Professor',
    lastname: 'Oak'
}

// on line 56, we are borrowing the first 'person' object with the apply method (or you can use 'call')
// you can grab methods from other objects & use them, as long as you have similar property names in each object
console.log(person.getFullName.apply(person2));


//function currying: creating a copy of a function, but with some preset parameters (very useful in mathematical situations)
function multiply(a, b) {
    return a*b;
}

// in the example on line 63, bind is permanently setting the first parameter (a)
var multipleByTwo = multiply.bind(this, 2);

// now, when we pass a parameter through the copy of the function, it gets multiplied by 2 by default
console.log(multipleByTwo(4));

// lines 69 - 70 show another example, this time multiplying by 3
var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));