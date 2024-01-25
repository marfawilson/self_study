// although variables decalred with the 'let' keyword are hoisted
// they still cannot be accessed before initialization
// remember: variables that are 'initialized' may or may not have an assigned value
// the default value given during the creation phase is 'undefined' if no value is assigned

let firstname = 'Marissa';

{
    console.log(firstname);
    let firstname = 'Araceli'; // ReferenceError: Cannot access 'firstname' before initialization
}

console.log(firstname);