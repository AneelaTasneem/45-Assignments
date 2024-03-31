"use strict";
//defining a function describe_city() with two parameters name ofcity and and default country(Pakistan):
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(name, country = "Pakistan") {
    console.log(`${name} is in ${country}.`);
}
// Calling the describe_city function for three different cities:
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("Toranto", "Canada");
