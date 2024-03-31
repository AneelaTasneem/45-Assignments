// Guest List: 
// // Making a list of guests:
// let guestList: string[] = [ "Muhammad Shaban" , " Mrs. Aisha" , "Samreen"];
// // Printing invitatuon message:
// guestList.forEach (guest=>{
// console.log(` Dear ${ guest} , you are invited on dinner today. 
// Please come and join us. `);
// });
// Guest list:
var guestList = ["Muhammad Shaban", " Mrs. Aisha", "Samreen"];
for (var i = 0; i < guestList.length; i++) {
    console.log(" Dear, " + guestList[i] + "\n You are invited on dinner today. \n Please come and join us.");
}
