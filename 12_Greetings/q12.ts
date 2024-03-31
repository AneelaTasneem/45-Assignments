import { clearScreenDown } from "readline";

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// // Greetings:

// // Storing names of friends in an array:

let friendsName: string[] = ["Ayesha", "Samreen", "Erum"];

for (let i = 0; i < friendsName.length; i++) {
  console.log(
    "Hello, " + friendsName[i] + "  would you like to have a cup of tea?"
  );
}
