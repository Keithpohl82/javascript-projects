const whoWon = require('../RPS.js');
const RPS = require('../RPS.js');

describe("Rock, Paper, Scissors", function(){

    test("should return 'TIE!' if both players select the same option", function(){
        let output = whoWon("rock", "rock");
        expect(output).toEqual("TIE!");
    });

    test("should return 'Player 2 wins!' if Player1 = rock & Player2 = paper", function(){
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!");
     });
     
     test("should return 'Player 2 wins!' if Player1 = paper & Player2 = scissors", function(){
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!");
     });

     test("should return 'Player 2 wins!' if Player1 = scissors & Player2 = rock", function() {
        let output = whoWon("scissors", "rock");
        expect(output).toEqual("Player 2 wins!");
     })

})