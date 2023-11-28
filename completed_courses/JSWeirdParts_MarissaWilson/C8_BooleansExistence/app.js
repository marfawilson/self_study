var a;

// some code that goes to the internet and looks for a value

a = 0;

if(a || a === 0) {
    console.log('something is there...');
} 

/* the above if statement checks for the existence of a value assigned to the variable 'a'. the number 0 would typically coerce to 'false', however 0 can be a valid value, so here we use the logical or and strict equality operators to check for the existence of variable a. */