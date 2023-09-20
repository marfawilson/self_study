// when functions or function expressions are on the global level, 'this' will point to the window object
function a() {
    console.log(this);
    this.newVariable = 'hello'; // attaches to the global object, not the function
}

var b = function() {
    console.log(this);
}

/* a new execution context is created every time a function is invoked, however 'this' still points to the window object despite having more than one execution context */
a(); 

console.log(newVariable); // returns 'hello'

b();

/* when a function is actually a method attached to an object, 'this' points to the object that method is sitting inside of instead of the global window object */

var c = {
    name: 'The c object',
    log: function() {
        /* on line 25, 'this' points to the c object, so we store it into a variable to avoid accidentally mutating the global object */

        var self = this; 

        self.name = 'Updated c object'; // mutates name property of c object
        console.log(self); // points to the c object

        var setName = function(newName) {
            self.name = newName; 
        }
        setName('Updated again! The c object');
        console.log(self);
    }
}

c.log(); // returns c object twice with both mutated names vs repeating the first mutation & changing the global object