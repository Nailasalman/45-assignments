// Question no 37:Large Shirts: Modify the make shirt () function so that shirts are large by defult with a message
// that reads I love TypeScript.Make a large shirt and a medium shirt with the defult message, and a shirt of any 
// size with a diffent.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Making a".concat(size, " t-shirt with th message \"").concat(message, "\" printed on it."));
}
// Defultlarge and message:
make_shirt();
// Defult message, medium size
make_shirt("medium");
// Custom message,small size:
make_shirt("small", "Dive into Coding");
