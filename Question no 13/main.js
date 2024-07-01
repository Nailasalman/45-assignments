"use strict";
// Question no 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,and
// make a list that stores several examples. Use your list to pritn series of statements about these items,such as
//"I would like to own a Honda motocyle."
Object.defineProperty(exports, "__esModule", { value: true });
let transports = ["Honda motorcycle", "Civic car", "Bianchi bicycle"];
transports.forEach(transport => {
    console.log(`I woul like to own a ${transport}.`);
});
