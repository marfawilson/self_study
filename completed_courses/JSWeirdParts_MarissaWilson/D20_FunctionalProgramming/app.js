// putting a for loop inside a function & giving that function the work to do against each item in the array (lines 18-20) is an example of functional programming
function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;

}

var arr1 = [1,2,3]; // the initial array
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log(arr2); // returns [2,4,6]

// this next example is very similar, only this time we are pushing booleans to arr3 (is this array item greater than 2)
// this is very powerful because we can reuse the mapForEach function to do different work based on what we need
var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});

console.log(arr3); // returns [false, false, true]




var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

 // on line 40 we use bind to make a copy of the checkPastLimit function & preset the limiter parameter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


// in this simplified version, we use a callback function with bind attached to make a copy & preset the limiter parameter
// this allows us to again reuse code
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);

// instead of purely separating code into functions, thanks to functional programming we can give our functions other functions, or return functions from our functions, making our code more granular

// be careful not to mutate data, especially with smaller functions that do work 

// either mutate as high up in the chain as possible, or instead return something new