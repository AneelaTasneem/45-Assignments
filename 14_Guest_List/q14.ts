//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// // Making a list of guests:
// let guestList: string[] = [ "Muhammad Shaban" , " Mrs. Aisha" , "Samreen"];

// // Printing invitatuon message:

// guestList.forEach (guest=>{
// console.log(` Dear ${ guest} , you are invited on dinner today.
// Please come and join us. `);
// });

// Guest list:
let guestList: string[] = ["Muhammad Shaban", " Mrs. Aisha", "Samreen"];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    " Dear, " +
      guestList[i] +
      "\n You are invited on dinner today. \n Please come and join us."
  );
}
