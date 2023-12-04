// with 'let', we can use the same variable name with different values
// as long as they are in different lexical environments

let firstname = 'Marissa';

{
    let firstname = 'Araceli';
    console.log(firstname); // returns 'Araceli' since that value is on the same level lexically
}

console.log(firstname); // returns 'Marissa' since it's on the 'root' level