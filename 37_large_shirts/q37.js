"use strict";
// Define a function called make_shirt that accepts two parameters: size and message, with a default size of "L" and default message of "I love TypeScript"
function make_shirt(size = "L", message = "I love Typescript") {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`The size of shirt is ${size} and the message is "${message}".`);
}
// // Call the make_shirt function with the default size "L" and default message
make_shirt();
// Call the make_shirt function with size "M" and the default message
make_shirt("M");
// Call the make_shirt function with size "S" and a different message
make_shirt("S", "Keep calm and code on!");
