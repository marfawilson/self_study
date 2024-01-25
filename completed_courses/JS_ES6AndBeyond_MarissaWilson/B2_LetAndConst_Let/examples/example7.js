let firstname = 'Marissa';

// CURLY BRACES are what determines the lexical environment!! (not switch, if/else, while etc.) 
// We get no errors because each variable is in seperate lexical environments (curly braces)

switch (firstname) {
    case 'Tony':
        {
            let lastname = 'Wilson';
            break;
        }
        
    case 'Anthony':
        {
            let lastname = 'McCabe';
            break;
        }
}