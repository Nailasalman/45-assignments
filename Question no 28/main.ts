// Question no 28: Stages of life: write if else chain that determine a person's stage of life . Set a value for the 
// value for the varibleage, and then:

// If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager
// If the person is 20 years old but less than 65m print a message that the person in an adult.
// If the person is age 65 or olderm print a message that the person is an elder.

let age: number = 19;


if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4 ) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log ("The person is an adult.");
} else {
    console.log("The person is an elder");
}