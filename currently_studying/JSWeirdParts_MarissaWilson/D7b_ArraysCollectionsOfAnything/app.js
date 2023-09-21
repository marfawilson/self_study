/* array literal syntax.

arrays in JS can have multiple data types. 

below we have a number, boolean, object, function expression, and string. */

var arr = [
    1, 
    false, 
    {
        name: 'Marissa',
        address: '135 Deer Lane'
    },
    function(name) {
        var greeting = 'Hello '
        console.log(greeting + name);
    },
    'foo'
];

console.log(arr); // returns array with no errors & lists data types

/* arrays in JS are zero based, meaning we start counting with zero and go up from there (so the first item is actually indexed at 0 and so on).

to access items in an array, we use brackets, then enter the number that item is indexed to.

in the example on line 29, we are invoking the function indexed at 3, then accessing the name property of the object indexed at 2 using dot notation. */

arr[3](arr[2].name);