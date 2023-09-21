function greet(firstName, lastName, language) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('----------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('----------');

}

greet();
greet('Thurman');
greet('Thurman', 'Murman');
greet('Thurman', 'Murman', 'es');