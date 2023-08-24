// the function below is stored in memory during creation
function b() {
    console.log('Called b!');
}

b();

console.log(a); // during creation, variable a is in memory, but has no value (therefore 'undefined')

var a = 'Hola Mundo!';

console.log(a); // during execution, code is run line by line, so here we get back 'Hola Mundo!' because now it has been assigned a value