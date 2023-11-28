b(); // this function runs due to "hoisting"
console.log(a); // returns as "undefined"

var a = 'Greetings human!'; 

function b() {
    console.log('trapped in the console!');
}

// functions are saved in memory in their entirety, while variables are initially set as "undefined". for this reason, it's best not to rely on "hoisting".