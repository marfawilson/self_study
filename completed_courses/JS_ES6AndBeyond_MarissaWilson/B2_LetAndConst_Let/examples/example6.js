let firstname = 'Marissa';

// variables declared with 'let' cannot be redeclared within the same lexical environment 
switch (firstname) {
    case 'Tony':
        let lastname = 'Wilson';
        break;
    case 'Anthony':
        let lastname = 'McCabe';
        break;
}