"use strict";
// Create an array of magician's names:
let magicianNames = ["Bil Btoori", "Karnani", "Ainak wla jin"];
function copyArray(arry) {
    return [...arry];
}
// Define a function called show_magicians that accepts an array of magician names:
function show_magicians(magicians) {
    // Loop through the array and print each magician's name
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
// Define a function called make_great that modifies the array of magician names
function make_great(magicians) {
    // Modify each magician's name by adding "the Great"
    for (let i = 0; i < magicians.length; i++)
        magicians[i] = "The great " + magicians[i];
}
const copyMagicArray = copyArray(magicianNames);
// Call the make_great function to modify the magicianNames array
make_great(copyMagicArray);
// Call the show_magicians function with the array of magician's names:
console.log("\n\nThis is my original array:");
show_magicians(magicianNames);
console.log("\n\nThis is my modified copy of array:");
show_magicians(copyMagicArray);
