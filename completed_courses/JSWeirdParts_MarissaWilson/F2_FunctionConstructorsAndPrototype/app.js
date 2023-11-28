// function constructors automatically set the prototype for us
// it's important to note that the prototype property on a function is NOT the prototype of that function
// instead, it's the prototype of any objects created if you're using the function as a function constructor
function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

// putting methods on the prototype vs in the function constructor saves memory, because they only need one 'copy' to be used
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// calling the new keyword creates an empty object & sets the prototype of that empty object to the prototype property of the function that you then call
var usagi = new Person('Usagi', 'Tsukino');
console.log(usagi);

var ami = new Person('Ami', 'Mizuno');
console.log(ami);

// adding properties & methods to the prototype gives other objects access to those items 
Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(usagi.getFormalFullName());