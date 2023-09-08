var person = new Object(); 

person["firstname"] = "Marissa";
person["lastname"] = "Wilson";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "123 Maple Ln";
person.address.city = "Austin";
person.address.state = "TX";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);