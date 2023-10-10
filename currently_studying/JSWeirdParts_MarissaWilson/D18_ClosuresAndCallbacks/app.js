// a closure with a callback function
function sayHiLater() {

    var greeting = 'Hi!';

// the setTimeout function is a callback function by nature
    setTimeout(function() {

        console.log(greeting); // looks up the scope chain for the greeting variable

    }, 3000);

}

sayHiLater(); // when this is invoked, it 'calls back' the setTimeout function

function tellMeWhenDone(callback) {

    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function() {

    console.log('I am done...');

});

tellMeWhenDone(function() {
    alert('I am done fr fr')
});