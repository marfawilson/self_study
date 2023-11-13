// wrapping our library in an IIFE to keep it safe from affecting other code elsewhere

(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {}; // empty object (prototype) for us to store methods onto the Greetr object

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