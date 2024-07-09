// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];



function selectRandomEntry(arrayInput){
  let randomID = Math.floor(Math.random() * arrayInput.length);
  return idNumbers[randomID];
}


let selectedCrew = [];
  
while (selectedCrew.length < 3){
  let pickedMember = selectRandomEntry(idNumbers);
    if (!selectedCrew.includes(pickedMember)) {
      selectedCrew.push(pickedMember);
    }  
  }

  console.log(selectedCrew);


// Code your buildCrewArray function here:
function buildCrewArray(randomIdArray, candidateArray){
  let crewNames = [];
 
  for(i = 0; i < randomIdArray.length; i++){
    //console.log(randomIdArray[i]);
    if(candidateArray.includes(randomIdArray[i])){
      console.log(i); 
    }
  }
  
}


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
buildCrewArray(selectedCrew, animals);
//console.log(`${buildCrewArray(selectedCrew[0].name)}, ${buildCrewArray(selectedCrew[1].name)}, and ${buildCrewArray(selectedCrew[2].name)} are going to space!`)

//console.log(`${buildCrewArray(selectedCrew[0])}, ${buildCrewArray(selectedCrew[1].name)}, and ${buildCrewArray(selectedCrew[2].name)} are going to space!`)
