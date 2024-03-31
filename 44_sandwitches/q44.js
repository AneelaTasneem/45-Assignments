"use strict";
// Define a function called makeSandwich that accepts a variable number of arguments representing sandwich items
function makeSandwich(...items) {
    console.log("Making your sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
// Call the makeSandwich function three times with a different number of arguments each time
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
