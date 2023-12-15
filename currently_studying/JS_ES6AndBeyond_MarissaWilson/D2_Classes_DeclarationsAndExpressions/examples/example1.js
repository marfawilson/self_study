// classes in JS are 'synactic sugar'
// they don't introduce anything new under-the hood,
// clases are just another way to create function objects

// literal syntax
class Person {

}

// anonymous class expression
let p = class {

}

// the only difference between a class & other function objects
// is that classes get a special 'classConstructor' property
// that allow for different behaviors than typical function objects

function logClass(c) {
    console.log(c);
}

logClass(p);

logClass(class {

});