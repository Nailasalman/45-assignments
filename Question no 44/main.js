// Question no 44:Sandwiches: Write a fnction that accepts a array of items a person wants on a sandwich. The 
// function should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a diffrent number of
//arguments each time. 
function make_sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwhich("ham", "cheese");
make_sandwhich("turkey", "lettuce", "tomato");
make_sandwhich("avocado", "sprouts", "musturd", "mayo");
