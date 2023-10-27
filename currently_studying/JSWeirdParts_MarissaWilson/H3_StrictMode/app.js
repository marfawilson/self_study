// "use strict": defines that JS code should be executed in "strict mode"
// Strict mode makes it easier to write "secure" JS by throwing errors for bad syntax considered acceptable in "sloppy mode"
// when "use strict" is declared at the top of a file, it has global scope & applies to all code in the document
// when "use strict" is declared inside a function, it has local scope (only the code inside the function is in strict mode)

function logNewPerson() {
    "use strict";
// because this function is in "strict mode", it  will throw an error, since we have an undeclared (misspelled) variable
    var person2;
    persom2 = {};
    console.log(persom2);
}

// since lines 15-17 are in "sloppy mode", we do not get an error; instead, a new global variable is created for the misspelled one
var person;
persom = {};
console.log(persom);

logNewPerson(); // Uncaught ReferenceError: persom2 is not defined