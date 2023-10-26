// large initialization of data can intimidate/confuse new learners of JS
// missing commas are a very common cause of errors ('unexpected token/string etc.)
var people = [
    {
    // the 'Marissa' object
        firstname: 'Marissa',
        lastname: 'Wilson',
        addresses: [
            '420 Green Ln.',
            '1313 Luck St.'
        ]
    }, 
    {
    // the 'Joshua' object
        firstname: 'Joshua',
        lastname: 'McCabe',
        addresses: [
            '420 Green Ln.',
            '101 South St.'
        ],
        greet: function(){
            return 'Hello!';
        }
    }
]

console.log(people);