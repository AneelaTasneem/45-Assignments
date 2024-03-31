// //  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

import { reverse } from "dns";

// storing names of places in non-alphabetical order in an array:
let places: string[] = ["Kenya", "Turkey", "Canada", "London", "Maldives"];

// Printing arry in its original order:
console.log("Original  " + places);

// printing an array in alphabetical order without modifying the actual list:
console.log(" Copy  " + [...places].sort());

// Showing an arry is still in it's original form by printing it:
console.log("Original  " + places);

// • Printing array in reverse alphabetical order without changing the order of the original list.
console.log(" Copy  " + [...places].sort().reverse());

// Showing that array is still in its original order by printing it again:
console.log("Original  " + places);

// Reverse the order of list. Print the array to show that its order has changed.
console.log("Original  " + places.reverse());

// Reverse the order of  list again. Print the list to show it’s back to its original order.
console.log("Original  " + places.reverse());

//  Sort  array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Original  " + places.sort());

//  Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original  " + places.sort().reverse());
