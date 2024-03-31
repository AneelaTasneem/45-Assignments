// //More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// More Conditional Tests:

// 1): Tests for equality and inequality with strings:
// Declaring statements:
let statement1: string = "fun";
let statement2: string = "fact";
//  Test for equality of strings:
console.log("Are statemment1 and statement2 are equal? I predict it false");
console.log(statement1 == statement2); // false:
// Test for inequality of strings:
console.log("Are statemment1 and statement2 are not equal? I predict it true");
console.log(statement1 !== statement2); // true:

// 2): Tests using the lower case function:
console.log("Is statement2 in lowercase equal to 'fact'? I predict it true");
console.log(statement2.toLowerCase() === "fact"); //true:

// 3): Numerical tests with equality :
console.log(" Equality test with numbers:", 28 === 28); //true:
//  Numerical tests with inequality:
console.log(" Inequality test with numbers:", 28 === (54 as number)); //false:

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
const colors: string[] = ["red", "orange", "green", "blue", "white"];
console.log(" Is 'orange' presentt in an array ? ", colors.includes("orange"));
// Test whether an item is in a array
console.log(" Is 'purple' presentt in an array ? ", !colors.includes("purple"));
