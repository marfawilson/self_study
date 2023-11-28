// wrapping our library in an IIFE to keep it safe from affecting other code elsewhere

;(function(global, $) {
    
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // supported langs, greetings & formal greetings we have access to due to lexical environment (not global)
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Salutations',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    }

    // prototype for us to store methods onto the Greetr object (saves memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check that the language passed in is supported
            // references the local variable/array 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        // retrieve messages from object by referring to properties using [] syntax (arrays)
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName(); 
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            //if undefined or null, it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this; // chainable method
        },

        setLang: function(lang) {
            this.language = lang; // set the language
            this.validate(); // validates the language
            return this; // chainable method
        },

        header: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            } if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;

            // determine the message
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // chainable method
            return this;

        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new' 
    Greetr.init = function(firstName, lastName, language) {

        var self = this; // storing 'this' into a variable to avoid confusion later
        
        // setting default parameters
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attaching our Greetr to the global object with an alias '$G' for ease of typing
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));