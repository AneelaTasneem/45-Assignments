// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store person's name in a variable

let personName: string = "aneela";

// Store person'n name in lower case

console.log(personName.toLowerCase());

//Store person's name to upper case

console.log(personName.toUpperCase());

//Store person's name to title case

console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 6));
