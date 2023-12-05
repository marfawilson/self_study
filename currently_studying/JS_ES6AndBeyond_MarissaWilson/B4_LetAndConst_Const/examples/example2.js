// the only difference between 'let' and 'const' is that 'const' is immutable
// on line 6, the assignment operator is trying to create a new binding with an existing variable name
// 'const' does not allow this to happen

const firstname = 'Spike';
firstname = 'Ace'; // type error: assignment to constant variable

console.log(firstname);