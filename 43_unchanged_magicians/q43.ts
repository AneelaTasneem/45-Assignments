// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Create an array of magician's names:
let magicianNames: string[] = ["Bil Btoori", "Karnani", "Ainak wla jin"];

function copyArray(arry: string[]) {
  return [...arry];
}

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

const copyMagicArray = copyArray(magicianNames);

// Call the make_great function to modify the magicianNames array
make_great(copyMagicArray);

// Call the show_magicians function with the array of magician's names:
console.log("\n\nThis is my original array:");
show_magicians(magicianNames);

console.log("\n\nThis is my modified copy of array:");
show_magicians(copyMagicArray);
