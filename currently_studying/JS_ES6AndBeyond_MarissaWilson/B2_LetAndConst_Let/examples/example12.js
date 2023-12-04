// slides at the beginning of the lecture

let a = 2, b = 2, c = 2;

if (a===b) {

    console.log(myVar); // throws an error because it cannot access the lower lexical environment (only goes up)

    if (b===c) {

        let myVar = 1;

    }

}