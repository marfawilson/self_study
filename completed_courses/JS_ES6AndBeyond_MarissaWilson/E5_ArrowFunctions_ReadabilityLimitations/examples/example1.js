// each arrow represents a function
// since there are no curly braces or parentheses,
// that means there is only one parameter & one value being returned
let longExpression = x => y => z => z ? y : x;

// below is the verbose way of writing the above expression
let longExpression2 = function(x) {
    return function(y) {
        return function(z) {
            return z ? y : x;
        }
    }
}

let result1 = longExpression('Satoru')('Gojo')(true);
console.log(result1);

let result2 = longExpression('Satoru')('Gojo')(false);
console.log(result2);

let result3 = longExpression2('Satoru')('Gojo')(true);
console.log(result3);


let me = {
    firstName: 'Yuji',
    greet: function() {
        console.log(this.firstName);
        console.log(this);
    },
    // arrow function expressions are generally not suited to be methods on objects
    //because the 'this' keyword points to the global object
    greet2: () => {
        console.log(this.firstName);
        console.log(this);
    }
}

me.greet();
me.greet2();

// in the class below, the 'this' keyword works as expected
// however, this is not ideal since the greet method in the constructor will be on every new Person object,
// which uses extra memory space vs being on the prototype
class Person{
    constructor(fname) {
        this.firstName = fname;
        this.greet = () => {
            console.log(this.firstName);
        }
    }
}

let me2 = new Person('Megumi');
me2.greet();