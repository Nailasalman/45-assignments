// Question no 30:Hello Admin: Make a array of five or more usernames,including the name "admine". imagine you are 
// writing code that will print a greeting to each user after they log in to website.Loop through the array, and 
//print a greeting to each user:
// If the username is "admin, print a special greeting, such as Hello admin, would you like to see a status report?"
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var username = ["admin", "user1", "user2", "user3", "user4"];
username.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
