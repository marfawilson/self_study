// function factory: a function that 'makes' or returns other things for me
function makeGreeting(language){

// this inner function has access to the argument passed through it when it was created (invoked). each invocation is a new execution context.

    return function(firstName, lastName) {

        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        } if (language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }

    }

}

/* each time a function is invoked, a new execution context is created. 
even though the invocations happening on lines 20 and 21 are using the same function, they point to different spots in memory, each with different parameters for language. */
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Eren', 'Yeager');
greetSpanish('Mikasa', 'Ackerman');