class Person {
    firstName;

    constructor(name) {
        this.firstName = name;
    }

    greet(){
        return `Hello, ${this.firstName}`;
    }
}

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

let me2 = new Person('Araceli');
console.log(me2.greet());