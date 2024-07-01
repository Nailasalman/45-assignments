// Question no 44:Sandwiches: Write a fnction that accepts a array of items a person wants on a sandwich. The 
// function should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a diffrent number of
//arguments each time. 

function make_sandwhich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}

make_sandwhich("ham", "cheese");
make_sandwhich("turkey","lettuce","tomato");
make_sandwhich("avocado","sprouts","musturd","mayo");