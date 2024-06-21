const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userSelection1;
let userSelection2;
let optionsArray;
let userArray1;
userSelection1 = input.question("Please pick a number from 0 to 3: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userSelection1 >= 0 && userSelection1 < 4) {
    console.log(cargoHold[Number(userSelection1)])
    userArray1 = cargoHold.join([Number(userSelection1)])
    console.log(userArray1);
} else {
    console.log("Invalid selection");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
