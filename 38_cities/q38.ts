// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//defining a function describe_city() with two parameters name ofcity and and default country(Pakistan):

import { clearScreenDown } from "readline";

function describe_city(name: string, country: string = "Pakistan") {
  console.log(`${name} is in ${country}.`);
}

// Calling the describe_city function for three different cities:
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("Toranto", "Canada");