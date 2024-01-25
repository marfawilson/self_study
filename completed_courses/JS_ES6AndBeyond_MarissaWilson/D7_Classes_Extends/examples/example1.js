class Person {
    firstName;

    constructor(name) {
        this.firstName = name;
    }

    greet(){
        return `Hello, ${this.firstName}`;
    }
}

// the 'extends' keyword sets up the prototype chain
class Marissa extends Person {
    meet() {
        return `Nice to meet you`;
    }
}

let me = new Marissa('Marissa');
console.log(me.greet());
console.log(me.meet());
console.log(me.__proto__);
console.log(me.__proto__ === Marissa.prototype); // true
console.log(me.__proto__.__proto__);
console.log(Marissa.prototype.__proto__ === Person.prototype); // true
console.log(Marissa.__proto__); // returns the original person class object (connected by 'extends')

let me2 = new Person('Araceli');

/*
console.log(me2.meet()); // throws an error because the meet method is on 'Marissa', not 'Person'
*/

// function constructors & built in types can be extended (if they are constructable)
class myNumber extends Number {
    addOne(){
        return this + 1;
    }
}

let num = new myNumber(525600);
console.log(num.toFixed(1));
console.log(num.addOne());