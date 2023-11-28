/* automatic semicolon insertion occurs when the syntax parser expects a semicolon after certain statements.
the code on lines 8-11 would return 'undefined' on line 21 because the return statement's syntax definition requires a semicolon at the end.
so, the syntax parser automatically inserts a semicolon after the return statement (since that's what's expected), thus kicking out of the function before getting to the object. */

function getPerson() {

    /* 

    return
    {
        firstname: 'Marissa
    } 

    */

    return {
        firstname: 'Marissa'
    }

}

console.log(getPerson());