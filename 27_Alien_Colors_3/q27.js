"use strict";
// Declaring a variable of alien_color:
let alien_color = "green";
// If the alien is green, print a message that the player earned 5 points. 
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
//  Turns if-else chain 
if (alien_color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("The player earned 10 points");
}
else if (alien_color === "red") {
    console.log("The player earned 15 points");
}
else {
    console.log("Please select right color.");
}
// 2nd version of programme:
alien_color = "yellow";
if (alien_color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("The player earned 10 points");
}
else if (alien_color === "red") {
    console.log("The player earned 15 points");
}
else {
    console.log("Please select right color.");
}
// 3rd version of programme:
alien_color = "red";
if (alien_color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("The player earned 10 points");
}
else if (alien_color === "red") {
    console.log("The player earned 15 points");
}
else {
    console.log("Please select right color.");
}