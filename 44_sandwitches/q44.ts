//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Define a function called makeSandwich that accepts a variable number of arguments representing sandwich items
function makeSandwich(...items: string[]) {
  console.log("Making your sandwich with:");
  items.forEach((item) => console.log("- " + item));
  console.log("Enjoy your sandwich!\n");
}

// Call the makeSandwich function three times with a different number of arguments each time
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
