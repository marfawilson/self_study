/* arguments: the parameters you pass to a function.
    JS gives you a keyword of the same name which contains them all */

function greet(firstName, lastName, language) {

    language = language || 'en'; // here we are using the default value concept to set a default parameter so it doesn't just return 'undefined' 

// the if statement on lines 10-14 checks for the existence of parameters

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('----------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // contains an array-like list of all the values we've passed as parameters
    console.log('arg 0: ' + arguments[0]); // here we are using the brackets operator to access the value of an argument
    console.log('----------');

}

greet(); // JS won't throw an error if you don't include any arguments, even if they are expected. due to hoisting, this returns ''undefined' for each argument.

greet('Thurman'); // arguments are processed left to right, so this is considered the argument for 'firstName'

greet('Thurman', 'Murman');
greet('Thurman', 'Murman', 'es');