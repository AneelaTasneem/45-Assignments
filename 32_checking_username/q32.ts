// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


//Checking Usernames

//Making a list of current_users:
let current_users:string [] =["Aneela","Roni","FaRheen", "GogO", "LUBna"];

//Making a list of new_users:
let new_users :string [] = ["LUBna","ShahEEna" ,"MOiz","Aneela",'LaiBA' ];

new_users.forEach(newusername =>{
    let lowercase :string =newusername. toLocaleLowerCase();

    if (current_users.map(c_user =>c_user. toLocaleLowerCase()). includes(lowercase)){

console.log(`The current username ${newusername} is not available. please write a a different name.`);
} else {
    console.log(`The username ${newusername} is availabe.`);
}

})