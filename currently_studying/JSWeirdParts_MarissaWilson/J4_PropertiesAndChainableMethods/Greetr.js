// wrapping our library in an IIFE to keep it safe from affecting other code elsewhere

(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // supported langs, greetings & formal greetings we have access to due to lexical environment (not global)
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Salutations',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    }

    // empty object (prototype) for us to store methods onto the Greetr object
    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName(); 
        },

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
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }

    };

    // initializing Greetr.init after calling it in the function on line 5 is ok because everything will already be in memory
    Greetr.init = function(firstName, lastName, language) {

        var self = this; // storing 'this' into a variable to avoid confusion later
        
        // setting default parameters
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype; // objects created with Greetr.init point to Greetr.prototype

    global.Greetr = global.G$ = Greetr; // attaching the Greetr function to the global object with an alias

}(window, jQuery));