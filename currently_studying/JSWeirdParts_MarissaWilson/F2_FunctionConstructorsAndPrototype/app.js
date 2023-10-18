function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

var usagi = new Person('Usagi', 'Tsukino');
console.log(usagi);

var ami = new Person('Ami', 'Mizuno');
console.log(ami);