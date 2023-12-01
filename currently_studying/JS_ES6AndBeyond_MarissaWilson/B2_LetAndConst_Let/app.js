
let firstname = 'Marissa';
// let firstname = 'Araceli'; (syntax error: variable has already been declared)
console.log(firstname); // not on the global object


{
    // console.log(firstname); reference error: cannot access variable before initialization
    let firstname = 'Araceli'; // no errors because this variable is in a different lexical enviornment
    console.log(firstname); // returns 'Araceli' 
}


switch (firstname) {
    case 'Marissa':
        let lastname = 'Wilson';
        break;
    case 'Araceli':
        // let lastname = 'Rodriguez'; syntax error: lastname has already been declared
        break;
}