var a = 'Howdy'; // without an assigned value, variables are initially set to 'undefined'
console.log(a);

a = undefined; // avoid assigning a value of 'undefined' to variables! although technically valid, this will make your code difficult to understand & debug

if (a === undefined) {
    console.log('a is undefined!');
} else {
    console.log('a is defined!')
}