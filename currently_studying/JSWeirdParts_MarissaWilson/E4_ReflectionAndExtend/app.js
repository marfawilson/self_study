// reflection: an object can look at itself, listing & changing its properties & methods

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var sakura = {
    firstname: 'Sakura',
    lastname: 'Kinomoto'
}

// don't do this EVER! for demo purposes only!!!
sakura.__proto__ = person;

// reflection of metadata (looking at its own properties)
for (var prop in sakura) {
    if (sakura.hasOwnProperty(prop)) {
        console.log(prop + ': ' + sakura[prop]);
    }
}


var kero = {
    address: 'Osaka, Japan',
    getFormalFullName: function() {
        return this.lastname + ' ' + this.firstname;
    }
}

var tomoyo = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(sakura, kero, tomoyo); // this method composes an object by adding the properties of other objects passed in as parameters
console.log(sakura);