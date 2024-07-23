//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(scoreToAdd){
        this.scores.push(scoreToAdd);
        console.log(this.scores);
    }

    average(){
        let candidatetotal = 0;
        for(let i = 0; i < this.scores.length; i++){
            candidatetotal += this.scores[i];
            console.log(candidatetotal); 
        }
        let avgScore = candidatetotal / this.scores.length;
        console.log(avgScore.toFixed(1));
        return avgScore.toFixed(1);
    }
    status(){
        let currentStatus = "";
        if(this.average() < 70){
            currentStatus = "Rejected"
            return currentStatus;
        }
        else if(this.average() >= 70 && this.average() <= 79){
            currentStatus = "Probationary"
            return currentStatus
        }
        else if(this.average() >= 80 && this.average() <= 89){
            currentStatus = "Reserve"
            return currentStatus
        }
        else if(this.average() >= 90){
            currentStatus = "Accepted"
            return currentStatus
        }
    }
}

const bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubba);
console.log(merry);
console.log(glad);
//bubba.addScore(83);
merry.average();
console.log(`${bubba.name} earned an average test score of ${bubba.average()} and has a status of ${bubba.status()}`);




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.