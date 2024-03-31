"use strict";
//Storing number 1 to 9 in an array:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array:
for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding; // Variable to store ending of each number:
    // using if and else chain within the loop to determine ordinal endings of each number:
    if (numbers[i] === 1) {
        ordinalEnding = "st"; // 1st for 1:
    }
    else if (numbers[i] === 2) {
        ordinalEnding = "nd"; // 2nd for 2:
    }
    else if (numbers[i] === 3) {
        ordinalEnding = "rd"; // 3rd for 3:
    }
    else {
        ordinalEnding = "th"; // th for all other numbers:
    }
    // Printing numbers along ordinal ending:
    console.log(`${numbers[i]} ${ordinalEnding}`);
}
;
