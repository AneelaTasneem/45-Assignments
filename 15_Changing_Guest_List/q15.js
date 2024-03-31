// changing Guest list:
var guestList = ["Muhammad Shaban", " Mrs. Aisha", "Samreen"];
for (var i = 0; i < guestList.length; i++) {
    console.log(" Dear, " + guestList[i] + "\n You are invited on dinner today. \n Please come and join us.");
}
// can't attend dinner party.
var absent_Guest = " Samreen";
//  New guest :
var new_Guest = " Hina";
//  Substitution of guests
guestList[2] = new_Guest;
for (var i = 0; i < guestList.length; i++) {
    console.log(" Dear, " + guestList[i] + "\n You are invited on dinner today. \n Please come and join us.");
}
//   Printing message: 
console.log("Miss, ".concat(absent_Guest, " will not be comming for dinner"));
