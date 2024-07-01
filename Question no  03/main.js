"use strict";
// Question no 03:Name Cases: Store a person's name in a varible, and then print that person's name in lowercase, 
// uppercase, and title case.
Object.defineProperty(exports, "__esModule", { value: true });
let myName = " Naila";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
