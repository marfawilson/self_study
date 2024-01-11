let me = {
    firstName: 'Jack',
    greet: function () {
        console.log(this);

        // before arrow functions, we had to create a pattern of storing 'this' into a variable
        // in order to get the expected outcome (otherwise, it points to the global object)
        let self = this;
        let logMe = function () {
            console.log(self);
        }
        logMe();
    },
    greet2: function () {
        console.log(this);

        // the execution context of arrow functions does not have a 'this' keyword,
        // so when it's referenced, it goes up the scope chain to the previous execution context
        // to find 'this'
        let logMe = () => {
            console.log(this);
        }
        logMe();
    }
}

me.greet();
me.greet2();