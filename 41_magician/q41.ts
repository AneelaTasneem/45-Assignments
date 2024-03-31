// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Create an array of magician's names:
let magicianNames: string[] = ["Bil Btoori", "Karnani", "Ainak wla jin"];

// Define a function called show_magicians that accepts an array of magician names:
function show_magicians(magicians: string[]) {
  // Loop through the array and print each magician's name
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}
// Call the show_magicians function with the array of magician's names:

show_magicians(magicianNames);
