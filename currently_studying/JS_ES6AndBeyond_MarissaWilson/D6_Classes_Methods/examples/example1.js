class Person {
    firstName;

    constructor(name) {
        this.firstName = name;
    }

    // methods are added to the prototype
    greet(){
        return `Hello, ${this.firstName}`;
    }
}

let me = new Person('Usagi');
let me2 = new Person('Serena');

console.log(me.greet());
console.log(me2.greet());

console.log(me.__proto__);
console.log(me);