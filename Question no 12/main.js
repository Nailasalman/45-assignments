"use strict";
// Question no 12: Greetings: Use the array from Exercise 11. Instead of just priting each person's name, print a 
// message to them. The message should be the same for each person, but personalized with their name.
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Neelam", "Naila", "Suraiya"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today? `);
}
