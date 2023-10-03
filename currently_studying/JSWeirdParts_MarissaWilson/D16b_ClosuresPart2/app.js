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
        
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );
        

    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();