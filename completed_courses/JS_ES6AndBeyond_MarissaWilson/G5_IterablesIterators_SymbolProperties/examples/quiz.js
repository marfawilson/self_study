let stepper = {
    [Symbol.iterator]: function() {
        return {
            step: () => {
                return { value: 0, done: true };
            }
        }
    }
}