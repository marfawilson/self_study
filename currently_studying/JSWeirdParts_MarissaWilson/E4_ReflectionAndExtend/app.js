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







