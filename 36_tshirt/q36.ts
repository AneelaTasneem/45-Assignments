// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Defining a function make_shirt:
function make_shirt(size: string, message: string) {
  //print a sentence summarizing the size of the shirt and the message printed on it:
  console.log(`The size of shirt is "${size}" and the message is"${message}".`);
}

// Call the make_shirt function with size "L" and message "Keep calm and code on!"
make_shirt("L", "Keep calm and code on!");
