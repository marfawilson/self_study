let person = { firstnames: ['Marissa', 'Rissa'] };

// in the example below, the 'person' variable being referenced in the 'for' statement
// is actually being scoped to the same lexical environment as that of the block that follows,
// NOT the person object we created on line 1

for (let person of person.firstnames) {
    console.log(person); // ReferenceError: Cannot access 'person' before initialization
}