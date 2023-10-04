// global execution context
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i); // this line of code is NOT executed when created, only once invoked (lines 23-25)
            }
        )

    }

    return arr;
}

// global execution context
var fs = buildFunctions();

// each of the invocations below point to the same variable reference in memory due to the lexical environment where that function was initially created
fs[0]();
fs[1]();
fs[2]();




function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        
// an IIFE is used on lines 39-43 in order to preserve the scope chain. 

        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );

/* now that the innermost function is contained within a parent function, a new execution context is created. and since we're using an IIFE, the value of j each time it runs is stored in memory, versus before when the value of i was returned at the end of the loop. */

    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();