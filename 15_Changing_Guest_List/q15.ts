// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList: string[] = ["Muhammad Shaban", " Mrs. Aisha", "Samreen"];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    " Dear, " +
      guestList[i] +
      "\n You are invited on dinner today. \n Please come and join us."
  );
}
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

//   Printing message:

console.log(`Miss, ${absent_Guest} will not be comming for dinner`);
