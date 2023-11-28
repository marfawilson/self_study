// gets a new object (the architecture allows us to omit using the 'new' keyword here)
var g = G$('Kusuo', 'Saiki');

// using our chainable methods
g.greet().setLang('es').greet(true).log();

// on the button click event, a new object is created
$('#login').click(function() {

    // creates a new Greetr object (here we assume to know the name from the login)
    var loginGrtr = G$('Kusuo', 'Saiki');

    // hides UI
    $('#logindiv').hide();

    // set language based on option (language) selected, updates h1 with formal greeting & logs to console 
    loginGrtr.setLang($('#lang').val()).header('#greeting', false).log();

});