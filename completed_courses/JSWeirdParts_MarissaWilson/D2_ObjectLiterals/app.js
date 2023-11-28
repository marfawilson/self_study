// an object being initialized using the object literal syntax (curly braces wrapped around key/value pairs separated by commas)
var Marissa = {
    firstname: 'Marissa',
    lastname: 'Wilson',
    address: {
        street: '123 Maple Lane',
        city: 'Austin',
        state: 'TX'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Marissa);

// creating a new object when the function is being called
greet({
    firstname: 'Joshua', 
    lastname: 'McCabe'
});

// dot notation being used along with object literal syntax
Marissa.address2 = {
    street: '789 Oak Dr'
};