// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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
for (let i = 0; i < guestList.length; i++) {
  console.log(
    " Dear, " +
      guestList[i] +
      "\n You are invited on dinner today. \n Please come and join us."
  );
}
console.log(` Miss. ${absent_Guest} will not comming on dinner`);

//  Adding a print statement to inform people about arranging a bigger dinner table:

console.log(
  " Good news we find big table so we are inviting three more guests."
);

guestList.unshift(" Aneela");
guestList.splice(2, 0, "Maheen");
guestList.push("Dania");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    " Dear, " +
      guestList[i] +
      "\n You are invited on dinner today. \n Please come and join us."
  );
}
