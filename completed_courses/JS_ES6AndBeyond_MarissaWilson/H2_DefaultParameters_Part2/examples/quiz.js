function multiply1(a = 1, b) {
    return a * b;
}

let result1 = multiply1(2, 4); // these arguments override any default parameters
console.log(result1);


function multiply2(a = 1, b) {
    return a * b;
}

let result2 = multiply2(2); // with only 1 argument, the value of b is undefined & cannot be multiplied
console.log(result2);