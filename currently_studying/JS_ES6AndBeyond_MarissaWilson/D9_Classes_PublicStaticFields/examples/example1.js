class Person {
    firstName;

    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }

    // the static keyword is attached to the function object created by the class itself 
    static residence = `Earth`;

    // use static if you need to add something that is related to the class but,
    // does not need to be accessed/added to the prototype & does not reference any fields in the object
    static goodMorning() {
        return `Good morning`;
    }
}

let me = new Person();
console.log(Person.goodMorning());
console.log(Person.residence);
console.log(me.__proto__); // returns the person class
console.log(me.goodMorning()); // type error: not a function (aka not accesible this way)