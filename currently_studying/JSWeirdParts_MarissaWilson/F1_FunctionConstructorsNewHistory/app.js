// constructing an object via a function, with arguments that set the value of each property
// using arguments in our function allows us to reuse this code to create other objects with the same name & properties, but different values
function Person(firstname, lastname) {

    console.log(this); // empty object created by the 'new' keyword on lines 16 & 19

    // properties being added to the empty object (as long as the function doesn't return anything)
    this.firstname = firstname;
    this.lastname = lastname;

    console.log('This function is invoked!');
}

// when the 'new' keyword is used, an empty object is created
// that empty object is what the 'this' keyword points to in memory when the person function is called
var usagi = new Person('Usagi', 'Tsukino');
console.log(usagi);

var ami = new Person('Ami', 'Mizuno');
console.log(ami);