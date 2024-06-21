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
//console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userSelection1;
userSelection1 = input.question("Please select a cabinet number from 0 to 3: ");
let cabinetSelection = cargoHold[userSelection1];
//console.log(cabinetSelection);

/*4) Use bracket notation and a template literal to display the contents of the selected cabinet. 
If the user entered an invalid number, print an error message.*/
if (userSelection1 >= 0 && userSelection1 < cargoHold.length) {
    console.log(`your choices are ${cabinetSelection}`);
} else {
    console.log("Error, you have entered an invalid number");
}

/*5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”*/
let itemSelection;
let askForItem = input.question("Please use 0 to 3 to select an item: ");
itemSelection = cabinetSelection[Number(askForItem)];
if (cabinetSelection.includes(itemSelection)) {
    console.log(`Cabinet ${cargoHold[userSelection1]} DOSE contain ${itemSelection}`);
} else {
    console.log("Item not in cabinet");
}