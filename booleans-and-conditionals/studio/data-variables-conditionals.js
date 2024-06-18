// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let numAstronauts = false;
let astronautStatus = "ready";
let allReady = false;
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let allMass = false;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let currentFuelTemp = false;
let fuelLevel = 100.0;
let adiquateFuel = false;
let weatherStatus = "clear";
let goodWeather = false;
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
   numAstronauts = true;
} 

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
   allReady = true;
} 

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    allMass = true;
} 

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < maximumFuelTemp && fuelTempCelsius > minimumFuelTemp) {
    currentFuelTemp = true;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel == 100.0) {
   adiquateFuel = true;
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    goodWeather = true; 
}

// Verify shuttle launch can proceed based on above conditions
if (numAstronauts && allReady && adiquateFuel && currentFuelTemp && goodWeather && preparedForLiftOff) {
    console.log("All systems are a go! Initiating space shuttle launch sequence");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg);
    console.log("Fuel Mass: " + fuelMassKg);
    console.log("Shuttle Mass: " + shuttleMassKg);
    console.log("Total Mass: " + totalMassKg);
    console.log("Fuel Temperature: " + fuelTempCelsius);
    console.log("Weather Status: " + weatherStatus);
    console.log("Have a safe trip astronauts!");
}