function b() {
	console.log(myVar);
}

function a() {
	// now that function b is in a new lexical environment, myVar's value is 2
	// function b() {
	// 	console.log(myVar);
	// }

	var myVar = 2;
	b();
}

var myVar = 1;
a();// returns a value of 1; function b is in the same lexical environment (level) as the GEC