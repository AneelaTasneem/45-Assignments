// /Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Making list of mode of transportation:
let transports: string[] = [
  "Suzuki Alto",
  " Suzuki Cultus",
  "Daihatsu Mira",
  "Honda Civic",
];

//  Printing message:

transports.forEach((transport) => {
  console.log(` I would like to own a ${transport}`);
});

//Another way to solve it:
// // Your Own Array:

// // // Making list of mode of transportation:
// let transports: string[] = [
//   "Suzuki Alto",
//   " Suzuki Cultus",
//   "Daihatsu Mira",
//   "Honda Civic",
// ];

// for (let i = 0; i < transports.length; i++) {
//   console.log("I would like to own a " + transports[i]);
// }
