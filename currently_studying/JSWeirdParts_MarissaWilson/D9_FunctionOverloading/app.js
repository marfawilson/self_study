/* function overloading (in other languages) allows you to have functions with the same name, but a different number of parameters.
since functions are objects in JS, this concept doesn't work. we can't have two objects with the same name.
however, we can create a 'core' function, and use that within another function to manage/control the arguments being passed. */

// the core 'greet' function with a default language  parameter value
function greet(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

// a function for english language users
function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en');
}

// a function for spanish language users
function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es');
}

greetEnglish('Marissa', 'Wilson');
greetSpanish('Marissa', 'Wilson');