"use strict";
// Question no 18: Seeing the World: Think of at least five places you'd like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["Dubai", "Turkey", "Japan", "Saudia Arab", "Pakistan"];
console.log("original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Alphabetic order:", places);
places.sort();
console.log("Alphabetic order:", places);
places.reverse();
console.log("Reverse alphabetic order:", places);
