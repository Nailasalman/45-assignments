// Question no 17: Shinking Guest List:
// Unfortunately, your new table won't arrive in time, and you can only invite two guests.

// Original array before removing guests
let latestGuest: string[] = ["Neelam","Naila","Suraiya"]

console.log(" Unfortunately, i can only invite two people for dinner.");
while (latestGuest.length>2) {
    let removedGuest = latestGuest.pop();
    console.log(`sorry, ${removedGuest}, I can't invite you to dinner.`);
}

latestGuest.forEach(guest => {
    console.log(`Dear ${guest}, you're still invite to dinner.`);
});

latestGuest.splice(0,latestGuest.length);
console.log(latestGuest); 