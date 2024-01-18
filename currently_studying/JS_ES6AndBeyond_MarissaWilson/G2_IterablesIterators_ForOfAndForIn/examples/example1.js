let names = ['Spike', 'Jet', 'Faye', 'Edward'];

// if you want to know what's inside the object
for (const name of names) {
    console.log(name); // values
}

// if you want to know how the object is structured
for (const name in names) {
    console.log(name); // keys
}