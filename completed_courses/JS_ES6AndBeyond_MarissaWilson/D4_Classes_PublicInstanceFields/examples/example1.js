// the firstName field (property) is a public field 
// that can be accessed & changed both inside & outside the object
class Person {
    firstName = 'Kusuo';
}

// the 'new' keyword must be used when invoking a class constructor
let me = new Person();

// a second instance of a class object; a new object with an updated value
let me2 = new Person();
me2.firstName = 'Saiki';

console.log(me); // Person {firstName: 'Kusuo'}
console.log(me2); // Person {firstName: 'Saiki'}