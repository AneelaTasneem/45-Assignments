"use strict";
// Hello Admin:
//  Creating an array:
let userNames = ["Admin", "Hira", "Faisal", "Hooria", "Ali"];
for (let userName of userNames) {
    if (userName === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
}
