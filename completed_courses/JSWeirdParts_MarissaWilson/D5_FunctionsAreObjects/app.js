// below we have a function object with a name property as well as a code property. The code property can be invoked when the function is called.

function greet() {
    console.log('hi');
}

greet.language = 'english'; // here we are using dot notation to add a new property to the greet function

console.log(greet.language); // returns the value of the language property (english)