"use strict";
let current_users = ["Aneela", "Roni", "FaRheen", "GogO", "LUBna"];
let new_users = ["LUBna", "ShahEEna", "MOiz", "Aneela", 'LaiBA'];
new_users.forEach(newusername => {
    let lowercase = newusername.toLocaleLowerCase();
    if (current_users.map(c_user => c_user.toLocaleLowerCase()).includes(lowercase)) {
        console.log(`The current username ${newusername} is not available. please write a a different name.`);
    }
    else {
        console.log(`The username ${newusername} is availabe.`);
    }
});
