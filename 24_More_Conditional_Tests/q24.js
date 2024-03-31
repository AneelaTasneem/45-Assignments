"use strict";
// More Conditional Tests: 
// 1): Tests for equality and inequality with strings:
// Declaring statements:
let statement1 = "fun";
let statement2 = "fact";
//  Test for equality of strings:
console.log("Are statemment1 and statement2 are equal? I predict it false");
console.log(statement1 == statement2); // false:
// Test for inequality of strings: 
console.log("Are statemment1 and statement2 are not equal? I predict it true");
console.log(statement1 !== statement2); // true:
// 2): Tests using the lower case function:
console.log("Is statement2 in lowercase equal to 'fact'? I predict it true");
console.log(statement2.toLowerCase() === 'fact'); //true:
// 3): Numerical tests with equality :
console.log(" Equality test with numbers:", 28 === 28); //true:
//  Numerical tests with inequality:
console.log(" Inequality test with numbers:", (28 === 54)); //false:
// Greater than:
console.log(" Greater than test : ", 44 > 10); //true:
// Less than:
console.log(" small than test : ", 44 < 10); // false:
// Greater than or equal to:
console.log("Greater than or equal to test: ", 99 >= 99); //true:
// Less than or equal to:
console.log("Less than or equal to test: ", 45 >= 85); //false:
// 4): Tests using "and" operators:
console.log(" And operation: ", 4 === 4 && 4 < 10); //true:
// 4): Tests using "or" operators:
console.log(" Or operation: ", 4 === 4 || 4 > 10); //true:
// Test whether an item is in a array:
const colors = ['red', 'orange', 'green', 'blue', 'white'];
console.log(" Is 'orange' presentt in an array ? ", colors.includes('orange'));
// Test whether an item is in a array
console.log(" Is 'purple' presentt in an array ? ", !colors.includes('purple'));
