// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// JS has a synchronous way of handling asynchronous events

// Events that happen outside of the JS engine get placed into an event queue & processed in the order they occurred

// The JS engine won't look at the event queue until the execution stack is empty 

// Long running functions like above can interrupt events being handled