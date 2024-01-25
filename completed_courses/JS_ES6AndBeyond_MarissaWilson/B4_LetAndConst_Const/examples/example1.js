// the 'const' keyword works virtually the same as 'let'
// a variable with the same name, but different values in different lexial environments
// does not throw an error

const firstname = 'Spike';

{
    const firstname = 'Ace';
    console.log(firstname); // returns 'Ace'
}

console.log(firstname); // returns 'Spike'