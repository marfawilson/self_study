// default functions can access values from other parameters
function greet1(fname = 'Marissa', lname = 'Wilson', phrase = () => { return `Hi ${fname} ${lname}` }) {
    return phrase();
}

let greeting1 = greet1('Rissa');
console.log(greeting1);

// in this example, the order of the parameters does not matter, since phrase is a function
function greet2(fname = 'Marissa', phrase = () => { return `Hi ${fname} ${lname}` }, lname = 'Wilson') {
    return phrase();
}

let greeting2 = greet2('Rissa');
console.log(greeting2);

// however in this case, phrase is trying to access a value before it's been assinged a variable
function greet3(fname = 'Marissa', phrase = `Hi ${fname} ${lname}`, lname = 'Wilson') {
    return phrase;
}

let greeting3 = greet3('Rissa');
console.log(greeting3);