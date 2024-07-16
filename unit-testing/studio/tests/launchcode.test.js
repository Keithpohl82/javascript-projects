// launchcode.test.js code:
const launchcode = require('../launchcode.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
    test("should return 'nonprofit' from organization key", function() {
      expect(launchcode.organization).toEqual("nonprofit");
    });

    test("should return 'Jeff' from executiveDirector key", function() {
      expect(launchcode.executiveDirector).toEqual("Jeff");
    });

    test("should return 100 from percentageCollEmployees key", function() {
      expect(launchcode.percentageCollEmployees).toEqual(100);
    });

    test("should return string based off index passed in", function() {
      expect(launchcode.programsOffered[0]).toEqual("Web Development");
      expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
      expect(launchcode.programsOffered[2]).toEqual("Liftoff");
      expect(launchcode.programsOffered.length).toEqual(3);
    });

    test("check to see if number passed in is divisible by another number or set of numbers. and returns approprate string", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
      expect(launchcode.launchOutput(3)).toEqual("Code!");
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
      expect(launchcode.launchOutput(0)).toEqual("Rutabagas! That doesn't work.");
    })



});