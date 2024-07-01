"use strict";
// Question no 22:Interational Error: Try to produce an array index error in one of your programs. Correct the error
// before finishing:
Object.defineProperty(exports, "__esModule", { value: true });
let friends = ["Neelam", "Naila", "Suraiya"];
console.log(friends[3]);
// International Error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(friends[2]);
