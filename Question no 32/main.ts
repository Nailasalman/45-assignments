// Question no 32:checking Usernames: Do following to creat a program that simulates how website ensure that 
// everyone has a unique username.

// Make a list of five or more usernames called current users.
// Make another list of five usernames called new usernames are also in the current users list.
// Loop through the new users list to see if each new, username has already been used.If it has, print a message.
// If a username has not been used, print message saying that the username is availbel.
// Make sure your companison is case insentive.If "John has used," "JOHN" should not be accepted

let currentUsers: string[] = ["user1","admin","user3","user4","user5"]
let newUsers: string[] = ["user1","usr6","user7","admin","user9"];

newUsers.forEach(newUser => {
    if (currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

  