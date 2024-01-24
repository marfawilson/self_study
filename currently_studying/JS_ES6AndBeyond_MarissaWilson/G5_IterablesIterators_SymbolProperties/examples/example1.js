let numbers = {
    type: 'Integers',
    decimal: false,
    doesSomething: function() {},
    // methods & properties defined by a symbol are not included
    // when iterating over the properties that are enumerable
    [Symbol.iterator]: function() {
        const start = 0;
        const end = 5;
        let nextValue = start;
        return {
            next: () => {
                if (nextValue <= end) {
                    let nextObj = { value: nextValue, done: false };
                    nextValue++;
                    return nextObj;
                }
                return { value: nextValue, done: true };
            }
        }
    }
}

// the iterator function defined by symbols will not show up with for in
for (const prop in numbers) {
    console.log(prop);
}
