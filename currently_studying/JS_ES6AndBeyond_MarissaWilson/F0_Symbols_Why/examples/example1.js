// someone else's code
class Person {
    firstName = 'Marissa';

    greet() {
        return `Hi ${this.firstName}`;
    }
}

// my code
let marissa = new Person();

// since we are adding our own method with the same name, the original method is overwritten
// this can cause problems if the original method needed to work a certain way
marissa.greet = function() {
    return `Hello ${this.firstName}`;
}

console.log(marissa.greet());