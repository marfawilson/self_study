// polyfill: code that adds a feature which the engine *may* lack
if (!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

// creating an object, which will eventually become the prototype of another object
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // using the 'this' keyword here in order to ensure the function doesn't miss the firstname property (objects don't create new execution contexts)
    }
}

// setting the prototype of the 'akira' object by passing in the object ('person' in this case) we want as the prototype
var akira = Object.create(person);
// lines 25-26 mutate the values of the first & last name properties (in other words, it 'hides' the default values of the prototype, but they are still there)
akira.firstname = 'Akira';
akira.lastname = 'Tendo';
console.log(akira);