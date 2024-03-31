//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo(
  manufacturer: string,
  modelname: string,
  ...exrtaOption: { [key: string]: any }[]
): object {
  // Start with the required information
  const carInfo = {
    manufacturer,
    modelname,
    // Spread operator (...) is used to merge all the objects in exrtaOption into a single object
    ...Object.assign({}, ...exrtaOption),
  };
  // Return the object containing all the car information
  return carInfo;
}
// Call the function with the required information and additional key-value pairs
let answer = storeCarInfo(
  "Honda",
  "Civic",
  { color: "black " },
  { features: ["navigation", "power window"] }
);
// Print the object to see the stored information
console.log(answer);
