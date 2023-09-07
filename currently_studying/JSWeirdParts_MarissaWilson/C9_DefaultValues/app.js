/* in this function, we are setting the default value of the name variable. the logical operator OR returns the first truthy value, otherwise the default value is returned. */

function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Marissa'); // returns 'Hello Marissa'
greet(); // returns default value assigned to name