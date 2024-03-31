// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ["Muhammad Shaban", " Mrs. Aisha", "Samreen"];
//  for( let i=0; i<guestList.length; i++){
//     console.log(" Dear, " + guestList [i]  + "\n You are invited on dinner today. \n Please come and join us.");
//  }
// can't attend dinner party.

let absent_Guest: string = " Samreen";
//  New guest :

let new_Guest: string = " Hina";

//  Substitution of guests

guestList[2] = new_Guest;

//  for( let i=0; i<guestList.length; i++){
//     console.log(" Dear, " + guestList [i]  + "\n You are invited on dinner today. \n Please come and join us.");
//  }
//  console.log(` Miss. ${absent_Guest} will not comming on dinner`);

// //  Adding a print statement to inform people about arranging a bigger dinner table:

//  console.log( " Good news we find big table so we are inviting three more guests.")

// Added three guests in array:

guestList.unshift(" Aneela");
guestList.splice(2, 0, "Maheen");
guestList.push("Dania");

//  printing array of six guests:
// for( let i=0; i<guestList.length; i++){
//     console.log(" Dear, " + guestList [i]  + "\n You are invited on dinner today. \n Please come and join us.");
//  }
//   shrinking down guests list:
//  console.log(" \nSorry we can't arrange a big table, hence two people will be invited.");

//  removing four guests from list:

while (guestList.length > 2) {
  let remove_Guest = guestList.pop();
  // console.log(` Sorry dear ${remove_Guest} , \n You are not invited to dinner.`)
}

//   our ramaing two guests:
//  for( let i=0; i<guestList.length; i++){
//     console.log(" Dear, " + guestList [i]  + "\n You are still invited on dinner today. \n Please come and join us.");
//  }

//   Removing all guests from invitation list:

guestList.splice(0, 2);

console.log(guestList);

//   print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guests are: ${guestList.length}`);
