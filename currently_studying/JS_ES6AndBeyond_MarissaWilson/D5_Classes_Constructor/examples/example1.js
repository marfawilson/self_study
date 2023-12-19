class Person {
    firstName; // instance field not required, but helpful

// class constructors work like function constructors
// because classes are essentially functions
// even if you don't explicitly create a constructor, the engine does under-the-hood

    constructor (name) {
    // 'this' references the newly created object w/the 'new' keyword
        this.firstName = name;
    }

}

let me = new Person('Josh');
let me2 = new Person('Joshua');

console.log(me);
console.log(me2);

// the prototype chain also works the same was as with funtion constructors
console.log(me.__proto__);

// the object that will be the prototype when a new instance is created (me.__proto__ also points to this)
console.log(Person.prototype);

// both console.logs below return 'true', since they're pointing to the same place
console.log(me.__proto__ === Person.prototype);
console.log(me2.__proto__ === Person.prototype);