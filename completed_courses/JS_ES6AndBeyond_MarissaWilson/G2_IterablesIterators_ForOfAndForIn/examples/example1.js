let names = ['Spike', 'Jet', 'Faye', 'Edward'];

// if you want to know what's inside the object
for (const name of names) {
    console.log(name); // values
}

// if you want to know how the object is structured
for (const name in names) {
    console.log(name); // keys (property names)
}

//objects
class Animal {
    name = 'dog';
}

class Dog extends Animal {
    sound = 'bark';

    // methods are not enumerable in class syntax
    makeSound() {
        console.log(this.sound);
    }
}

let ein = new Dog();

for (const prop in ein) {
    console.log(prop);
}

// properties in object literal syntax are enumerable by default
let ein2 = {
    sound: 'bark',
    makeSound: function() {
        console.log('bark');
    }
}

ein2.__proto__ = {
    residence: 'Earth'
}

for (const prop in ein2) {
    console.log(prop);
}

// how to check if a specific property is enumarable
console.log(ein.propertyIsEnumerable('sound'));

for (const prop of ein) {
    console.log(prop);  // TypeError: ein is not iterable
}