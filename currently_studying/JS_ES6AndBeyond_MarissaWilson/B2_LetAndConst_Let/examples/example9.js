let person = { firstnames: ['Marissa', 'Rissa'] };

// in this case, since we are UPDATING and not redeclaring (no 'let'), no errors occur
for (person of person.firstnames) {
    console.log(person);
}

console.log(person); // returns 'Rissa' since that is the last value set to 'person' during the loop