// Question no 16: More Guests: you've found a bigger dinner table, so there's room for more guests.

let guests:string[] = ["Neelam","Naila","Suraiya"]
console.log("Great news! I found a bigger dinner table!");

// Adding more guests:
guests.unshift("Sumaiya");
guests.splice(guests.length/2, 0, "Naima");
guests.push("Serwat");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});