// Question no 35: Animals: Think of at least three different animals that have a common charactristic.Store the 
// names of these animals in a list, and then use a for loop to print out the name of each animal.
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
