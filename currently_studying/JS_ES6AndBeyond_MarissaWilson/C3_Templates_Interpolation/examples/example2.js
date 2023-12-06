function greet(strings, firstname, lastname) {
    let firstNameType;

    firstNameType = firstname === 'Usagi' ? "short" : "long";

    return `${strings[0]}${firstname}${strings[1]}${lastname}. You used your ${firstNameType} name.`
}

const firstname = 'Serena';
const lastname = 'Tsukino';
const greeting = greet`Hello, ${firstname} ${lastname}`;

console.log(greeting);