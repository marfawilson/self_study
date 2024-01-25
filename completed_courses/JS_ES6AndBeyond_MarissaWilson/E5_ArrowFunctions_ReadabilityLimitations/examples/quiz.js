let concat = a => b => c => d => a + b + c + d;

// parameters for a & b
let e = concat('Hello')('How');

console.log(e); // returns c => d => a + b + c + d (since only a & b have values)


let concat2 = a => b => c => d => a + b + c + d;
let str = concat2('Hello')('how')('are')('you');

console.log(str);

// variables using the 'let' keyword are block-scoped, NOT global
let sound = 'woof';

let dog = {
    sound: 'bark',
    makeSound: () => {
        console.log(this.sound);
    }
}

dog.makeSound(); // returns undefined bc the arrow expression has no 'this' & line 15 is block-scoped