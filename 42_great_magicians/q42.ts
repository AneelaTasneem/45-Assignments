// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Create an array of magician's names:
let magicianNames: string[] = ["Bil Btoori", "Karnani", "Ainak wla jin"];

// Define a function called show_magicians that accepts an array of magician names:
function show_magicians(magicians: string[]) {
  // Loop through the array and print each magician's name
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

// Define a function called make_great that modifies the array of magician names
function make_great(magicians: string[]) {
  // Modify each magician's name by adding "the Great"
  for (let i = 0; i < magicians.length; i++)
    magicians[i] = "The great " + magicians[i];
}

// Call the make_great function to modify the magicianNames array
make_great(magicianNames);

// Call the show_magicians function with the array of magician's names:
show_magicians(magicianNames);
