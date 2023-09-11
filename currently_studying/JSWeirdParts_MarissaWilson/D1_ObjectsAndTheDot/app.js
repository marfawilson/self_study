var person = new Object(); // creation of an object with argument list

// use of computed member access operator to create name/value pairs for the person object
person["firstname"] = "Marissa";
person["lastname"] = "Wilson";

var firstNameProperty = "firstname";

console.log(person); // returns the entire person object
console.log(person[firstNameProperty]);// returns first name via computed member access

// the code below makes use of the member access operator (easier to type & read; higher precedence than computed member access). they are both primitive properties.
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object(); // creation of a new object property within the person object

// adding properties to the sub-object address within the person object. the member access operator has left-to-right associativity.
person.address.street = "123 Maple Ln";
person.address.city = "Austin";
person.address.state = "TX";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);