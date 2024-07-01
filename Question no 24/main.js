//Question no 24:More conditional Tests: You don't have to limit the number of tests you creat to 10. if you want 
// to try more comparisons, write more test.Have at least one True and one False result for each of the following:
// Equality with strings:
console.log("testing equality with strings");
console.log("apple" == "apple"); // True
console.log("apple" !== "apple"); // False
//Using the lower case function 
console.log("testing with lowercase:");
console.log("apple".toLowerCase() == "apple"); // True
console.log("apple".toLowerCase() != "apple"); //False
// Numerical tests:
console.log("Numerical tests:");
// Greter than and Less than:
console.log(10 > 10); // False
console.log(!(10 > 10)); // True
console.log(3 < 8); // True
console.log(9 < 7); // False
// Greater Than and Equal to , less than and equals to 
console.log(45 <= 50); // True
console.log(160 >= 1600); // False
// Equality and Inequality:
console.log(5 == 5); // True
console.log(5 != 5); // False
// Tests using "and" and "or operators"
console.log("Test with 'and' and 'or':");
console.log(5 >= 5 && 5 != 5); // false
console.log(50 == 50); // True
// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple in fruits?"); // True
console.log(!fruits.includes("apple")); // False
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
