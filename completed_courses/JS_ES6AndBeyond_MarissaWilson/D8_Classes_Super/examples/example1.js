class Person {
    firstName;

    constructor(name) {
        this.firstName = name;
    }

    greet(){
        return `Hello, ${this.firstName}`;
    }
}

// extends creates the prototype chain, while super walks the prototype chain
class onePunch extends Person {

    // if we don't create a constructor, one is created under-the-hood
    constructor() {
        super('Saitama');
    }

    greet() {
        let greeting = super.greet(); // this line lets us access greet() on the Person class
        return `${greeting}. I'm Marissa.`;
    }

    meet() {
        return `Nice to meet you`;
    }
}

let hero = new onePunch();
console.log(hero.greet());  