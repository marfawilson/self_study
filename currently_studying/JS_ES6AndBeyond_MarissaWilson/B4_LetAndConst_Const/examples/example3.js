// when using 'const', the binding (pointer) is immutable, but not the value
// on line 6, we successfully update the value of the 'firstname' property
// since the value of the property is changing, not the object itself

const bebop = { firstname: 'Spike', lastname: 'Spiegel' };
bebop.firstname = 'Ace';

console.log(bebop);