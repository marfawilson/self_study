// JSON is a sub-set to the object literal syntax; double quotes around the property names are required. While this is considered valid object literal syntax, not all object literals are valid JSON syntax.

var objectLiteral = {
    firstName: 'Marissa',
    isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral)); // returns object as a valid JSON string

var jsonValue = JSON.parse('{ "firstName": "Marissa", "isAProgrammer": true }'); // converts the JSON string into an object

console.log(jsonValue); // returns string as a JSON object