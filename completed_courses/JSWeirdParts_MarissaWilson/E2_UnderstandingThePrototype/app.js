var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; // the 'this' keyword will point to the sakura object because that is the object that originated the call (invocation)
    }
}

var sakura = {
    firstname: 'Sakura',
    lastname: 'Kinomoto'
}


// don't do this EVER! for demo purposes only!!!
sakura.__proto__ = person;
console.log(sakura.getFullName());
console.log(sakura.firstname); // returns 'Sakura', not 'Default', because the prototype chain stops & returns the value as soon as it finds what it's looking for

var kero = {
    firstname: 'Kero'
}

// again, DON'T do this!
kero.__proto__ = person; // points to the same object reference in memory as the sakura prototype
console.log(kero.getFullName()); // returns 'Kero Default' because the kero object only has a firstname property, so we then look to the person object (prototype) for the lastname property