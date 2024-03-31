// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Define a function called make_shirt that accepts two parameters: size and message, with a default size of "L" and default message of "I love TypeScript"
function make_shirt(size: string = "L", message: string = "I love Typescript") {
  // Print a sentence summarizing the size of the shirt and the message printed on it
  console.log(`The size of shirt is ${size} and the message is "${message}".`);
}

// // Call the make_shirt function with the default size "L" and default message
make_shirt();

// Call the make_shirt function with size "M" and the default message
make_shirt("M");

// Call the make_shirt function with size "S" and a different message
make_shirt("S", "Keep calm and code on!");
