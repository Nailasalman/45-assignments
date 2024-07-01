// Question no 27: Alien color#3: Turn your if else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earnded 5 points.
// If the alien is yellow,print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Green alien version:
var alien = "green";
if (alien === "green") {
    console.log("Congrates! You earned 5 points.");
}
else if (alien === "yellow") {
    console.log("Congrates! You earned 10 points.");
}
else if (alien === "red") {
    console.log("Congrates! You earned 15 points");
}
// Yellow alien version:
alien = "yellow";
if (alien === "green") {
    console.log("Congrates! You just earned 5 points.");
}
else if (alien === "yellow") {
    console.log("Congrates!You just earned 10 points.");
}
else if (alien === "red") {
    console.log("Congrates!You  just earned 15 points.");
}
// Red alien version:
alien = "red";
if (alien === "green") {
    console.log("Congrates! You just earned 5 points.");
}
else if (alien === "yellow") {
    console.log("Congrates!You just earned 10 points.");
}
else if (alien === "red") {
    console.log("Congrates!You earned 15 points.");
}
