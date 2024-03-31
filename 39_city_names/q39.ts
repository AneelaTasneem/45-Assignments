// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//Defining a function called city_country that acceps two parameters:
function city_country(city: string, country: string) {
  // Return a formatted string combining the city and country
  return `${city} ${country}`;
}

// Call the city_country function with three different city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));
